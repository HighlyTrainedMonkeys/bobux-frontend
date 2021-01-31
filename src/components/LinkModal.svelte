<script>
  import { createEventDispatcher } from "svelte";
  import config from "../config";
  let dispatch = createEventDispatcher();
  //TODO: implement referrals
  let username;

  const link = async () => {
    try {
      console.log("link clicked");
      if (!username) return;

      let result = await fetch(`${config.scheme}://${config.api}`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: {
          username
        }
      });

      if (result.status == 200) {
        localStorage.setItem("roblox-user", username);
        dispatch("update");
      } else {
        let json = await result.json();
        dispatch(
          "error",
          json.error ||
            "Failed to link account! Make sure you have an internet connection and try again!"
        );
      }
    } catch (error) {
      console.error(error);
      dispatch(
        "error",
        "Failed to link account! Make sure you have an internet connection and try again!"
      );
    }
  };
</script>

<div class="fixed z-10 inset-0 overflow-y-auto">
  <div
    class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20
    text-center sm:block sm:p-0">
    <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 transition-opacity" aria-hidden="true">
      <div class="absolute inset-0 bg-gray-500 opacity-75" />
    </div>

    <!-- This element is to trick the browser into centering the modal contents. -->
    <span
      class="hidden sm:inline-block sm:align-middle sm:h-screen"
      aria-hidden="true">
      &#8203;
    </span>
    <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    -->
    <div
      class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4
      text-left overflow-hidden shadow-xl transform transition-all sm:my-8
      sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline">
      <div>
        <div
          class="mx-auto flex items-center justify-center h-12 w-12 rounded-full
          bg-green-100 px-2 py-2">
          <svg
            class="h-24 w-24 text-green-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656
              5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0
              00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3
            class="text-lg leading-6 font-medium text-gray-900"
            id="modal-headline">
            Link your account!
          </h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              Type in your username below to get started!
            </p>
          </div>
        </div>
      </div>
      <form on:submit|preventDefault={link}>
        <div class="mt-6">
          <label for="username" class="sr-only">Username</label>
          <input
            bind:value={username}
            type="text"
            name="username"
            id="linkuser"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block
            w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Builderman" />
        </div>
        <div class="mt-2 sm:mt-6">
          <button
            on:click={link}
            type="button"
            class="inline-flex justify-center w-full rounded-md border
            border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base
            font-medium text-white hover:bg-indigo-700 focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
            Link!
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
