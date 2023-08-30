<script lang="ts">
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    import user from "$lib/types/user";
    import { PUBLIC_USER_URL } from "$env/static/public";
    import { Toast } from "flowbite-svelte";
    import { Icon } from "flowbite-svelte-icons";

    let errorMessage = "";

    const fireRedirect = async () => {
        if (browser) {
            goto("/");
        }
    };

    var email: string;
    var userID: number;
    var firstName: string;
    var lastName: string;

    const submit = async () => {
        const res = await fetch(`${PUBLIC_USER_URL}/DeleteAccount`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                accept: "text/plain",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userID: userID,
                userFirstName: firstName,
                userLastName: lastName,
                userEmail: email,
                isUserAdmin: $user.isUserAdmin
            }),
        }).then((response) => {
            if (response.status !== 200) {
                return response.text().then((data) => (errorMessage = data));
            } else {
                goto("/");
            }
        });
    };
</script>

<body>
    <div class="deleteform">
        {#if errorMessage !== ""}
            <Toast>
                <svelte:fragment slot="icon">
                    <Icon name="close-circle-solid" class="w-5 h-5" />
                    <span class="sr-only">Error icon</span>
                </svelte:fragment>
                <p>{errorMessage}</p>
            </Toast>
        {/if}

        {#if $user.isUserAdmin == true}
            <form class="form">
                <h1 class="delete__title">Sign up</h1>

                <div class="delete_message">
                    <input
                        type="text"
                        class="delete__input"
                        style="background-color: white"
                        bind:value={userID}
                        placeholder="User ID"
                        required
                    />
                    <!--input description for id -->
                </div>

                <div class="delete_message">
                    <input
                        type="text"
                        class="delete__input"
                        style="background-color: white"
                        bind:value={lastName}
                        placeholder="Last Name"
                        required
                    />
                    <!--input description for name -->
                </div>

                <div class="delete_message">
                    <input
                        type="text"
                        class="delete__input"
                        style="background-color: white"
                        bind:value={lastName}
                        placeholder="Last Name"
                        required
                    />
                    <!--input description for name -->
                </div>

                <div class="delete_message">
                    <input
                        type="text"
                        class="delete__input"
                        style="background-color: white"
                        bind:value={email}
                        placeholder="Email"
                        required
                    />
                    <!--input description for email -->
                </div>

                <button
                    class="delete__button"
                    type="submit"
                    on:click|preventDefault={() => {
                        submit();
                    }}>Delete User</button
                >
                <!--delete button with type submit-->
            </form>
        {:else}
            <p hidden>{fireRedirect()}</p>
        {/if}
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
    .deleteform {
        min-height: 350px;
        max-width: 400px; /* both width and max width should scale the page across different device type(responsive) */
        margin: 1rem; /* one unit of the base font size */
        padding: 2rem;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        background: white;
    }

    .delete_message {
        text-align: center;
        margin-bottom: 1rem;
    }

    .delete__title {
        margin-bottom: 2rem;
        text-align: center;
        color: black;
    }

    .delete__input {
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

    .delete__input:focus {
        /*changes the background colur of the input field in focus to white*/
        border-color: green;
        background: white;
        color: black;
    }

    .delete__button {
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

    .delete__button:hover {
        background: darkgreen;
    }

    /*reduce the size of the button by 2% when clicked*/
    .delete__button:active {
        transform: scale(0.98);
    }
</style>
