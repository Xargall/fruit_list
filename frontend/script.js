function init() {
    fetch_fruits();
}

async function fetch_fruits() {
    const response = await fetch('http://127.0.0.1:8000/fruits/');
    const fruits = await response.json();
    add_fruit(fruits);
}

function add_fruit(fruit) {
    const fruits_List = document.getElementById('list');
    for (let index = 0; index < fruit.length; index++) {
        const li = document.createElement('li');
        li.textContent = `${fruit[index].name} – ${fruit[index].color}, ${fruit[index].weight}g`;
        fruits_List.appendChild(li);

    }
}