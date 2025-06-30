const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;


export const getImage = (poster_path: string) => {
    return `${IMAGE_URL}/w200${poster_path}`;
}