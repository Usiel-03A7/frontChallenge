export async function getPhotos() {
    try{
        const response = await fetch ('https://jsonplaceholder.typicode.com/photos');
        return await response.json();
    }catch (error){
        return [];
    }
}
