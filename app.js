const form = document.querySelector('#form');
const btn = document.querySelector('#submit');


async function getRandomDog() {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    const img = response.data.message;
    image.src = img;
}


async function getDogByBreed(breed) {

    try {
        const url = `https://dog.ceo/api/breed/${breed}/images/random`;
        const response = await axios.get(url);
        const image = document.querySelector('#image');
        image.src = response.data.message;
    } catch (e) {
        alert('SORRY, BREED NOT FOUND ')
        getRandomDog();
    }
    
}

form.addEventListener('submit',function(e){
    const input = document.querySelector('#input');
    e.preventDefault();
    getDogByBreed(input.value);
    input.value = '';
})