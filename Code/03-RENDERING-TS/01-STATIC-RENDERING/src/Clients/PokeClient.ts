import { PokeResponse } from "../interfaces/Pokemon/GetPokemon/PokeResponse";

export class PokeClient
{

    private pokeURL: string | undefined;

    constructor()
    {
        this.pokeURL = process.env.POKEAPI_URL;
    }

    public async getAllPokes(): Promise<PokeResponse>
    {
        const response = await fetch(this.pokeURL + '?limit=101&offset=0');
        if(!response.ok) throw new Error('ERROR WHILE FETCHING POKE API> STATUS ' + response.status);
        const data = await response.json();
        return data as PokeResponse;
    }

}