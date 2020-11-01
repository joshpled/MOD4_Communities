class Community {
    constructor(obj) {
      this.name = obj.name;
      this.id = obj.id;
    }
  
    static createCommunities(arr) {
      return arr.map((x) => new Community(x));
    }
  
    createLiElement() {
      let id = this.id;
      let li = document.createElement("li");
      li.className = "list-group-item list-group-item-action";
      li.setAttribute('style','cursor: pointer')
      li.innerHTML = this.name.toUpperCase();
      li.setAttribute("data-communitylist", "indexList");
    //   li.onclick = function () {
    //     goToCommunity(id);
    //   };
      return li;
    }
  }