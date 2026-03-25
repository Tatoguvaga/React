import type { CSSProperties } from "react";


const firstName = 'Gustavo';
const lastName = 'Varelas';

const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
const isActive = false;

const address = {
    zipCode: 'ABC-123',
    country: 'España',
};

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
}

export const MyAwesomeApp = () => {
    return (
        <>
            <h1 data-testid="first-name-title">{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p style={myStyles}>{JSON.stringify(address)}</p>
        </>
    );

}