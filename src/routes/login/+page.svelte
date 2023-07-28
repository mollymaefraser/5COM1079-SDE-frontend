{@html '<!--I have created an input for the login form with placeholders for both username and password-->'}

<body>
    <div class= "container">
        <form class="form" id="login">
            <h1 class="login__title">Login</h1>
            <div class="login__message login__error--message"></div> <!--error message fopr wrong login details-->
            <div class="login__input-message">
                <input type="text" class="login__input" placeholder="Username or email"> <!--input description for username -->
                <div class="login__input-error-message"></div>
            </div>
            <div class="login__input-message">
                <input type="password" class="login__input" placeholder="Password"> <!--input description and placeholder for password -->
                <div class="login__input-error-message"></div>
            </div>
            <button class="login__button" type="submit">Login</button> <!--login button with type submit-->
            <p class="login__text">
                <a href="/reset-password" class="login__password-link">Forgot your password</a> <!--forgot passord link to reset password-->
            </p>
            <p class="login__text">
                <a href="/sign-up" class="login__password-link">Signup</a> <!--forgot passord link to reset password-->
            </p>
        </form>
    </div>
</body>


{@html '<!--setting propertiews for the body, container, -->'}

<style>
    body{ /*should vertically and horizontally center the container for the form*/
        align-items: center;
        justify-content: center;
        font-size: 18px;
        margin: 0;
        height: 100vh; 
        display: flex; 
        background: url(./Login-page-background.jpg);
        background-size: cover; /* so the image takes up the entire width of the background */

    }
    .container{
        
        width: 400px;
        max-width: 400px; /* both width and max width should scale the page across different device type(responsive) */
        margin: 1rem; /* one unit of the base font size */
        padding: 2rem;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.2) ;
        border-radius: 4px;
        background: white;
    } 

    .login__message{
        text-align: center;
        margin-bottom: 1rem;
    }

    .login__title{
        margin-bottom: 2rem;
        text-align: center;
    }

    
    .login__error--message{
        color: red;
    }

    .login__input-message{
        margin-bottom: 1rem; /* would create some space between the input fields */
    }

    .login__input{
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 0.60rem;
        border-radius: 4px;
        outline: none;
        border: 1px solid lightgrey;
        background: grey;
        transition: background 0.2s, border-color 0.2s;/*transition on the inputfield background colour */
    }

    .login__input:focus{ /*changes the background colur of the input field in focus to white*/
        border-color: green;
        background: white;
    }

    .login__button{
        width:100% ; 
        padding: 1rem 2rem;
        font-weight: bold;
        font-size: 1.1rem;
        color: white;
        border: none;
        border-radius: 4px;
        outline: none;
        cursor: pointer;
        background: green;
    }

    .login__button:hover{
       background: darkgreen; 
    }
    
    /*reduce the size of the button by 2% when clicked*/
    .login__button:active{
        transform: scale(0.98);
        
    }
</style>