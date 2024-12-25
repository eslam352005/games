import { Details } from "./details.module.js";


const data=document.getElementById('data')
export class Game{
  
constructor(category='mmorpg'){
    this.category=category;
}


async getGame(){

    let api=await fetch(`https://www.freetogame.com/api/games?category=${this.category}`)
    let response= await api.json() 
    
    this.displayGame(response)
    
      }

  

      
displayGame(response){
let box=''
for(let i=0;i<response.length;i++){

    box+=`
    <div class="col-md-3 col-sm-6 text-center ">
  <div class=" card p-1 " cardId="${response[i].id}">
    <img src="${response[i].thumbnail}" class=" w-100" alt="">
    <div class="card-body d-flex justify-content-between">
      <div class="name">
       <h3>${response[i].title}</h3>
      </div>
      <div class="price">
       <span>free</span>
      </div>
    </div>
    <div class="card-content">
      <p>${response[i].short_description}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
   <div class="type">
  <span >${response[i].genre}</span>
   </div>
   <div class="device">
    <span >${response[i].platform}</span>
   </div>
    </div>
  </div>
</div>
    
    `
    
}
data.innerHTML=box



}


 



}

