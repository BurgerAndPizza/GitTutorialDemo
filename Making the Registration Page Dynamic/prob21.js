phone
    {

    axios.post('https://crudcrud.com/api/a004d8ad7b6a4d528ea1f1e31b685429/bookAppointment', obj)
        .then(res => console.log(res))
    axios.post('https://crudcrud.com/api/74a2572894ad4d70859eff1648642425/bookAppointment', obj)
        .then(res => showNewUser(res.data))
        .catch(err => console.error(err));
    showNewUser(obj);

}
window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/a004d8ad7b6a4d528ea1f1e31b685429/bookAppointment')
    axios.get('https://crudcrud.com/api/74a2572894ad4d70859eff1648642425/bookAppointment')
    .then(res => {
        console.log(res.data);
        for(let i=0; i<res.data.length; i++){
        for(var i=0; i<res.data.length; i++){
            showNewUser(res.data[i]);
        }
    }
})
function showNewUser(user){
    document.getElementById('phone').value = '';

    const parent = document.getElementById('listOfItems');
    parent.innerHTML += <li> ${user.name} - ${user.email} - ${user.phone}</li>
    const li = document.createElement('li');
    li.innerText = `${user.name} - ${user.email} - ${user.phone}`;

    const input = document.createElement('input');
    input.type = 'button';
    input.value = 'Delete';

    input.onclick = () => {
        axios.delete('https://crudcrud.com/api/6d488fa43d8348ed990802d94f867bc9/bookAppointment/${user._id}')
        .then();
        parent.removeChild(li);
    }

    li.appendChild(input);
    parent.appendChild(li);
}
})