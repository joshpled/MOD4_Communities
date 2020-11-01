document.addEventListener("DOMContentLoaded", ()=>{
    getAllCommunities()
})

function displayOnDom(arr, idName) {
    let listName = document.querySelector(idName);
    for (let x of arr) {
      let li = x.createLiElement();
      listName.appendChild(li);
    }
  }
