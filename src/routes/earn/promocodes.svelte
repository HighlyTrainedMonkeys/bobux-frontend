<script>
  import { onMount } from "svelte";
  import config from "../../config";
  import ErrorModal from "../../components/ErrorModal.svelte";
  import Success from "../../components/Success.svelte";
  import Loader from "../../components/Loader.svelte";

  //TODO: implement captcha
  let loaded = false;
  let error;
  let code;
  let token;
  let successMessage;

  const redeem = async () => {
    try {
      let result = await fetch(
        `${config.scheme}://${config.api}/api/v1/promocode/redeem`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            code,
            token
          })
        }
      );

      let json = await result.json();

      if (json.status == "error") return (error = json.error);

      successMessage = json.result.message;
    } catch (error) {
      console.error(error);
      error =
        "Failed to redeem promocode! Make sure you have an internet connection and try again!";
    }
  };
</script>

<svelte:head>
  <title>Bobux.GG - Promocodes</title>
</svelte:head>

{#if loaded}
  <Loader />
{:else}
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4
    sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 pb-4 rounded-md shadow-lg">
      <div>
        <img
          class="mx-auto h-auto w-full rounded-t-lg"
          src="https://cdn.discordapp.com/attachments/804782116126195732/805549033614999562/unknown.png"
          alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          Redeem a promocode
        </h2>
      </div>
      <form class="mt-8 mx-4 space-y-6" on:submit|preventDefault={redeem}>
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="promocode" class="sr-only">Code</label>
            <input
              bind:value={code}
              id="promocode"
              name="promocode"
              type="text"
              required
              class="appearance-none rounded-none relative block w-full px-3
              py-2 border border-gray-300 placeholder-gray-500 text-gray-900
              rounded-md focus:outline-none focus:ring-blue-500
              focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Code" />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border
            border-transparent text-sm font-medium rounded-md text-gray-50
            bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2
            focus:ring-offset-2 focus:ring-blue-500">
            Redeem
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
