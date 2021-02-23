const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
let num = 0;
addButton.addEventListener('click', (event) => {
  num ++;
  const newItem = document.createElement('li')
  newItem.textContent = `アイテム${num}`
  list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => { 
  list.removeChild(list.lastElementChild)
})