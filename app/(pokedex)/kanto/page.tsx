"use client"
import React, { useState, useEffect } from 'react';

interface Kanto {
    id: number;
    name: string;
    picture: string;
    types: string[];
    description: string;
    hp: number;
    pc: number;
}

export default function PokedexKanto() {
    const [pokemons, setPokemons] = useState<Kanto[]>([]);

    useEffect(() => {
        fetch('/api/kanto') // L'URL de votre API Next.js
            .then(response => response.json())
            .then(data => {
                if (data && data.data) {
                    setPokemons(data.data); // Assurez-vous que 'data.data' est correctement défini selon la structure de retour de votre API
                }
            })
            .catch(error => console.error('Error fetching Pokemon data:', error));
    }, []);

    return (
        <main className="flex flex-col items-center h-screen bg-slate-800 text-white text-lg p-12">
            <h1 className="text-3xl mb-12">Pokedex - Kanto</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
                    <thead className="text-white">
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Picture</th>
                            <th className="px-4 py-2">Types</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">HP</th>
                            <th className="px-4 py-2">PC</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {pokemons.map(pokemon => (
                            <tr key={pokemon.id}>
                                <td className="px-4 py-2">{pokemon.name}</td>
                                <td className="px-4 py-2"><img src={pokemon.picture} alt={pokemon.name} className="w-16 h-16 object-cover" /></td>
                                <td className="px-4 py-2">{pokemon.types.join(', ')}</td>
                                <td className="px-4 py-2">{pokemon.description}</td>
                                <td className="px-4 py-2">{pokemon.hp}</td>
                                <td className="px-4 py-2">{pokemon.pc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}