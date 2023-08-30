<script lang="ts">
    import userFirstName from "$lib/types/user.js";
    import { goto } from "$app/navigation";

    import { PUBLIC_USER_URL } from "$env/static/public";
    import { Toast } from "flowbite-svelte";
    import { Icon } from "flowbite-svelte-icons";
    import { browser } from "$app/environment";
    import user from "$lib/types/user.js";

    let errorMessage = "";

    var currentPW: String;
    var newPW: String;

    const fireRedirect = async () => {
        if (browser) {
            goto("/login");
        }
    };

    const submit = async () => {
        const res = await fetch(`${PUBLIC_USER_URL}/UpdatePassword`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                accept: "text/plain",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userID: $userFirstName.userID,
                password: newPW,
            }),
        });

        let resp = await res.json();

        if (res.status !== 200) {
            errorMessage = "Changing your password failed. Please try again";
            return;
        } else {
            goto("/");
        }
    };
</script>

{@html "<!--I have created an input for the change password form with placeholders for both username and password-->"}

<body>
    <div class="container">
        {#if errorMessage !== ""}
            <Toast>
                <svelte:fragment slot="icon">
                    <Icon name="close-circle-solid" class="w-5 h-5" />
                    <span class="sr-only">Error icon</span>
                </svelte:fragment>
                <p>{errorMessage}</p>
            </Toast>
        {/if}

        {#if $user.userFirstName !== ""}
            <form class="form" id="change-pw">
                <h1 class="change__title">Change Password</h1>
                <div class="change__input-message">
                    <input
                        type="password"
                        bind:value={currentPW}
                        id="current-pw-input"
                        class="change__input"
                        style="background-color: white"
                        placeholder="Current Password"
                    />
                    <!--input description for username -->
                    <div class="change__input-error-message" />
                </div>
                <div class="change__input-message">
                    <input
                        type="password"
                        bind:value={newPW}
                        id="new-pw-input"
                        class="change__input"
                        style="background-color: white"
                        placeholder="New Password"
                    />
                    <!--input description and placeholder for password -->
                    <div class="submit__input-error-message" />
                </div>
                <button
                    class="submit__button"
                    type="submit"
                    on:click|preventDefault={() => {
                        submit();
                    }}>Submit</button
                >
                <!--login button with type submit-->
                <br />
                <br />
                <br />
            </form>
        {:else}
            <p hidden>{fireRedirect()}</p>
        {/if}
    </div>
</body>

{@html "<!--setting properties for the body, container, -->"}

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
    .container {
        min-height: 350px;
        max-width: 400px; /* both width and max width should scale the page across different device type(responsive) */
        margin: 1rem; /* one unit of the base font size */
        padding: 2rem;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        background: white;
    }

    .change__title {
        margin-bottom: 2rem;
        text-align: center;
        color: black;
    }

    .change__input-message {
        color: black;
        margin-bottom: 1rem; /* would create some space between the input fields */
    }

    .change__input {
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

    .change__input:focus {
        /*changes the background colur of the input field in focus to white*/
        border-color: green;
        background: white;
        color: black;
    }

    .submit__button {
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

    .submit__button:hover {
        background: darkgreen;
    }

    /*reduce the size of the button by 2% when clicked*/
    .submit__button:active {
        transform: scale(0.98);
    }
</style>
