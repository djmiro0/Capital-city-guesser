console.log("My script is included :-) ");
//changing the font of the body 
const body = document.querySelector('body');
console.log(body);
console.log(body.style);
body.style.fontFamily = 'monospace';
//we can also add other things to the style object.
//body.style.fontSize = '30px';

//using . to select classname.
const title = document.querySelector('.title');
title.style.textAlign = 'center';

//selecting all categories and applying style
const categories = document.querySelectorAll('.category');
console.log("the categories are", categories);
for(let category of categories){
    category.style.color = 'Red';
    category.style.fontStyle = 'italic';
}


//use of separate function can be done here 
const generateRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let j = 0; j < 6; j++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    randomColor += "50";
    return randomColor;
}

const foodCategories = document.querySelectorAll('.food-category');
console.log("the foodcategories are", foodCategories);

for(let foodCategory of foodCategories){
    foodCategory.style.backgroundColor = generateRandomColor(); 
    foodCategory.style.minWidth = '200px';
}

const main = document.querySelector('.main');
main.style.display = 'flex';
main.style.justifyContent = 'space-evenly';
main.style.flexWrap= 'wrap';

const warning = document.getElementById('warning');
warning.style.fontSize = '20px';
warning.style.fontFamily = 'Times New Roman';

const allergies = document.querySelector('.allergies');
allergies.style.width = '15rem';
allergies.style.listStyle = 'none';

console.log(allergies);

let index = 0;
for(let allergy of allergies.children){
    if(index % 2 === 0){
        allergy.style.backgroundColor='lightblue';
    }
    console.log("allergy is", allergy);
    index++;
}
const allergyWarning = document.querySelector('.allergy-warning');

allergyWarning.style.display='flex';
allergyWarning.style.flexFlow = 'column';
allergyWarning.style.justifyContent = 'center';
allergyWarning.style.alignItems = 'center';

const footer = document.querySelector('footer');
footer.style.display = 'flex';
footer.style.flexWrap = 'wrap';
footer.style.justifyContent = 'center';


const footerDescriptions = document.querySelectorAll('.food-desc');

for(let footerDescription of footerDescriptions){
    footerDescription.style.border = '8px solid orange';
    footerDescription.style.borderRadius='100%'
    footerDescription.style.width = '10rem';
    footerDescription.style.height = '10rem';
    footerDescription.style.display = 'flex';
    footerDescription.style.justifyContent = 'center';
    footerDescription.style.alignItems='center';
    footerDescription.style.margin = '1.5rem';
}