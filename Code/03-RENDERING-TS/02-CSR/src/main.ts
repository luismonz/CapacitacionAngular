document.addEventListener('DOMContentLoaded', () => {

  const app = document.getElementById('app');
  if(!app) throw new Error('APP CANNOT BE FOUND');

  app.innerHTML = `
    <h1>CSR SAMPLE</h1>
    <button id='loadData'> LOAD DATA </button>
    <ul id='dataList'></ul>
  `;
  
  const loadDataButton = document.getElementById('loadData') as HTMLButtonElement;
  const dataList = document.getElementById('dataList') as HTMLUListElement;

  loadDataButton.addEventListener('click', async () => {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    
    dataList.innerHTML = data.map((user: { id: number, name: string }) =>
        `<li>${user.name}</li>`
      ).join('');

  });

});