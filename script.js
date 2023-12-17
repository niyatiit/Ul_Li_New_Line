const btn = document.querySelector('button')
const text = document.querySelector('.ans')
const random = parseInt(Math.random()*10);
console.log(random);
const ul = document.querySelector('ul')


btn.addEventListener('click',()=>{
   const li = document.createElement("li");
   
   if(text.value == ""){
      alert("Please Fill up the Blank");
   }
    
   li.textContent += text.value;
   ul.appendChild(li);
   text.value="";
   ul.body.style.textDecoration = underline;
})