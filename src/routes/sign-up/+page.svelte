{@html '<!--I have created an input for the signup form with placeholders for both username, emai, password and confirm password-->'}

<body>

    <div class="signupform">

        <form class="form">
            <h1 class="signup__title">Sign up</h1>
            
            <div class="signup_message">
                <input type="text" class="signup__input" style="background-color: white" placeholder="Email" required> <!--input description for email -->
            </div>

            <div class="signup_message">
                <input type="text" class="login__input" style="background-color: white" placeholder="Username" required> <!--input description for username -->
            </div>

            <div class="signup_message">
                <input type="text" class="login__input" style="background-color: white" placeholder="Password" required> <!--input description for password -->
            </div>

            <div class="signup_message">
                <input type="text" class="login__input" style="background-color: white" placeholder="Confirm Password" required> <!--input description to confirm password -->
            </div>

            <button class="signup__button" type="submit">Sign up</button> <!--signup button with type submit-->


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
    .signupform{
        min-height: 350px;
        max-width: 400px; /* both width and max width should scale the page across different device type(responsive) */
        margin: 1rem; /* one unit of the base font size */
        padding: 2rem;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.2) ;
        border-radius: 4px;
        background: white;
    } 

    .signup_message{
        text-align: center;
        margin-bottom: 1rem;
    }

    .signup__title{
        margin-bottom: 2rem;
        text-align: center;
        color: black;
    }


    .signup__input{
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 0.60rem;
        border-radius: 4px;
        outline: none;
        border: 1px solid lightgrey;
        background: grey;
        color: black;
        transition: background 0.2s, border-color 0.2s;/*transition on the inputfield background colour */
    }

    .signup__input:focus{ /*changes the background colur of the input field in focus to white*/
        border-color: green;
        background: white;
        color: black;

    }

    .signup__button{
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

    .signup__button:hover{
       background: darkgreen; 
    }
    
    /*reduce the size of the button by 2% when clicked*/
    .signup__button:active{
        transform: scale(0.98);
        
    }
</style>
