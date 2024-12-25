

const detailsInfo=document.getElementById('detailsInfo')
export class Details{

constructor(id){

this.id=id;

}

async getDetails(){


let api=await fetch(`https://www.freetogame.com/api/game?id=${this.id}`)
let response=await api.json()
displayDetails(response)

}

displayDetails(response){

var box=''
box=`
  <div class="col-md-4">
      <img src="${response.thumbnail}" class="w-100" alt="">
    </div>
    <div class="col-md-8 position-relative">
      <h3>Title : ${response.title}</h3>
      <h4 class="p-1">Categoty :<span class="mx-2">${response.genre}</span></h4>
      
      <h4 class="p-1">Platform :<span class="mx-2">${response.platform}</span></h4>
      
      <h4 class="p-1">Status :<span class="mx-2">${response.status}</span></h4>
      
      <p>${response.description}</p>
      <button class="btn btn-outline-warning">Show Game</button>
      <div class="Xbutton">
        <i class="fa-solid fa-x"></i>
      </div>
    </div>


`
detailsInfo.innerHTML=box;




}

}