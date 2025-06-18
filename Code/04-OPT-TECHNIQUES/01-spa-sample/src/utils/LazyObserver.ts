let totalImages = 0;
let loadedImages = 0;

const isIntersecting = (entry: IntersectionObserverEntry) => 
{
    return entry.isIntersecting;
}

const intersectionObserver = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(observerAction)
});

const observerAction = (entry: IntersectionObserverEntry) => {

    const node = entry.target;
    const image = node.querySelector('img');
    const loader = node.querySelector('.loader') as HTMLElement;

    const url = image.dataset.src;

    loader.style.display = 'block';
    image.style.display = 'none';

    image.src = url;

    image.onload = () => {
        loadedImages += 1;
        console.log('IMAGE LOAD');
        logState();
        loader.style.display = 'none';
        image.style.display = 'block';
    }

    intersectionObserver.unobserve(node);

}

const logState = () => {
    console.log(`⚪️ Total Images: ${totalImages}`);
    console.log(`🟣 Loaded Images: ${loadedImages}`);
    console.log("--------------------------------------");
}

export const registerImage = (image: HTMLDivElement) => {

    intersectionObserver.observe(image);
    totalImages += 1;
    console.log('REGISTER');
    logState();
    
}
