import express from 'express';
import { renderPage } from './templates/renderPage';
import { pokemons } from './data/pokemons';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const html = renderPage('POKEMON LIST', pokemons);
    res.send(html);
});

app.listen(PORT, () => {
    console.log('SSR RUNNING ON PORT ' + PORT)
});
