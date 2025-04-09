import React, { useEffect, useState } from 'react'

const LoadingAndErrorState = () => {

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");



    const API = 'https://pokeapi.co/api/v2/pokemon/squirtle';

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setPokemon(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(false)
        }
    }


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
                <h1>Error:{error.message}</h1>
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
                </li>
            </ul>
        </section>
    )
}

export default LoadingAndErrorState