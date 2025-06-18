import { registerImage } from "@utils/LazyObserver";

const randomNumber = (minNumber: number, maxNumber: number) => Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;

export const HomeLazy = () => {

    const view = `
            <div class="LazyComponent">
                <button id="addImgBtn">ADD IMAGE</button>
                <button type="reset"> Limpiar </button>
                <div id="images"></div>
            <div>
    `;

    setTimeout(() => { // BAD PRACTICE
            const createImageNode = (): HTMLDivElement => {
                const imageWrapper = document.createElement('div') as HTMLDivElement;
                const image = document.createElement('img') as HTMLImageElement;
                image.width = 320;
                image.dataset.src = `https://randomfox.ca/images/${randomNumber(1, 100)}.jpg`;
                const addLoader = document.createElement('div') as HTMLDivElement;
                addLoader.className = 'loader';
                imageWrapper.append(...[image, addLoader]);
                return imageWrapper;
            }

            const imagesDiv = document.getElementById('images');
            const addButton = document.getElementById('addImgBtn');
            
            const addImage = () => 
            {
                if(!imagesDiv) return;
                const newImage = createImageNode();
                imagesDiv.appendChild(newImage);
                registerImage(newImage);
            }

            addButton.addEventListener('click', addImage);

            const clean = document.querySelector("button[type='reset']") as HTMLElement;
            clean.addEventListener('click', () => {
                imagesDiv.innerHTML = "";
            })

    }, 0);

    return view;
    
}