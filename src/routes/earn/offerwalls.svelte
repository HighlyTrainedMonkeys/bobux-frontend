<script>
  import { onMount } from "svelte";
  import config from "../../config";
  import ErrorModal from "../../components/ErrorModal.svelte";
  import Success from "../../components/Success.svelte";
  import Loader from "../../components/Loader.svelte";

  let loaded = false;
  let error;
  let selected = "adgate";
  let cache = new Map();
  cache.set("adgate", []);
  cache.set("ayetstudios", []);

  let loadOffers = () => {};

  onMount(() => {
    //have to define it in here so the compiler doesnt throw stupid errors
    loadOffers = async () => {
      let name = selected;
      let cached = cache.get(name);

      if (cached.length > 0) return;

      let result = await fetch(
        `${config.scheme}://${config.api}/api/v1/offerwall/${name}`,
        {
          headers: {
            username: localStorage.getItem("roblox-user")
          }
        }
      );

      let json = await result.json();

      if (json.status == "error") return (error = json.error);

      cache.set(name, json.result.offers);
      loaded = true;
    };

    loadOffers();
  });
</script>

{#if !loaded}
  <Loader />
{:else}
  <div class="pt-16 mx-4">
    <div class="sm:hidden">
      <label for="tabs" class="sr-only">Select an offerwall</label>
      <select
        on:blur={loadOffers}
        bind:value={selected}
        id="tabs"
        name="tabs"
        class="block w-full focus:ring-indigo-500 focus:border-indigo-500
        border-gray-300 rounded-md">
        <!-- <option selected>Offertoro</option> -->
        <option selected>AdGate</option>
        <option>AyeTStudios</option>
        <!-- <option>KiwiWall</option> -->
      </select>
    </div>
    <div class="hidden sm:block">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex" aria-label="Tabs">
          <!--change width to 1/x-->
          <!-- <div
            on:click={() => {
              selected = 'offertoro';
            }}
            class="{selected.toLowerCase() == 'offertoro' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            cursor-pointer w-1/4 py-4 px-1 text-center border-b-2 font-medium
            text-sm">
            Offertoro
          </div> -->
          <div
            on:click={() => {
              selected = 'adgate';
              loadOffers();
            }}
            class="{selected.toLowerCase() == 'adgate' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            cursor-pointer w-1/2 py-4 px-1 text-center border-b-2 font-medium
            text-sm">
            AdGate
          </div>
          <div
            on:click={() => {
              selected = 'ayetstudios';
              loadOffers();
            }}
            class="{selected.toLowerCase() == 'ayetstudios' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            cursor-pointer w-1/2 py-4 px-1 text-center border-b-2 font-medium
            text-sm">
            AyeTStudios
          </div>
          <!-- <div
            on:click={() => {
              selected = 'kiwiwall';
            }}
            class="{selected.toLowerCase() == 'kiwiwall' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            cursor-pointer w-1/4 py-4 px-1 text-center border-b-2 font-medium
            text-sm">
            KiwiWall
          </div> -->
        </nav>
      </div>
    </div>

    <div
      class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y
      divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px mt-8 mb-14">
      <!-- offers go here -->
        {#each cache.get(selected).offers as offer}
          <div
            class="relative group bg-white p-6 focus-within:ring-2
            focus-within:ring-inset focus-within:ring-indigo-500">
            <div>
              <img src={offer.icon} alt="" />
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-medium">
                <a href={offer.url} class="focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true" />
                  {offer.name}
                </a>
              </h3>
              <p class="mt-2 text-sm text-gray-500">{offer.description}</p>
              <p class="mt-2 text-md text-gray-700 font-medium">
                Reward:
                <b class="text-green-500">R${offer.reward}</b>
              </p>
            </div>
            <span
              class="pointer-events-none absolute top-6 right-6 text-gray-300
              group-hover:text-gray-400"
              aria-hidden="true">
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000
                  2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19
                  4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414
                  16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        {/each}
    </div>

  </div>
{/if}
