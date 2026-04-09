let n = 0;
let controls = {}

let counter = document.querySelector('.counter')
document.querySelectorAll('.control-btn').forEach((control)=>{
    controls[control.id] = control
})

controls.increment.addEventListener('click',()=>{
    updateVal(n+1)
})
controls.decrement.addEventListener('click',()=>{
    if(n>0){
        updateVal(n-1)
    }
})
controls.reset.addEventListener('click',()=>{
    updateVal(0)
})

function updateVal(val){
    n = val;
    render();
}
function render(){
    counter.innerHTML = n
}