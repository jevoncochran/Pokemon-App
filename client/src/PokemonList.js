import React from 'react'

export default function PokemonList({ pokemon }) {
    return (
        <div>
            {pokemon.map(p => (
                <div key={p.name}>{p.name}</div>
            ))}
        </div>
    )
}
