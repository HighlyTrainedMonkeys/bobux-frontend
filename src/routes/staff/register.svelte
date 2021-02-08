<script>
  import firebase from "firebase/app";
  import "firebase/auth";
  import { onMount } from "svelte";
  import config from "../../config";
  import Loader from "../../components/Loader.svelte";
  import ErrorModal from "../../components/ErrorModal.svelte";

  let error;
  let loaded = false;

  let username;
  let email;
  let token;
  let password;

  const register = async () => {
    try {
      let result = await fetch(
        `${config.scheme}://${config.api}/api/v1/staff/register`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            email,
            username,
            token,
            password
          })
        }
      );

      let json = await result.json();

      if (json.error) return (error = json.error);

      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      error =
        "Failed to register! Please check your internet connection and try again!";
    }
  };

  onMount(() => {
    firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        await goto("/staff");
      } else {
        loaded = true;
      }
    });
  });
</script>

<div
  class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4
  sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Staff Registration
      </h2>
    </div>
    <form class="mt-8 space-y-6" on:submit|preventDefault={register}>
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="username" class="sr-only">Username</label>
          <input
            bind:value={username}
            id="username"
            name="username"
            type="text"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2
            border border-gray-300 placeholder-gray-500 text-gray-900
            rounded-t-md focus:outline-none focus:ring-blue-500
            focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Username" />
        </div>

        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input
            bind:value={email}
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2
            border border-gray-300 placeholder-gray-500 text-gray-900
            rounded-t-md focus:outline-none focus:ring-blue-500
            focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Email address" />
        </div>

        <div>
          <label for="token" class="sr-only">Registration token</label>
          <input
            bind:value={token}
            id="token"
            name="token"
            type="text"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2
            border border-gray-300 placeholder-gray-500 text-gray-900
            focus:outline-none focus:ring-blue-500 focus:border-blue-500
            focus:z-10 sm:text-sm"
            placeholder="Registration token" />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input
            bind:value={password}
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required
            class="appearance-none rounded-none relative block w-full px-3 py-2
            border border-gray-300 placeholder-gray-500 text-gray-900
            rounded-b-md focus:outline-none focus:ring-blue-500
            focus:border-blue-500 focus:z-10 sm:text-sm"
            placeholder="Password" />
        </div>

      </div>

      <div>
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border
          border-transparent text-sm font-medium rounded-md text-gray-50
          bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2
          focus:ring-offset-2 focus:ring-blue-500">
          Register
        </button>
      </div>
    </form>
  </div>
</div>

{#if error}
  <ErrorModal
    {error}
    on:close={() => {
      error = null;
    }} />
{/if}