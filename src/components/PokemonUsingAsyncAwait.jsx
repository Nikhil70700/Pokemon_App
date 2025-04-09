import React, { useEffect, useState } from 'react'

const PokemonUsingAsyncAwait = () => {

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API = 'https://pokeapi.co/api/v2/pokemon/pikachu';
    const fetchPokemon = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            setPokemon(data);
            setLoading(false);
            
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false)            
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    console.log(pokemon);

    if (loading) {
        return <div>
            <h1>Loading...</h1>
        </div>
    }

    if (error) {
        return (
            <div>
                <h1>Warning!:{error.message}</h1>
            </div>
        )
    }

    return (
        <section className='container'>
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
            <ul className='card-demo'>
                <li className='pokemon-card'>
                    <figure>
                        <img
                            src={pokemon.sprites.other.dream_world.front_default}
                            alt={pokemon.name}
                            className='pokemon-image'
                        />

                    </figure>
                    <h1>{pokemon.name}</h1>
                    <div className='grid-three-cols'>
                        <p className='pokemon-info'>
                            Weight: <span>{pokemon.weight}</span>
                        </p>
                        <p className='pokemon-info'>
                            Speed: {pokemon.stats[5].base_stat}
                        </p>

                        <p className="pokemon-info">
                            Height: {pokemon.height}
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default PokemonUsingAsyncAwait;




