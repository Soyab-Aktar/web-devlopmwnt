//! Click
document.getElementById('btn1').addEventListener('click',function(){
    console.log('Helllo Friends .....');
})
//! Mouseenter
document.getElementById('btn2').addEventListener('mouseenter',function(){
    console.log('Helllo Friends .....');
})
//! Mouseenter
document.getElementById('btn3').addEventListener('mousemove',function(){
    console.log('Hel..');
})
//! Focus
document.getElementById('text-type').addEventListener('focus',function(){
    console.log('Focus event triggered.');
})
//! Blur
document.getElementById('text-type').addEventListener('blur',function(){
    console.log('Blur event triggered.');
})
//! KeyDown
// document.getElementById('text-type').addEventListener('keydown',function (event){
//     console.log(event.target.value);
// })
//! KeyPress
// document.getElementById('text-type').addEventListener('keypress',function (event){
//     console.log(event.target.value);
// })
//! KeyUp
document.getElementById('text-type').addEventListener('keyup',function (event){
    console.log(event.target.value);
})