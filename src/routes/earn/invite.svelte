<script>
  import { onMount } from "svelte";
  import config from "../../config";
  import ErrorModal from "../../components/ErrorModal.svelte";
  import Success from "../../components/Success.svelte";
  import Loader from "../../components/Loader.svelte";

  let error;
  let successMessage;
  let info;

  onMount(async () => {
    try {
      let result = await fetch(
        `${config.scheme}://${config.api}/api/v1/user/info`,
        {
          headers: {
            username: localStorage.getItem("roblox-user")
          }
        }
      );

      let json = await result.json();

      if (json.status == "error") return (error = json.error);

      info = json.result;
    } catch (error) {
      console.error(error);
      error =
        "Failed to load invitation info. Make sure you have an internet connection and try again!";
    }
  });
</script>

{#if !info}
  <Loader />
{:else}
  <div class="bg-white">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="space-y-12">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Invite Friends
          </h2>
          <p class="text-xl text-gray-500">
            Invite your friends and receive a percentage of their earnings for
            life.
          </p>
        </div>

        <div>
          <h3 class="text-2xl leading-6 font-medium text-gray-900">Stats</h3>
          <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <dt class="text-sm font-medium text-gray-500 truncate">
                  Referred Users
                </dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">
                  {info.referrals}
                </dd>
              </div>
            </div>

            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <dt class="text-sm font-medium text-gray-500 truncate">
                  Earnings
                </dt>
                <dd class="mt-1 text-3xl font-semibold text-gray-900">
                  R${info.referralEarned.toLocaleString()}
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div
          class="bg-white shadow sm:rounded-lg flex lg:justify-end space-x-16
          lg:space-x-32">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Get your referral link.
            </h3>
            <div class="mt-2 max-w-xl text-sm text-gray-500">
              <p>Make sure your friends sign up using this link.</p>
            </div>
            <form class="mt-5 sm:flex sm:items-center" on:submit|preventDefault={() => {}}>
              <div class="max-w-xs w-full">
                <label for="link" class="sr-only">Link</label>
                <input
                  value="{config.scheme}://{config.domain}/r/{info.username}"
                  type="text"
                  name="link"
                  id="link"
                  class="shadow-sm focus:ring-blue-500 focus:border-blue-500
                  block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="{config.scheme}://{config.domain}/r/{info.username}" />
              </div>
              <button
                on:click={() => {
                  let linkElement = document.querySelector('#link');
                  linkElement.select();
                  document.execCommand('copy');
                }}
                type="submit"
                class="mt-3 w-full inline-flex items-center justify-center px-4
                py-2 border border-transparent shadow-sm font-medium rounded-md
                text-gray-50 bg-blue-500 hover:bg-blue-600 focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0
                sm:ml-3 sm:w-auto sm:text-sm">
                Copy
              </button>
            </form>
          </div>

          <img
            src="http://placehold.it/600x150"
            alt=""
            class="hidden lg:block" />
        </div>
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
