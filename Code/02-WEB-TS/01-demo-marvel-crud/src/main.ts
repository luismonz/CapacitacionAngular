import type { HeroModel } from "./Models/HeroModel";
import { HeroUnitOfWork } from "./Services/UnitOfWork/HeroUnitOfWork";


let unitOfWork: HeroUnitOfWork = new HeroUnitOfWork();

const heroListContainer: HTMLElement | null = document.getElementById('hero-list');
if(!heroListContainer) throw new Error('HERO LIST CONTAINER CANNOT BE FOUND!');
const form: HTMLFormElement | null = document.getElementById('hero-form') as HTMLFormElement;
if(!form) throw new Error('FORM CONTAINER CANNOT BE FOUND!');

const renderHeroes = (): void => {

  const heroes: HeroModel[] = unitOfWork.HeroRepository().getAll();
  heroListContainer.innerHTML = heroes.map(hero => `
          <div class="hero-card">
            <h2>${hero.name}</h2>
            <p>${hero.realName}</p>
            <p><strong>Poderes:</strong> ${hero.powers.join(", ")}</p>
            <button onclick="editHero(${hero.id})">Editar</button>
            <button onclick="removeHero(${hero.id})">Eliminar</button>
          </div>
          <hr/>
  `).join('');

};

(window as any).editHero = (id: number) => {

  const hero: HeroModel = unitOfWork.HeroRepository().getById(id);
  (document.getElementById('id') as HTMLInputElement).value = hero.id.toString();
  (document.getElementById('name') as HTMLInputElement).value = hero.name;
  (document.getElementById('realName') as HTMLInputElement).value = hero.realName;

}

(window as any).removeHero = (id: number) => {
  unitOfWork.HeroRepository().delete(id);
  renderHeroes();
}

form.addEventListener('submit', (e) => {

  e.preventDefault();
  const id = parseInt((document.getElementById('id') as HTMLInputElement).value);
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const realName = (document.getElementById('realName') as HTMLInputElement).value;

  if(id) {
    unitOfWork.HeroRepository().update(id, { name, realName });
    form.reset();
    renderHeroes();
    return;
  }

  const newHero: HeroModel = 
  {
    id: Math.floor(Math.random() * 10000),
    name,
    realName,
    powers: ['POWER1', 'POWER2'],
    affiliation: 'N/A',
    firstAppearance: 'Unknown',
    image: 'default.jpg'
  }
  unitOfWork.HeroRepository().create(newHero);
  form.reset();
  renderHeroes();

});


renderHeroes();
