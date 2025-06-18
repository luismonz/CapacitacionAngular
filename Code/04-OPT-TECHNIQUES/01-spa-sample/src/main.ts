import routerAsync from '@routes/index';
import '@styles/global.css'
import { Header } from '@templates/Header';

async function renderHeader()
{
    const header = document.getElementById('header');
    header.innerHTML = await Header();
}

renderHeader();

window.addEventListener('load', routerAsync);
window.addEventListener('hashchange', routerAsync);
