const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
let num = 0;
addButton.addEventListener('click', (event) => {
    num ++;
    const newItem = document.createElement('li')
    newItem.textContent = `アイテム${num}`
    list.appendChild(newItem)
    var img = document.createElement("img");
    img.src = "http://placehold.it/64x64";
    img.alt = "アイテム";
    list.appendChild(img)
})
removeButton.addEventListener('click', (event) => { 
  list.removeChild(list.lastElementChild)
})