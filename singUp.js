function passwordmatch() {
    if (
        document.getElementById("pwd").value == "" ||
        document.getElementById("cpwd").value == "" ||
        document.getElementById("num").value == "" ||
        document.getElementById("mail").value == ""
    ) {
        alert("Empty Field(s)!");
    } else if (
        document.getElementById("pwd").value !=
        document.getElementById("cpwd").value
    ) {
        alert("Passwords Do Not Match!\n Please try again");
    }
}
