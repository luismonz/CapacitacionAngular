import { registerImage } from "./lazy";

const randomNumber = (minNumber: number, maxNumber: number) => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber

const createImageNode = (): HTMLDivElement => {
  const imageWrapper = document.createElement('div');
  const image = document.createElement('img');
  image.width = 320;
  image.dataset.src = `https://randomfox.ca/images/${randomNumber(1, 123)}.jpg`;
  const addLoader = document.createElement('div') as HTMLDivElement;
  addLoader.className = 'loader';
  imageWrapper.append(...[image, addLoader])
  return imageWrapper;
}

const imagesDiv = document.getElementById('images');
if(imagesDiv == null) throw new Error('MOUNT NODE CONTAINER IS NULL');
const addButton = document.getElementById('addImgBtn');
if(addButton == null) throw new Error('ADD BUTTON CONTAINER IS NULL');

const addImage = () => {
  const newImage = createImageNode();
  imagesDiv.appendChild(newImage);
  registerImage(newImage);
}

addButton.addEventListener('click', addImage);

const clean = document.querySelector("button[type='reset']") as HTMLElement;

clean.addEventListener("click", () => {
  imagesDiv.innerHTML = "";
});