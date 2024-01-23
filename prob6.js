function handleFormSubmit(event){
    event.preventDefault();
    const username = document.getElementBYId('username').value;
    const email = document.getElementBYId('email').value;
    const phone = document.getElementBYId('phone').value;  
    const listItem = document.createElemet('li');
    listItem.innerHTML = '${username}, ${email}, ${phone} <button onclick="editUser(this)">Edit </button>
    <button onclick="deleteUser(this)"> Delete </button>';
    
  }