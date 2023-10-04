function login(){
    let outPut = `<form>
    <div class="container">
        <img src="/Images/background.jpg" alt="">
        <img src="/Images/background1.jpg" alt="">
        <div class="login-container">
            <div class="signup-text">
                <span>Create an Account</span><br>
            </div>
            <div class="log-item">
                <input type="text" placeholder="Username" id="appName">
                <span id="nameError"></span>
            </div>
            <div class="log-item">
                <input type="text" placeholder="Email" id="appEmail">
                <span id="emailError"></span>
            </div>
            <div class="log-item">
                <input type="text" placeholder="Password" id="appPass">
                <span id="passError"></span>
            </div>
            <div class="log-item">
                <input type="text" placeholder="Confirm Password" id="appConfirm">
                <span id="confirmError"></span>
            </div>
            <div class="birthday">
                <span>Birthday :</span>
                <div class="date">
                    <select name="month" id="month">
                        <option value="month">Jan</option>
                        <option value="month">Feb</option>
                        <option value="month">Mar</option>
                        <option value="month">Apr</option>
                        <option value="month">May</option>
                        <option value="month">Jun</option>
                        <option value="month">Jul</option>
                        <option value="month">Aug</option>
                        <option value="month">Sep</option>
                        <option value="month">Oct</option>
                        <option value="month">Nov</option>
                        <option value="month">Dec</option>
                    </select>
                    <span id="monthError"></span>
                    <select name="date" id="date">
                        <option value="date">1</option>
                        <option value="date">2</option>
                        <option value="date">3</option>
                        <option value="date">4</option>
                        <option value="date">5</option>
                        <option value="date">6</option>
                        <option value="date">7</option>
                        <option value="date">8</option>
                        <option value="date">9</option>
                        <option value="date">10</option>
                        <option value="date">11</option>
                        <option value="date">12</option>
                        <option value="date">13</option>
                        <option value="date">14</option>
                        <option value="date">15</option>
                        <option value="date">16</option>
                        <option value="date">17</option>
                        <option value="date">18</option>
                        <option value="date">19</option>
                        <option value="date">20</option>
                        <option value="date">21</option>
                        <option value="date">22</option>
                        <option value="date">23</option>
                        <option value="date">24</option>
                        <option value="date">25</option>
                        <option value="date">26</option>
                        <option value="date">27</option>
                        <option value="date">28</option>
                        <option value="date">29</option>
                        <option value="date">30</option>
                        <option value="date">31</option>
                    </select>
                    <span id="dateError"></span>
                    <select name="year" id="year">
                        <option value="year">2023</option>
                        <option value="year">2022</option>
                        <option value="year">2021</option>
                        <option value="year">2020</option>
                        <option value="year">2019</option>
                        <option value="year">2018</option>
                        <option value="year">2017</option>
                        <option value="year">2016</option>
                        <option value="year">2015</option>
                        <option value="year">2014</option>
                        <option value="year">2013</option>
                        <option value="year">2012</option>
                        <option value="year">2011</option>
                        <option value="year">2010</option>
                        <option value="year">2009</option>
                        <option value="year">2008</option>
                        <option value="year">2007</option>
                        <option value="year">2006</option>
                        <option value="year">2005</option>
                        <option value="year">2004</option>
                        <option value="year">2003</option>
                        <option value="year">2002</option>
                        <option value="year">2001</option>
                        <option value="year">2000</option>
                        <option value="year">1999</option>
                        <option value="year">1998</option>
                        <option value="year">1997</option>
                        <option value="year">1996</option>
                        <option value="year">1995</option>
                    </select>
                    <span id="yearError"></span>
                </div>
            </div>
            <div class="last-text">
                <input type="checkbox">
                <span>  I Agree to The 
                        <a href="">Terms and Conditions </a>
                        of UniGames Privacy Policy.
                </span>
            </div>
            <div class="submit">
                <input type="submit" id="submitAppointment" value="Sign Up">
            </div>
        </div>

    </div>
</form>`;
return outPut;
}
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('submitAppointment').addEventListener('click', function(event){
        event.preventDefault();
        let name = document.getElementById('appName').value;
        let email = document.getElementById('appEmail').value;
        let pass = document.getElementById('appPass').value;
        let confirm = document.getElementById('appConfirm').value;

        let nameError = document.getElementById('nameError');
        let emailError = document.getElementById('emailError');
        let passError = document.getElementById('passError');
        let confirmError = document.getElementById('confirmError');

        if (name == '') {
            nameError.innerHTML = "Username is required";
        } else if (!name.match(/^[a-zA-Z]/)) {
            nameError.innerHTML = "Only use alphabet";
        } else if (name.length < 3) {
            nameError.innerHTML = "Username must be longer than 3 characters";
        } else {
            nameError.innerHTML = '';
        }

        if (email == '') {
            emailError.innerHTML = 'Email is required';
        } else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            emailError.innerHTML = 'Email must be in format someone@gmail.com';
        } else {
            emailError.innerHTML = '';
        }

        if (pass == '') {
            passError.innerHTML = 'Password is required';
        } else if (pass.length < 8) {
            passError.innerHTML = 'Password must be at least 8 characters long';
        } else if (!/\d/.test(pass)) {
            passError.innerHTML = 'Password must contain at least 1 number';
        } else if (!/[!@#$%^&*]/.test(pass)) {
            passError.innerHTML = 'Password must contain at least 1 special character';
        } else {
            passError.innerHTML = '';
        }

        if (confirm == '') {
            confirmError.innerHTML = 'Please Confirm Your Password';
        } else if (confirm !== pass) {
            confirmError.innerHTML = 'Passwords do not match';
        } else {
            confirmError.innerHTML = '';
            
            // All validation conditions are met, redirect to index.html
            window.location.href = 'index.html';
        }
    });
});
export default login;