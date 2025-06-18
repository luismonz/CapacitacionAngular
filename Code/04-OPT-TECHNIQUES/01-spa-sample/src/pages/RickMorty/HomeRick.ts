
import getRickMortyCharacters from "@data/RickMortyCharactersDB";
import { RickCharacterResponse } from "@interfaces/RickCharacterResponse";
import '@styles/RickMorty/styles.css';

const HomeRick = async () => {

    const characters = await getRickMortyCharacters();

    const view = `
        <div class="Characters">
            ${characters.results.map((char: RickCharacterResponse) => `
                <article class="Character-item">
                    <a href="#/sample-rick/${char.id}">
                        <img src="${char.image}" alt="${char.name}"/>
                        <h2>${char.name}</h2>
                    </a>
                </article>
            `).join('')}
        <div>
    `;

    return view;
}

export default HomeRick;