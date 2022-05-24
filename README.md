## The Golden Rule: 

s (20 sloc)  735 Bytes
   
export function renderDog(dog) {
    const div = document.createElement('div');
    div.classList.add('dog');

    const h1 = document.createElement('h1');
    h1.textContent = dog.name;

    const img = document.createElement('img');
    img.src = dog.image;

    const p = document.createElement('p');
    p.textContent = `${dog.name} is ${dog.age} years old with a cuteness factor of ${dog.cutenessFactor}`;

    const h2 = document.createElement('h2');
    h2.textContent = 'Breeds';

    const ul = document.createElement('ul');
    for (let breed of dog.breeds) {
        const li = document.createElement('li');
        li.textContent = breed;
        ul.append(li);
    }

    div.append(h1, img, p, h2, ul);
    return div;