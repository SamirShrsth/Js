function adminlog(){
    let outPut = `<div class="container">
    <img src="/Images/background.jpg" alt="">
    <img src="/Images/background1.jpg" alt="">
    <div class="login-container">
        <form action="admin.html">
            <div class="signup-text">
                <span>Admin Login</span><br>
            </div>
            <div class="log-item">
                <input type="text" name="username" placeholder="Username" id="appName">
                <span id="nameError"></span>
            </div>
            <div class="log-item">
                <input type="password" name="password" placeholder="Password" id="appPass">
                <span id="passError"></span>
            </div>

            <span>Not an Admin? <a href="login.html">Sign up</a> instead</span>
            <div class="submit">
                <input type="submit" id="submitAppointment" value="Login">
            </div>
        </form>
    </div>
</div>`;

    return outPut;
}
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('submitAppointment').addEventListener('click', function(event){
        event.preventDefault();
        let username = document.getElementById('appName').value;
        let password = document.getElementById('appPass').value;

        let nError = document.getElementById('nameError');
        let pError = document.getElementById('passError');

        if(username == ''){
            nError.innerHTML = "Username is required";
        } if(password == ''){
            pError.innerHTML = "Password is required";
        } else if (username === 'admin' && password === 'admin') {
            window.location.href = 'index.html';
        } else {
            nError.innerHTML = ''; // Clear any previous error messages
            pError.innerHTML = 'Invalid username or password';
        }
    });
});
export default adminlog;