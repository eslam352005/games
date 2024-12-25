import { Details } from "./details.module.js";
import { Game } from "./game.module.js";

const navLinks = Array.from(document.querySelectorAll('.nav-link')) ;
const header=document.querySelector('header')
const dataDiv=document.querySelector('.data')
const navbar=document.querySelector('.navbar')
const detailsDiv=document.querySelector('.details')

const cards= Array.from(document.querySelectorAll('.cards')) ;

const Xbutton=document.querySelector('.Xbutton')

document.addEventListener('DOMContentLoaded', () => {
  
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {

        navLinks.forEach(nav => nav.classList.remove('active'));
  
        
        link.classList.add('active');
      });
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar'); 
  
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 300) { 
        
        navbar.classList.add('navbar-fixed');
        navbar.classList.remove('position-absolute');
      } else {
        navbar.classList.remove('navbar-fixed');
        navbar.classList.add('position-absolute');
      }
    });
  });

 

 
  function getData(){

   

    for(let i=0;i<navLinks.length;i++){
  navLinks[i].addEventListener('click',function(e){
  let cat=e.target.getAttribute('Category')
  
  
  let game = new Game(cat)
  
  game.getGame()
  
  })
  
    }

  }






  
  

  
//       detailsDiv.classList.replace('d-none','d-block')
//       header.classList.replace('d-block','d-none')
//       dataDiv.classList.replace('d-block','d-none')
//       navbar.classList.replace('d-block','d-none')
      
     
   
  



 





 


 
   
 
  


   let game = new Game()
   game.getGame()
 getData()
 for(let i=0;i<cards.length;i++){

  cards[i].addEventListener('click',function(e){
    console.log(e.target);
    
   })
 }
  
  