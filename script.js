let bold = document.getElementById('bold');
let italic = document.getElementById('italic');
// let bold = document.getElementById('bold');
// let bold = document.getElementById('bold');
// let bold = document.getElementById('bold');
// let bold = document.getElementById('bold');
// let bold = document.getElementById('bold');
let textarea = document.getElementById('textarea');


bold.addEventListener('click',()=>{
    textarea.style.fontWeight = 'bold'
    
})

italic.addEventListener('click',()=>{
    textarea.style.fontStyle= 'italic'
})