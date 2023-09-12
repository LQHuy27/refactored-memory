
const element = document.getElementById("button");
element.addEventListener("click", function () {
    alert("Đăng nhập thành công")
    const mail = document.getElementById("mail").value
    const pass = document.getElementById("pass").value
    const user = {
        mail: mail,
        pass: pass,
    }
    const username = JSON.stringify(user)
    localStorage.setItem(mail, username)
})
