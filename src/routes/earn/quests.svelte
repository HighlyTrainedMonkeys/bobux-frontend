<script>
  import { onMount } from "svelte";
  import config from "../../config";
  import ErrorModal from "../../components/ErrorModal.svelte";
  import Success from "../../components/Success.svelte";
  import Loader from "../../components/Loader.svelte";

  let error;
  let successMessage;
  let completed = 0;
  let milestones = [];
  let redeem;
  let loaded = false;

  onMount(async () => {
    redeem = async milestone => {
      try {
        let result = await fetch(
          `${config.scheme}://${config.api}/api/v1/reward/claim`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
              username: localStorage.getItem("roblox-user")
            },
            body: JSON.stringify({
              milestone
            })
          }
        );

        let json = await result.json();

        if ((json.status = "error")) return (error = json.error);

        successMessage = json.result.message;
      } catch (error) {
        console.error(error);
        error =
          "Error when redeeming reward! Make sure you have an internet connection and try again!";
      }
    };

    try {
      let result = await fetch(
        `${config.scheme}://${config.api}/api/v1/reward/meta`,
        {
          headers: {
            username: localStorage.getItem("roblox-user")
          }
        }
      );
      let json = await result.json();

      if (json.status == "error") return (error = json.error);

      completed = json.result.completed;
      milestones = json.result.milestones;
      loaded = true;
    } catch (error) {
      console.error(error);
      error =
        "Error when retrieving quest data! Make sure you have an internet connection and try again!";
    }
  });
</script>

{#if !loaded}
  <Loader />
{:else}
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Quests
          </h2>
          <p class="text-xl text-gray-500">
            Complete offers to unlock rewards. Reset daily.
          </p>
          <p class="text-md text-gray-700">
            You've completed
            <b>{completed}</b>
            offers today!
          </p>
        </div>
        <ul
          class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12
          sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          {#each milestones as milestone}
            <li>
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <img
                    class="object-cover shadow-lg rounded-lg"
                    src="http://placehold.it/900x900"
                    alt="" />
                </div>

                <div class="space-y-2">
                  <div>
                    <h3 class="text-lg leading-6 font-medium">
                      Complete {milestone.offersRequired} offer
                    </h3>
                    <p class="text-md">
                      Reward:
                      <span class="text-green-500 font-bold">
                        R${milestone.payout}
                      </span>
                    </p>
                  </div>

                  {#if milestone.claimed}
                    <button
                      type="button"
                      class="inline-flex items-center px-3 py-2 border
                      border-transparent shadow-sm text-sm leading-4 font-medium
                      rounded-md text-gray-50 bg-gray-400 focus:outline-none">
                      Already redeemed!
                      <svg
                        class="ml-2 -mr-0.5 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9
                          9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </button>
                  {/if}

                  {#if milestone.claimable}
                    <button
                      on:click={() => {
                        redeem(milestone.offersRequired);
                      }}
                      type="button"
                      class="inline-flex items-center px-3 py-2 border
                      border-transparent shadow-sm text-sm leading-4 font-medium
                      rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                      focus:outline-none focus:ring-2 focus:ring-offset-2
                      focus:ring-blue-500">
                      Redeem
                      <svg
                        class="ml-2 -mr-0.5 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0
                          109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5
                          12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                    </button>
                  {/if}

                  {#if !milestone.claimed && !milestone.claimable}
                    <button
                      type="button"
                      class="inline-flex items-center px-3 py-2 border
                      border-transparent shadow-sm text-sm leading-4 font-medium
                      rounded-md text-gray-50 bg-gray-400 focus:outline-none">
                      {milestone.offersRequired - completed} more tasks required
                      <svg
                        class="ml-2 -mr-0.5 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9
                          9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                      </svg>
                    </button>
                  {/if}
                </div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
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
