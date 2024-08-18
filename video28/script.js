const button= document.getElementById('button');
const paragraph= document.getElementById('para');
button.addEventListener('click',()=>{
    paragraph.classList.toggle('active');
})
