import { Pokemon } from '../data/pokemons';

export function renderPage(title: string, pokemons: Pokemon[]): string {
  const listItems = pokemons.map(p => `
    <li>
      <h2>${p.name}</h2>
      <p><strong>Tipo:</strong> ${p.type}</p>
      <p>${p.description}</p>
    </li>
  `).join('\n');

  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <style>
          body { font-family: sans-serif; padding: 2rem; }
          li { margin-bottom: 1.5rem; }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <ul>${listItems}</ul>
      </body>
    </html>
  `;
}
