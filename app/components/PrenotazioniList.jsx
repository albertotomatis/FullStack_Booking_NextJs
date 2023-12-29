'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { FaTrash } from 'react-icons/fa';

const PrenotazioniList = () => {
  const [prenotazioni, setPrenotazioni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadPrenotazioni = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/prenotazioni');

      if (response.ok) {
        const data = await response.json();
        // Ordina le prenotazioni per data dalla più recente alla meno recente
        const sortedPrenotazioni = data.prenotazioni.sort((a, b) => new Date(b.data) - new Date(a.data));
        setPrenotazioni(sortedPrenotazioni);
        setError('');
      } else {
        const responseData = await response.json();
        setError(responseData.error || 'Errore durante il recupero delle prenotazioni');
      }
    } catch (error) {
      console.error('Errore durante la chiamata API:', error);
      setError('Errore durante la chiamata API.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure?");

    if (confirmed) {
    try {
      const response = await fetch(`http://localhost:3000/api/prenotazioni?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Ricarica le prenotazioni dopo l'eliminazione
        loadPrenotazioni();
      } else {
        const responseData = await response.json();
      console.error('Errore durante la richiesta DELETE:', responseData.error);
      setError(responseData.error || 'Errore durante l\'eliminazione della prenotazione');
      }
    } catch (error) {
      console.error('Errore durante la chiamata API:', error);
      setError('Errore durante l\'eliminazione della prenotazione.');
    }
  }
  };

  useEffect(() => {
    loadPrenotazioni();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center mt-12 p-6 bg-white'>
      <Link href="/" className="font-bold text-xl mb-4 text-blue-500">Prenota</Link>
    <h1 className="font-bold text-2xl mb-5">Lista prenotazioni</h1>
    {loading && <p>Caricamento...</p>}
    {error && <p className="text-red-500">{error}</p>}
    {prenotazioni.length > 0 && (
      <div className="max-w-screen-md mx-auto">
        <table className="min-w-full border shadow-md rounded-md">
          <thead>
            <tr>
              <th className="border p-2">Nome</th>
              <th className="border p-2">Cognome</th>
              <th className="border p-2">Data</th>
              <th className="border p-2">Orario</th>
              <th className="border p-2">Azione</th>
            </tr>
          </thead>
          <tbody>
            {prenotazioni.map((prenotazione, index) => (
              <tr key={prenotazione.id} className={index % 2 === 0 ? 'bg-sky-200' : 'bg-white'}>
                <td className="border p-3">{prenotazione.nome}</td>
                <td className="border p-3">{prenotazione.cognome}</td>
                <td className="border p-3">{new Date(prenotazione.data).toLocaleDateString()}</td>
                <td className="border p-3">{prenotazione.orario}</td>
                <td className="border p-2">
                  <button onClick={() => handleDelete(prenotazione.id)}>
                    <FaTrash color='red' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
</div>
  );
};

export default PrenotazioniList;

