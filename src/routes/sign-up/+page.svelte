<script lang="ts">
    import isLoggedIn from "$lib/types/loggedInStore.js";
    import { PUBLIC_SIGNUP_URL } from "$env/static/public";
    import { goto } from "$app/navigation";
    import ErrorBanner from "$lib/components/ErrorBanner.svelte";

    var hasFailed: boolean;

    let errorMessage = "";

    var regexp = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    var email: string;
    var password1: string;
    var password2: string;
    var firstName: string;
    var lastName: string;

    const submit = async () => {
        if (password1 !== password2) {
            hasFailed = true;
        }

        const res = await fetch(`${PUBLIC_SIGNUP_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                accept: "text/plain",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userFirstName: firstName,
                userLastName: lastName,
                userEmail: email,
                userPassword: password1,
            }),
        }).then((response) => {
            if (response.status !== 201) {
                return response.text().then((data) => (errorMessage = data));
            } else {
                $isLoggedIn = true;
                goto("/");
            }
        });
    };
</script>

{@html "<!--I have created an input for the signup form with placeholders for both name, email, password and confirm password-->"}

<body>
    <div class="signupform">
        {#if errorMessage !== ""}
            <ErrorBanner ErrorMessage={errorMessage} />
        {/if}

        <form class="form">
            <h1 class="signup__title">Sign up</h1>

            <div class="signup_message">
                <input
                    type="text"
                    class="signup__input"
                    style="background-color: white"
                    bind:value={firstName}
                    placeholder="First Name"
                    required
                />
                <!--input description for name -->
            </div>

            <div class="signup_message">
                <input
                    type="text"
                    class="signup__input"
                    style="background-color: white"
                    bind:value={lastName}
                    placeholder="Last Name"
                    required
                />
                <!--input description for name -->
            </div>

            <div class="signup_message">
                <input
                    type="text"
                    class="signup__input"
                    style="background-color: white"
                    bind:value={email}
                    placeholder="Email"
                    required
                />
                <!--input description for email -->
            </div>

            <div class="signup_message">
                <input
                    type="password"
                    class="login__input"
                    style="background-color: white"
                    bind:value={password1}
                    placeholder="Password"
                    required
                />
                <!--input description for password -->
            </div>

            <div class="signup_message">
                <input
                    type="password"
                    class="login__input"
                    style="background-color: white"
                    bind:value={password2}
                    placeholder="Confirm Password"
                    required
                />
                <!--input description to confirm password -->
            </div>

            <button
                class="signup__button"
                type="submit"
                on:click|preventDefault={() => {
                    submit();
                }}>Sign up</button
            >
            <!--signup button with type submit-->
        </form>
    </div>
</body>

{@html "<!--setting propertiews for the body, container, -->"}

<style>
    body {
        /*should vertically and horizontally center the container for the form*/
        align-items: center;
        justify-content: center;
        font-size: 18px;
        margin: 0;
        height: 100vh;
        display: flex;
        background: url(./Login-page-background.jpg);
        background-size: cover; /* so the image takes up the entire width of the background */
    }
    .signupform {
        min-height: 350px;
        max-width: 400px; /* both width and max width should scale the page across different device type(responsive) */
        margin: 1rem; /* one unit of the base font size */
        padding: 2rem;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        background: white;
    }

    .signup_message {
        text-align: center;
        margin-bottom: 1rem;
    }

    .signup__title {
        margin-bottom: 2rem;
        text-align: center;
        color: black;
    }

    .signup__input {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 0.6rem;
        border-radius: 4px;
        outline: none;
        border: 1px solid lightgrey;
        background: grey;
        color: black;
        transition: background 0.2s, border-color 0.2s; /*transition on the inputfield background colour */
    }

    .signup__input:focus {
        /*changes the background colur of the input field in focus to white*/
        border-color: green;
        background: white;
        color: black;
    }

    .signup__button {
        width: 100%;
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

    .signup__button:hover {
        background: darkgreen;
    }

    /*reduce the size of the button by 2% when clicked*/
    .signup__button:active {
        transform: scale(0.98);
    }
</style>
