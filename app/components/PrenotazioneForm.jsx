'use client';
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, date } from 'yup';
import { toast } from "react-toastify";
import Link from "next/link";

let formattedToday = new Date();
formattedToday = formattedToday.toISOString().split('T')[0];

// Yup schema
let schema = object({
  nome: string().trim().required('Il nome è obbligatorio').min(3).max(30),
  cognome: string().trim().required('Il cognome è obbligatorio').min(3).max(30),
  telefono: string().trim().required('Il numero di telefono è obbligatorio').matches(/^\d+$/, 'Il numero di telefono può contenere solo numeri'),
  email: string().trim().email('Inserisci un indirizzo email valido').required("L'email è obbligatoria"),
  data: date().required('La data è obbligatoria').min(formattedToday, 'La data non può essere precedente a oggi'),
});

// Genera intervalli di 30 minuti per l'orario
function generateTimeIntervals(startHour, endHour, intervalMinutes) {
  const intervals = [];
  let currentHour = startHour;
  let currentMinute = 0;

  while (currentHour < endHour) {
    intervals.push({
      hour: currentHour,
      minute: currentMinute,
      label: `${String(currentHour).padStart(2, "0")}:${String(currentMinute).padStart(2, "0")}`,
    });

    currentMinute += intervalMinutes;

    if (currentMinute === 60) {
      currentHour++;
      currentMinute = 0;
    }
  }

  return intervals;
}

function Prenotazione() {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      orario: '',
    },
  });

  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { errors } = formState;

  const morningIntervals = generateTimeIntervals(8, 12, 30);
  const afternoonIntervals = generateTimeIntervals(14, 18, 30);

  const [selectedOrario, setSelectedOrario] = useState('');
  const [orarioError, setOrarioError] = useState('');

  const handleCreatePrenotazione = async (data) => {
    console.log('Dati inviati:', data);

    if (!selectedOrario) {
      setOrarioError('Seleziona un orario prima di procedere.');
      return;
    }

    // Includi l'orario nei dati
    data.orario = selectedOrario;

    try {
      const response = await fetch('http://localhost:3000/api/prenotazioni', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setShowSuccessToast(true);
        setErrorMessage('');
        setOrarioError('');
        console.log('Prenotazione creata con successo!');
      } else {
        const responseData = await response.json();
        setOrarioError(responseData.error);
        if (responseData.error) {
          setErrorMessage('Esiste già una prenotazione per la stessa data e orario.');
        } else {
          console.error('Errore durante la creazione della prenotazione:', responseData.error);
          setErrorMessage('Errore durante la creazione della prenotazione.');
        }
      }
    } catch (error) {
      console.error('Errore durante la chiamata API:', error);
      setErrorMessage('Errore durante la chiamata API.');
    }
  };

  useEffect(() => {
    if (formState.isSubmitted && !selectedOrario) {
      setOrarioError('Seleziona un orario prima di procedere.');
    } else {
      setOrarioError('');
    }
  }, [formState.isSubmitted, selectedOrario]);

  useEffect(() => {
    if (showSuccessToast) {
      toast.success("Prenotazione creata con successo!");
    } 
  }, [showSuccessToast]);

  return (
    <form onSubmit={handleSubmit(handleCreatePrenotazione)} className="flex flex-col items-center justify-center h-screen mt-12 p-6 bg-white shadow-md rounded-md">
      <Link href="/ListaPrenotazioni" className="font-bold text-xl mb-4 text-blue-500">Vedi ista prenotazioni</Link>
      <h1 className="font-bold text-2xl mb-4">Prenotazione</h1>
      <div className="max-w-xl w-full p-12 bg-white shadow-md rounded-md">
        <div className="flex flex-wrap -mx-2">
          <div className="mb-4 w-full lg:w-1/2 px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              {...register('nome')}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
          </div>
          <div className="mb-4 w-full lg:w-1/2 px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cognome">
              Cognome
            </label>
            <input
              type="text"
              name="cognome"
              id="cognome"
              {...register('cognome')}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            {errors.cognome && <p className="text-red-500 text-sm mt-1">{errors.cognome.message}</p>}
          </div>
        </div>

        <div className="flex flex-wrap -mx-2">
          <div className="mb-4 w-full lg:w-1/2 px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
              Telefono
            </label>
            <input
              type="text"
              name="telefono"
              id="telefono"
              {...register('telefono')}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>}
          </div>
          <div className="mb-4 w-full lg:w-1/2 px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register('email')}
              className="border border-gray-300 p-2 w-full rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="data">
            Data
          </label>
          <input
            type="date"
            name="data"
            id="data"
            min={formattedToday}
            defaultValue={formattedToday}
            {...register('data')}
            className="border border-gray-300 p-2 w-full rounded-md"
          />
          {errors.data && <p className="text-red-500 text-sm mt-1">{errors.data.message}</p>}
        </div>

         <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orario">
            Orario
          </label>
          <div>
  <p className="mt-4">Mattina:</p>
  <div className="mb-2">
    {morningIntervals.map((interval) => (
      <button
        key={`${interval.hour}:${interval.minute}`}
        type="button"
        className="mt-4 ml-2 bg-teal-400 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none"
        onClick={() => {
          setSelectedOrario(interval.label);
          setOrarioError(''); // Resetta l'errore quando si seleziona un nuovo orario
        }}
      >
        {interval.label}
      </button>
    ))}
  </div>
  <p className="mt-4">Pomeriggio:</p>
  <div className="mb-2">
    {afternoonIntervals.map((interval) => (
      <button
        key={`${interval.hour}:${interval.minute}`}
        type="button"
        className="mt-4 ml-2 bg-teal-400 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none"
        onClick={() => {
          setSelectedOrario(interval.label);
          setOrarioError(''); // Resetta l'errore quando si seleziona un nuovo orario
        }}
      >
        {interval.label}
      </button>
    ))}
  </div>
</div>

        </div>
        {orarioError && (
          <p className="text-red-500 text-sm mt-1">{orarioError}</p>
        )}

        {errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}

        <button 
          type="submit" 
          className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          disabled={formState.isSubmitting}
        >
          Prenota
        </button>
      </div>
    </form>
  );
}

export default Prenotazione;
