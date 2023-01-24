console.log("hi");

const box1 = document.querySelector(".box1");

const box2 = document.querySelector(".box2");

const box3 = document.querySelector(".box3");

// the third param is the useCapture
box1.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log('hello from Box 1')
})

box2.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log('hello from Box 2')
})

box3.addEventListener("click", (e)=>{
    e.stopPropagation();
    console.log('hello from Box 3')
})
