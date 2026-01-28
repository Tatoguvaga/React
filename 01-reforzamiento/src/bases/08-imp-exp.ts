import { heroes, type Hero, Owner } from "../data/heroes.data"


const getHeroById = (id: number): Hero | undefined => {

    const hero = heroes.find( (hero) => {
        return hero.id === id;
    });

    // if ( !hero ) {
    //     row new Error (`No existe un héroe con el id ${id}`)
    // }

    return hero;
};

//console.log(getHeroById(5));

export const getHeroesByOwner = (owner:Owner) => {
    const heroesByOwner = heroes.filter(
        hero => hero.owner === owner);

    return heroesByOwner;
};

// export const getHeroesByOwner = (owner:Owner) =>   // Es lo mismo, pero mas dificil de leer
//     heroes.filter((hero) => hero.owner === owner);

