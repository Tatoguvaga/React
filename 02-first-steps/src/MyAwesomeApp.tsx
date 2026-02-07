
export const MyAwesomeApp = () => {

    const firstName = 'Gustavo';
    const lastName = 'Varelas';

    const favoriteGames = ['Elden Ring', 'Smash', 'Metal Gear'];
    const isActive = false;

    const address = {
        zipCode: 'ABC-123',
        country: 'España',
    };

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>

            <h1>{isActive ? 'Activo' : 'No Activo'}</h1>

            <p>{JSON.stringify(address)}</p>
        </>
    );

}