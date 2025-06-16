import { PokeClient } from "./Clients/PokeClient";
import dotenv from 'dotenv';
import { PokeResponse } from "./interfaces/Pokemon/GetPokemon/PokeResponse";
import { PokeGenerator } from "./generators/PokeGenerator";
// import { HTMLGenerator } from "./generators/HTMLGenerator";
// import { GeneratorConfig } from "./interfaces/GeneratorConfig";
// import { SiteData } from "./interfaces/SiteData";


// const siteData: SiteData = {
//     title: 'JORGE DUARTE',
//     description: 'TESTING THIS'
// };

// const config: GeneratorConfig = {
//     outDir: '../generated'
// };

// let htmlGenerator: HTMLGenerator = new HTMLGenerator(siteData, config);
// htmlGenerator.generateStaticHTML('JORGE');

dotenv.config();

let pokeClient: PokeClient = new PokeClient();
let pokeResponse: PokeResponse;

let responsePokes: Promise<PokeResponse> = pokeClient.getAllPokes();

responsePokes
    .then(res => {
        pokeResponse = res;
        if(!pokeResponse) throw new Error('RESPONSE HAS NO DATA');
        let pokeGenerator: PokeGenerator = new PokeGenerator(pokeResponse);
        pokeGenerator.generatePokeChunks(10);
    })
    .catch(console.error);
