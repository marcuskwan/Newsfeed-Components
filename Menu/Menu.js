
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
//   menu.classList.toggle('menu--open');
//   console.log(menuButton);
//   console.log(menu);
// }

// // Start Here: Create a reference to the ".menu" class
// const menu = document.querySelector('.menu');
// // create a reference to the ".menu-button" class
// const menuButton = document.querySelector('.menu-button');
// // Using your menuButton reference, add a click handler that calls toggleMenu
// menuButton.addEventListener('click', () => toggleMenu());



const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 	  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  // TweenMax.to(menu, 2, {width:"200px", height:"150px"});
  TweenMax.to(menu, 2, {
    height: 800,
    ease: Bounce.easeOut
  }); 
}	

const leaveMenu = () => {
  menu.classList.toggle('menu--open');
}


 // Start Here: Create a reference to the ".menu" class	// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class	// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu	// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click',e => toggleMenu());
menu.addEventListener('mouseleave',leaveMenu)

