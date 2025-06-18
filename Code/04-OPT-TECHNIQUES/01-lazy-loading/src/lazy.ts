let totalImages = 0;
let loadedImages = 0;

const isIntersecting = (entry: IntersectionObserverEntry) => {
    return entry.isIntersecting;
}

const observerAction = (entry: IntersectionObserverEntry) => {
    const node = entry.target;
    console.log(node)
    const image = node.querySelector('img');
    const loader = node.querySelector('.loader') as HTMLElement; // Seleccionamos el loader
    if(!loader) throw new Error('LOADER NOT FOUND');

    if (!image) throw new Error('No image found inside the element');
    
    const url = image.dataset.src;
    if (!url) throw new Error('URL cannot be found');
    
    if (image.src) return; // Si ya tiene un `src`, ya fue cargada previamente

    // Mostramos el loader mientras se carga la imagen
    loader.style.display = 'block'; // Mostramos el loader
    image.style.display = 'none'; // Ocultamos la imagen mientras se carga
    
    image.src = url;
    
    image.onload = () => {
        loadedImages += 1;
        logState();
        loader.style.display = 'none'; // Ocultamos el loader cuando la imagen se carga
        image.style.display = 'block'; // Mostramos la imagen
    }
    
    intersectionObserver.unobserve(node);
}

const intersectionObserver = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(observerAction);
});

export const registerImage = (image: HTMLDivElement) => {
    intersectionObserver.observe(image);
    totalImages += 1;
    logState();
};

function logState() {
    console.log(`⚪️ Total Images: ${totalImages}`);
    console.log(`🟣 Loaded Images: ${loadedImages}`);
    console.log("--------------------------------------");
}
