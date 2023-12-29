import { PrismaClient } from '@/prisma/generated/client';
import { NextResponse } from 'next/server';
import Joi from 'joi';
import { isBefore, startOfDay } from 'date-fns';


const prisma = new PrismaClient();

// Schema di validazione con Joi
const schema = Joi.object({
  nome: Joi.string().trim().min(3).max(30).required()
    .messages({
      'string.base': 'Il nome deve essere una stringa',
      'string.empty': 'Il nome non può essere vuoto',
      'string.min': 'Il nome deve contenere almeno {#limit} caratteri',
      'string.max': 'Il nome non può superare {#limit} caratteri',
      'any.required': 'Il nome è obbligatorio',
    }),
  
  cognome: Joi.string().trim().min(3).max(30).required()
    .messages({
      'string.base': 'Il cognome deve essere una stringa',
      'string.empty': 'Il cognome non può essere vuoto',
      'string.min': 'Il cognome deve contenere almeno {#limit} caratteri',
      'string.max': 'Il cognome non può superare {#limit} caratteri',
      'any.required': 'Il cognome è obbligatorio',
    }),

  telefono: Joi.string().trim().pattern(/^\d+$/).required()
    .messages({
      'string.base': 'Il numero di telefono deve essere una stringa',
      'string.empty': 'Il numero di telefono non può essere vuoto',
      'string.pattern.base': 'Il numero di telefono può contenere solo numeri',
      'any.required': 'Il numero di telefono è obbligatorio',
    }),

  email: Joi.string().trim().email({
    minDomainSegments: 2,
    tlds: {
      allow: [
        'com',
        'net',
        'it', 
      ],
    },
  }).required()
    .messages({
      'string.base': 'L\'indirizzo email deve essere una stringa',
      'string.empty': 'L\'indirizzo email non può essere vuoto',
      'string.email': 'L\'indirizzo email deve essere valido',
      'any.required': 'L\'indirizzo email è obbligatorio',
    }),

    data: Joi.date().iso().required()
    .messages({
      'date.base': 'La data deve essere una data valida',
      'date.empty': 'La data non può essere vuota',
      'any.required': 'La data è obbligatoria',
    }),

  orario: Joi.string().trim().required()
    .messages({
      'string.base': 'L\'orario deve essere una stringa',
      'string.empty': 'L\'orario non può essere vuoto',
      'any.required': 'L\'orario è obbligatorio',
    }),
});

export async function POST(req) {
  try {
    const { nome, cognome, telefono, email, data, orario } = await req.json();

    console.log('Dati ricevuti nel backend:', { nome, cognome, telefono, email, data, orario });

    // Verifica se esiste già una prenotazione per la stessa data e orario
    const existingPrenotazione = await prisma.prenotazione.findFirst({
      where: {
        data: new Date(data)
      },
    });

    if (existingPrenotazione) {
      return NextResponse.json({ error: 'Esiste già una prenotazione per la stessa data e orario.' }, { status: 400 });
    }

    // Controllo disponibilità fascia oraria
    const today = new Date();

    if (isBefore(new Date(data), startOfDay(today))) {
      return NextResponse.json({ error: 'La data non può essere precedente a oggi.' }, { status: 400 });
    }

    // Creazione della prenotazione se i dati sono validi
    const nuovaPrenotazione = await prisma.prenotazione.create({
      data: {
        nome,
        cognome,
        telefono,
        email,
        data: new Date(data),
        orario,
      },
    });

    return NextResponse.json({ nuovaPrenotazione }, { status: 201 });
  } catch (error) {
    console.error('Errore durante l\'esecuzione della funzione POST API:', error);
    return NextResponse.json({ error: 'Errore interno del server' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Recupera tutte le prenotazioni dal database
    const prenotazioni = await prisma.prenotazione.findMany();

    // Restituisci le prenotazioni come risposta JSON
    return NextResponse.json({ prenotazioni }, { status: 200 });
  } catch (error) {
    console.error('Errore durante il recupero delle prenotazioni:', error);
    return NextResponse.json({ error: 'Errore interno del server' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const id  = request.nextUrl.searchParams.get("id");

    // Verifica se la prenotazione esiste
    const existingPrenotazione = await prisma.prenotazione.findFirst({
      where: {
        id: parseInt(id),
      },
    });

    if (!existingPrenotazione) {
      return NextResponse.json({ error: 'Prenotazione non trovata.' }, { status: 404 });
    }

    // Elimina la prenotazione
    await prisma.prenotazione.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json({ message: 'Prenotazione eliminata con successo.' }, { status: 200 });
  } catch (error) {
    console.error('Errore durante l\'esecuzione della funzione DELETE API:', error);
    return NextResponse.json({ error: 'Errore interno del server' }, { status: 500 });
  }
}
