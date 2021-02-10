<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";
  import LinkModal from "./LinkModal.svelte";
  import ErrorModal from "./ErrorModal.svelte";

  import config from "../config.js";

  export let segment;

  let open = false;
  let showLinkModal = false;
  let user;
  let error;

  const toggle = () => {
    open = !open;
  };

  const update = () => {
    user = localStorage.getItem("roblox-user");
    showLinkModal = false;
  };

  //link account or logout based on whether or not the user exists
  const authAction = () => {
    console.log(user);
    if (user) {
      localStorage.removeItem("roblox-user");
    } else {
      showLinkModal = true;
    }
  };

  onMount(async () => {
    try {
      let username = localStorage.getItem("roblox-user");

      if (!username) return;

      let result = await fetch(
        `${config.scheme}://${config.api}/api/v1/user/info`,
        {
          headers: {
            username
          }
        }
      );

      let json = await result.json();

      if (json.result) {
        user = json.result;
      } else {
        if (segment == "earn" || segment == "withdraw") {
          goto("/");
        }
      }
    } catch (error) {
      console.error(error);
      goto("/");
    }
  });
</script>

<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="flex-shrink-0 flex items-center mr-4">
          <a href="/">
            <img
              class="block h-10 w-auto"
              src="https://cdn.discordapp.com/attachments/707054667523162134/807165183684247552/main_png_logo.png"
              alt="Bobux.gg" />
          </a>
        </div>
        <div class="hidden sm:ml-2 sm:flex sm:space-x-8">
          <!-- Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
          <a
            href="/earn"
            class={segment == 'earn' ? 'border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-gray-50 text-gray-500 hover:border-gray-200 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}>
            Earn
          </a>
          <a
            href="/withdraw"
            class={segment == 'withdraw' ? 'border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-gray-50 text-gray-500 hover:border-gray-200 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}>
            Withdraw
          </a>
          <a
            href="/faq"
            class={segment == 'faq' ? 'border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-gray-50 text-gray-500 hover:border-gray-200 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}>
            FAQ
          </a>
          <a
            href="/discord"
            class={segment == 'discord' ? 'border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium' : 'border-gray-50 text-gray-500 hover:border-gray-200 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'}>
            Discord
          </a>
        </div>
      </div>
      <div class="hidden sm:ml-6 sm:flex sm:items-center">
        <button
          on:click={authAction}
          type="button"
          class="relative inline-flex items-center px-4 py-2 border
          border-transparent text-sm font-medium rounded-md text-gray-50
          bg-blue-500 shadow-sm hover:bg-blue-600 focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">

          <svg
            class="-ml-1 mr-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1
              0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
          <span>{user ? 'Logout' : 'Link account'}</span>
        </button>
      </div>
      <div class="-mr-2 flex items-center sm:hidden">
        <!-- Mobile menu button -->
        <button
          on:click={toggle}
          class="inline-flex items-center justify-center p-2 rounded-md
          text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none
          focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg
            class="{open ? 'hidden' : 'block'} h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg
            class="{open ? 'block' : 'hidden'} h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
  <div class="{open ? 'block' : 'hidden'} sm:hidden">
    <div class="pt-2 pb-3 space-y-1">
      <!-- Current: "bg-blue-50 border-blue-500 text-blue-600", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
      <a
        href="/earn"
        class="bg-blue-50 border-blue-500 text-blue-600 block pl-3 pr-4 py-2
        border-l-4 text-base font-medium">
        Earn
      </a>
      <a
        href="/withdraw"
        class="border-transparent text-gray-500 hover:bg-gray-50
        hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 text-base
        font-medium">
        Withdraw
      </a>
      <a
        href="/faq"
        class="border-transparent text-gray-500 hover:bg-gray-50
        hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2
        border-l-4 text-base font-medium">
        FAQ
      </a>
      <a
        href="/discord"
        class="border-transparent text-gray-500 hover:bg-gray-50
        hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2
        border-l-4 text-base font-medium">
        Discord
      </a>
      <div class="mx-3">
        <button
          on:click={authAction}
          type="button"
          class="relative inline-flex items-center px-4 py-2 border
          border-transparent text-md font-medium rounded-md text-gray-50
          bg-blue-500 shadow-sm hover:bg-blue-600 focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full">

          <span class="-ml-1">{user ? 'Logout' : 'Link account'}</span>
          <svg
            class="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1
              0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

{#if showLinkModal}
  <LinkModal
    on:update={update}
    on:error={e => {
      error = e.detail;
    }} />
{/if}

{#if error}
  <ErrorModal
    {error}
    on:close={() => {
      error = null;
    }} />
{/if}
