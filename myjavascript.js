function openWindow() {
    var myName = document.getElementById("username");
    var myPassword = document.getElementById("password");
    if (myName.value === "Admin" && myPassword.value === "1234")
    {
        alert("Welcome");
    }
    else {
        alert("sorry");
    }
}