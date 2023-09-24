/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName ="Darsy Macedo";
let currentYear = new Date();
const profilePicture ="darsyfoto.jpg";

/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
nameElement.innerHTML = `<strong>${fullName}</strong>`;
nameElement.style.fontSize='16px';
nameElement.style.padding='1rem';

let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');

/* Step 4 - Adding Content */
let picture = 'images/darsyfoto.jpg';
document.querySelector("img").setAttribute('src', picture)




/* Step 5 - Array */
let array = ['Ceviche','Lomo saltado','burger','fruits','pizza'];
let anotherFavoriteFood = 'Ice cream';

let elements = array.length;
console.log(typeof(index));
array.map( (item, index)=>{ //mapping each element. Index the element
                           //check the last element and replace the , for the '.'  
                           index < elements-1 ? foodElement.innerHTML +=`<em>${item}</em>, `: foodElement.innerHTML +=` ${item}.<br>`;   
                          });
array.push(anotherFavoriteFood);

array.map( (item, index)=>{ 
    index < elements ? foodElement.innerHTML +=`<em> ${item}</em>,`: foodElement.innerHTML +=` ${item}.<br>`;       
   });

array.shift();   

array.map( (item, index)=>{ 
    index < elements-1 ? foodElement.innerHTML +=`<em> ${item}</em>,`: foodElement.innerHTML +=` ${item}.<br>`;       
   });

array.pop();

array.map( (item, index)=>{ 
    index < elements-2 ? foodElement.innerHTML +=`<em>${item}</em>, `: foodElement.innerHTML +=` ${item}.<br>`;   
   });