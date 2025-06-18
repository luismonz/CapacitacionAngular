export const GetSlugsFromURL = (): string[] => 
{
    const hash = window.location.hash;
    const pathSegments: string[] = hash ? hash.slice(2).split('/') : [''];
    return pathSegments;
}