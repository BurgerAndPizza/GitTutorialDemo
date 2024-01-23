//let is a block scope and it creates new copy for every time
function y(){



    for(let i=1;i<6;i++){
    
    setTimeout(() => console.log(i ), i * 1000)
    
    }
    
    console.log('Done Coding')
    
    
    
    }
    
    y();