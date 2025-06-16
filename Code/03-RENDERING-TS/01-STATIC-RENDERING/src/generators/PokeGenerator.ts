import path from "path";
import fs from 'fs';
import { PokemonInfo } from "../interfaces/Pokemon/GetPokemon/PokemonInfo";
import { PokeResponse } from "../interfaces/Pokemon/GetPokemon/PokeResponse";
import { generatePokeHTML } from "../templates/poke.template";
import { GeneratorConfig } from "../interfaces/GeneratorConfig";

export class PokeGenerator
{

    private _pokeData: PokeResponse;
    private _config: GeneratorConfig = { outDir: '../generated_pokes' }

    constructor(pokeData: PokeResponse)
    {
        this._pokeData = pokeData;
    }

    public generatePokeChunks(numberOfPokesPerPage: number)
    {
        if(!numberOfPokesPerPage || numberOfPokesPerPage <= 0) throw new Error('NUMBER OF POKES SHOULD BE GREATER THAN 0');
        let numberOfPokes = this._pokeData.results.length;
        const numPages: number = Math.ceil(numberOfPokes / numberOfPokesPerPage);

        for (let i = 0; i < numPages; i++) {
            const start = i * numberOfPokesPerPage;
            const end = start + numberOfPokesPerPage;
            const pokeChunk = this._pokeData.results.slice(start, end);
            this.generateStaticHTML('poke-', pokeChunk, i + 1)
        }
        console.log(`GENERATED ${numPages} PAGES WITH ${numberOfPokesPerPage} POKEMONS EACH ONE.`)
    }

    private generateStaticHTML(filename: string, pokeDataChunk: PokemonInfo[], pageNumber: number): void
    {
        const htmlContent = generatePokeHTML('PAGE ' + pageNumber, pokeDataChunk);
        const outputDir = path.resolve(__dirname, this._config.outDir)
        const outputPath = path.join(outputDir, filename  + pageNumber + '.html');

        if(!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

        fs.writeFileSync(outputPath, htmlContent);
        console.log('HTML GENERATED IN> ' + outputPath);
        
    }

}