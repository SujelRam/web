const button = document.getElementById('button');
button.onclick = () => {
    const email = prompt("Enter your Name");
    if (email) {
        alert("Welcome to Web Page " + email);
    }
    else{
        return email;
    }
};