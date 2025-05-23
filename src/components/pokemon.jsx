import React, { useEffect, useState } from 'react';

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(null);

    const API = 'https://pokeapi.co/api/v2/pokemon/squirtle';

    // ! By using .thenand .catch, we can handle the promise returned by fetch

    // const fetchPokemon = () => {
    //     fetch(API)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setPokemon(data);
    //         })
    //         .catch((error) => console.log(error));
    // }

    // ! Using async/await makes the code cleaner and easier to read

    const fetchPokemon=async ()=>{
        try{
            const res=await fetch(API);
            const data=await res.json();
            setPokemon(data);
        }catch(error){
            console.log(error);
        }
    }


    useEffect(() => {
        fetchPokemon();
    }, []);

    console.log(pokemon);

    if (!pokemon) {
        return <div>
            <h1>Loading...</h1>
        </div>
    }

    if (pokemon) {
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
}

export default Pokemon;



