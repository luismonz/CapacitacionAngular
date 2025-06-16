document.addEventListener('DOMContentLoaded', () => {

    const bttn = document.getElementById('add');
    const list = document.getElementById('poke-list');

    bttn?.addEventListener('click', () => {
        const newItem = document.createElement('li');
        newItem.innerHTML = `<p>ADDING A NEW POKEMON!!!!!!!</p>`
        list?.appendChild(newItem);
    });

});