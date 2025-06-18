const API = 'https://rickandmortyapi.com/api/character/';

const getRickMortyCharacters = async (id: number | null = null) => {
    const apiURL = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch(e) {
        console.log('FETCH ERROR: ', e);
    }
};

export default getRickMortyCharacters;