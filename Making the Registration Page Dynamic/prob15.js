console.log('Person1: shows Ticket');
console.log('Person2: shows Ticket');
const preMovie = async ()=>{
    const promiseWifeBringingTicks = new Promise((resolve, reject)=>{
        setTimeout(()=> resolve ('ticket'), 3000)
    });
    const getPopcorn = new Promise((resolve, reject)=> resolve('popcorn'));
    const addButter = new Promise((resolve, reject)=> resolve('butter'));
    const getDrinks = new Promise((resolve, reject)=> resolve ('ColdDrinks'));
    
    let ticket = await promiseWifeBringingTicks;
    let [popcorn, butter, drink]= await Promise.all([getPopcorn, addButter, getDrinks])
    console.log('popcorn, butter, drink');

    return ticket;
}
preMovie().then((m)=> console.log('person3: shows '+ m));



console.log('person4: shows ticket')
console.log('person5: shows ticket');
