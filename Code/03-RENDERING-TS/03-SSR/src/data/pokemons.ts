export interface Pokemon {
  name: string;
  type: string;
  description: string;
}

export const pokemons: Pokemon[] = [
  { name: "Pikachu", type: "Electric", description: "Ratón eléctrico amarillo." },
  { name: "Charmander", type: "Fire", description: "Lagarto de fuego con cola ardiente." },
  { name: "Squirtle", type: "Water", description: "Tortuga azul que lanza agua." },
];
