<script>
  import firebase from "firebase/app";
  import "firebase/auth";
  import { onMount } from "svelte";
  import Loader from "../../components/Loader.svelte";
  import ErrorModal from "../../components/ErrorModal.svelte";

  let loaded = false;
  let authenticated = false;
  let error;

  let email;
  let password;

  const login = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      error = error.message;
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

{#if !loaded}
  <Loader />
{:else}
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4
    sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Staff Login
        </h2>
      </div>
      <form class="mt-8 space-y-6" on:submit|preventDefault={login}>
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              bind:value={email}
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3
              py-2 border border-gray-300 placeholder-gray-500 text-gray-900
              rounded-t-md focus:outline-none focus:ring-blue-500
              focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Email address" />
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
              class="appearance-none rounded-none relative block w-full px-3
              py-2 border border-gray-300 placeholder-gray-500 text-gray-900
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
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}

{#if error}
  <ErrorModal
    {error}
    on:close={() => {
      error = null;
    }} />
{/if}