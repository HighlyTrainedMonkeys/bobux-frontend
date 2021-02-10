<script>
  import { onMount } from "svelte";
  import config from "../../config";
  import ErrorModal from "../../components/ErrorModal.svelte";
  import Success from "../../components/Success.svelte";
  import Loader from "../../components/Loader.svelte";

  let error;
  let meta;
  let enterGiveaway;
  let token;
  let successMessage;

  //TODO: implement captcha here
  onMount(async () => {
    enterGiveaway = async () => {
      try {
        let result = await fetch(
          `${config.scheme}://${config.api}/api/v1/giveaway/enter`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              username: localStorage.getItem("roblox-user")
            },
            body: JSON.stringify({
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
          "Error entering giveaway! Make sure you have an internet connection and try again!";
      }
    };

    try {
      let result = await fetch(
        `${config.scheme}://${config.api}/api/v1/giveaway/meta`
      );

      let json = await result.json();

      if (json.status == "error") return (error = json.error);

      meta = json.result;
    } catch (error) {
      error =
        "Failed to load giveaway info! Make sure you have an internet connection and try again!";
    }
  });
</script>

<svelte:head>
  <title>Bobux.GG - Giveaway</title>
</svelte:head>

{#if !meta}
  <Loader />
{:else}
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-50
    py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 pb-4 rounded-md shadow-lg">
      <div>
        <img
          class="mx-auto h-auto w-full rounded-t-md"
          src="https://cdn.discordapp.com/attachments/804782116126195732/805189392841965638/unknown.png"
          alt="" />
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          Enter the giveaway!
        </h2>
        <p class="mt-2 text-center text-md text-gray-600">
          Ends in: {meta.ending}
        </p>
        <p class="text-center text-md text-gray-600">
          Reward:
          <span class="font-bold text-green-500">R${meta.amount}</span>
        </p>
      </div>
      <div class="mx-4">
        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border
          border-transparent text-md font-medium rounded-md text-gray-50
          bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2
          focus:ring-offset-2 focus:ring-blue-500">
          Enter!
        </button>

        <h2 class="mt-2 text-center text-md text-gray-600">
          <b>Note:</b>
          You can enter the giveaway multiple times for a higher chance of
          winning.
        </h2>
      </div>
    </div>

    <div class="max-w-md w-full space-y-8 mt-6 rounded-md shadow-lg">
      <h1 class="text-center text-2xl font-medium py-6">Top Entries</h1>
      <ul class="divide-y divide-gray-200">
         {#each meta.top as user}
          <li class="py-4">
            <div class="flex space-x-16">
              <img class="h-14 w-14 rounded-full" src={user.image} alt="" />
              <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-md font-medium">{user.username}</h3>
                </div>
                <p class="text-md text-gray-500">
                  Chances of winning the giveaway: {user.chance}
                </p>
              </div>
            </div>
          </li>
        {/each}
      </ul>
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

{#if successMessage}
  <Success
    message={successMessage}
    on:close={() => {
      successMessage = null;
    }} />
{/if}
