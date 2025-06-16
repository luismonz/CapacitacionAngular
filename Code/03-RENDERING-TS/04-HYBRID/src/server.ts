import express from 'express';
import { renderPage } from './templates/renderPage';
import { pokemons } from './data/pokemons';
import path from 'path';

const app = express();
const PORT = 3000;

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    const html = renderPage('POKEMON LIST', pokemons);
    res.send(html);
});

app.listen(PORT, () => {
    console.log('SSR RUNNING ON PORT ' + PORT)
});
