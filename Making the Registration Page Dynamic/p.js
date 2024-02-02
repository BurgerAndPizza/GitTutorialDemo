const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log('wife: I have the tics');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    return new Promise((resolve, reject)=> resolve('${t} Popcorn'));
});
const getButter = getPopcorn.then((t)=>{
    console.log('Husband: I got some popcorn')
    console.log('husband: we should go in');
    console.log('wife: I need Butter on my popcorn');
    return new Promise((resolve, reject)=> resolve(' Butter'));

});
getButter.then((t)=> console.log(t));