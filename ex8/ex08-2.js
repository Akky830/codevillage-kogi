const body = document.body;
const h1Tag = document.createElement("h1");
h1Tag.setAttribute("class", "title");
h1Tag.textContent = "DOM";
body.appendChild(h1Tag);

const pTag = document.createElement("p");
pTag.textContent = "JavaScriptからHTMLを扱うための仕組み";
body.appendChild(pTag);

const h2Tag = document.createElement("h2");
pTag.textContent = "印象に残っているトピック";
body.appendChild(h2Tag);

const ulTag = document.createElement("ul");
body.appendChild(ulTag);

const topItem = document.createElement("li");
topItem.textContent = 'documentオブジェクト';
ulTag.appendChild(topItem);

const middleItem = document.createElement("li");
middleItem.textContent = 'getElementById';
ulTag.appendChild(middleItem);

const bottomItem = document.createElement("li");
bottomItem.textContent = 'イベントリスナ';
ulTag.appendChild(bottomItem);
