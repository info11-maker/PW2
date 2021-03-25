document.addEventListener("DOMContentLoaded", () => {
    var objects = document.querySelectorAll("li");
    console.log(objects);
    
    var object = document.createElement('li');
    object.appendChild(document.createTextNode('Element ${i}'));
    document.querySelector('ol').appendChild(object);
    let i = 1;
    for (const object of objects) {
        if(i % 2 === 0){
            object.style.backgroundColor = "green";
        }
        if(i % 2 != 0){
            object.style.backgroundColor = "violet";
        }
            i++;   
        }   
    });