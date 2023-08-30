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

    const submit = async () => {
        const res = await fetch(`${PUBLIC_USER_URL}/DeleteAccount`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json;",
                accept: "text/plain",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                userID: $user.userID,
                userFirstName: $user.userFirstName,
                userLastName: $user.userLastName,
                userEmail: $user.userEmail,
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

        {#if $user.userFirstName !== ""}
            <form class="form">
                <h1 class="delete__title">Delete Account</h1>
                <p>Are you sure you want to delete your account?</p>
                <strong>This cannot be undone.</strong>
                <br>
                <br>
                <br>
                <br>
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
        text-align: center;
        min-height: 350px;
        max-width: 400px; /* both width and max width should scale the page across different device type(responsive) */
        margin: 1rem; /* one unit of the base font size */
        padding: 2rem;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        background: white;
        gap: 10px;
    }


    .delete__title {
        margin-bottom: 2rem;
        text-align: center;
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
