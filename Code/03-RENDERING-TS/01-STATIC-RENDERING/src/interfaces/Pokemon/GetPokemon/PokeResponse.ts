import { PokemonInfo } from "./PokemonInfo"

export interface PokeResponse
{
    count: number
    next: string
    previous: any
    results: PokemonInfo[]

}