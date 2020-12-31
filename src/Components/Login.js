import React from 'react'
export default function Login() {
    return (
 <div className="Login">
   <label for="First Name"><b>First Name</b></label>
    <input type="text" placeholder="Enter First Name" name="First Name" id="First Name" required></input>
    <label for="Last Name"><b>Last Name</b></label>
    <input type="text" placeholder="Enter Last Name" name="Last Name" id="Last Name" required></input>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required></input>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
    <label for="psw-repeat"><b>Confirm Password</b></label>
    <input type="password" placeholder="Confirm Password" name="psw-repeat" id="psw-repeat" required></input>
    <p>By creating an account you agree to our <a href="#">Terms and Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
  <div class="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</div>
    )
}