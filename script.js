const text = " So Who I Am ?? ";
let typedTextId = document.getElementById('typed');
let index = 0;
    
function typedText() 
{
    if (index < text.length ) 
    {
        typedTextId.innerHTML += text[index];
        index++;              

        setTimeout(typedText, 400); 
    }      
}
    
    setTimeout(typedText, 3000); 
    typedText();


const numShapes = 150;  // Number of shapes
const body = document.querySelector('body');

// Define shape types
const shapeTypes = ['star', 'plus', 'circle'];

// Create shapes dynamically
for (let i = 0; i < numShapes; i++) {
    let shape = document.createElement('div');
    const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    shape.classList.add('shape', shapeType);
    body.appendChild(shape);

    // Randomize position and animation
    shape.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    shape.style.top = Math.random() * 100 + 'vh'; // Random vertical position
    shape.style.animationDuration = Math.random() * 4 + 2 + 's'; // Random twinkle speed
    shape.style.animationDelay = Math.random() * 5 + 's'; // Random start delay

    // Optional float animation for extra effect
    shape.style.animation = `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out, float ${Math.random() * 5 + 3}s infinite ease-in-out`;
}

function project()
{
        const button =document.querySelectorAll('.project,.project1,.project2');

        button.forEach(function (project){
           
            project.style.display ='block';

        });
}


function About()
{
    const name = document.getElementById('n').value;
    const email = document.getElementById('e').value;
    const contact = document.getElementById('p').value;
     
if(name != "" && email != "" && contact != "")
{
    alert("Thank you !! and have a nice day ()-L-()");
}
else
{
    alert(" please, fill the full form");
}
}

