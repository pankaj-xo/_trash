//what to click
const btn = document.querySelector('body');

//time 
const sec =  3000;

//what to do after click
btn.addEventListener('click',e => {
    console.log(e)
    // alert("clicked")
})


// make a click
function doClick(){
    btn.dispatchEvent(new Event('click'))
}



//set click looop.........
setInterval(doClick,sec)
