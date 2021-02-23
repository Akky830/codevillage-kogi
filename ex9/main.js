// alert('これはalert()で表示したアラートです')
console.log(document.doctype)
console.log(document.title) 

const intro = document.getElementById('intro')
console.log(intro.textContent) 


const list = document.querySelector('.list')
console.log(list.children.length)
const items = document.querySelectorAll('.list li')
items.forEach((item) => {
  console.log(item.textContent) 
})

const elem = document.querySelector('.list')
for (let i = 0; i < elem.children.length; i++) { 
    console.log(elem.children[i]) 
}
console.log(elem.parentElement) 
const elem2 = document.querySelector('img')

console.log(elem2.getAttribute('src')) 
elem2.setAttribute('src', 'https://placehold.it/400x200')

const newItem = document.createElement('li')
newItem.textContent = '新しいアイテム'
list.appendChild(newItem) 
// ？消えない
list.removeChild(list.firstChild)

const addButton = document.getElementById('add')
const removeButton = document.getElementById('remove')
addButton.addEventListener('click', (event) => { // <button id="add">がクリックされたとき…
  const newItem = document.createElement('li')
  newItem.textContent = '新しいアイテム'
  list.appendChild(newItem)
})
removeButton.addEventListener('click', (event) => { // <button id="remove">がクリックされたとき…
  list.removeChild(list.lastElementChild)
})