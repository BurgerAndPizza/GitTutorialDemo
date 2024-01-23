function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way
  
    // Get form elements
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    // Create an object to store user details
    const obj = {
      username: name,
      email: email,
      phone: phone,
    }
  
    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj)
}
function showUserOnScreen(obj){
    const parentElem = document.getElementById('listOfItems')
    const childElem = document.getElementById('li')
    childElem.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phone
    const deleteButton = doument.createElement('input')
    deleteButton.type = "button"
    deleteButton.value = 'Delete'
    deleteButton.onclick= () => {
        localStorage.removeItem(ob.email)
        parentElem.removeChild(childElem)

    }
    childElem.appendChild(deleteButton)
    parentElem.appendChild(childElem)
}
module.exports=handleFormSubmit;