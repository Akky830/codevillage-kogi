

const list = document.querySelector('.list')
console.log(`<ul>タグの2つめの子要素のテキストは ${list.children[1].textContent} です。`)
const newItem = document.createElement('li')
newItem.textContent = 'もも'
list.appendChild(newItem)
