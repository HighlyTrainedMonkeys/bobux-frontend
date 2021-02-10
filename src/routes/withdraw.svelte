<script>
  import { onMount } from "svelte";
  import config from "../config";
  import ErrorModal from "../components/ErrorModal.svelte";
  import Success from "../components/Success.svelte";
  import Loader from "../components/Loader.svelte";
  import ConfirmationModal from "../components/ConfirmationModal.svelte";

  let loaded = false;
  let error;
  let username = localStorage.getItem("roblox-user");
  let amount;
  let successMessage;
  let group;

  //TODO: make a confirmation form for this
  const initWithdraw = async () => {
    let result = await fetch(
      `${config.scheme}://${config.api}/api/v1/transactions/init`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          username: localStorage.getItem("roblox-user")
        },
        body: JSON.stringify({
          amount
        })
      }
    );

    let json = await result.json();

    if (json.status == "error") return (error = json.error);

    group = json.result;
  };

  const completeWithdraw = async () => {
    group = null;
    let result = await fetch(
      `${config.scheme}://${config.api}/api/v1/transactions/complete`,
      {
        method: "POST",
        headers: {
          username: localStorage.getItem("roblox-user")
        },
      }
    );

    let json = await result.json();

    if (json.status == "error") return (error = json.error);

    successMessage = json.result.message;
  };
</script>

{#if loaded}
  <Loader />
{:else}
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4
    sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 pb-6 rounded-md shadow-lg">
      <div>
        <img
          class="mx-auto h-auto w-full rounded-t-lg"
          src="https://cdn.discordapp.com/attachments/804782116126195732/806850471225458708/unknown.png"
          alt="" />
        <h2 class="mt-6 text-center text-3xl font-bold text-gray-900">
          Withdraw your balance
        </h2>
      </div>
      <form class="mt-8 mx-4 space-y-6" on:submit|preventDefault={initWithdraw}>
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm space-y-2">
          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div class="mt-1">
              <input
                disabled
                type="text"
                name="username"
                id="username"
                class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block
                w-full sm:text-sm bg-gray-200 border-gray-300 rounded-md
                cursor-not-allowed"
                placeholder={username} />
            </div>
          </div>

          <div>
            <label for="amount" class="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <div class="mt-1">
              <input
                bind:value={amount}
                type="number"
                name="amount"
                id="amount"
                class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block
                w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="5" />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border
            border-transparent text-sm font-medium rounded-md text-gray-50
            bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2
            focus:ring-offset-2 focus:ring-blue-500">
            Withdraw
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

{#if successMessage}
  <Success
    {error}
    on:close={() => {
      successMessage = null;
    }} />
{/if}

{#if group}
  <ConfirmationModal
    on:complete={completeWithdraw}
  />
{/if}