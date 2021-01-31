<script>
  import { onMount } from "svelte";

  let username;

  onMount(() => {
    username = localStorage.getItem("roblox-user");
  });
</script>

<div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-8">
      <div
        class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Hello, {username}
        </h2>
        <p class="text-xl text-gray-500">
          Do some slave work so you can start earning Bobux!
        </p>
      </div>
      <div>
        <h1 class="text-3xl font-medium">Offerwalls</h1>
        <h1 class="text-xl text-gray-700">Complete offers for bobux!</h1>
      </div>
      <ul
        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12
        sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
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
                <h3 class="text-lg leading-6 font-medium">AdGate Media</h3>
                <p class="text-blue-600 text-md">Top Earning Offerwall</p>
              </div>
            </div>
          </div>
        </li>

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
                <h3 class="text-lg leading-6 font-medium">Offertoro</h3>
                <p class="text-blue-600 text-md">Easy offers</p>
              </div>
            </div>
          </div>
        </li>

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
                <h3 class="text-lg leading-6 font-medium">AyeTStudios</h3>
                <p class="text-blue-600 text-md">Big bobux</p>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div>
        <h1 class="text-3xl font-medium">Social</h1>
        <h1 class="text-xl text-gray-700">
          Join our chats or follow our social medias to get paid!
        </h1>
      </div>
      <ul
        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12
        sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
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
                <h3 class="text-lg leading-6 font-medium">YouTube</h3>
                <p class="text-blue-600 text-md">
                  Subscribe to our channel for 1R$
                </p>
              </div>
            </div>
          </div>
        </li>

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
                <h3 class="text-lg leading-6 font-medium">Twitter</h3>
                <p class="text-blue-600 text-md">Share us on Twitter</p>
              </div>
            </div>
          </div>
        </li>

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
                <h3 class="text-lg leading-6 font-medium">Discord</h3>
                <p class="text-blue-600 text-md">Join our Discord server</p>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div>
        <h1 class="text-3xl font-medium">Freebies</h1>
        <h1 class="text-xl text-gray-700">Easiest ways to get free bobux!</h1>
      </div>
      <ul
        class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12
        sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
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
                <h3 class="text-lg leading-6 font-medium">Quests</h3>
                <p class="text-blue-600 text-md">Complete daily quests</p>
              </div>
            </div>
          </div>
        </li>

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
                <h3 class="text-lg leading-6 font-medium">Invite friends</h3>
                <p class="text-blue-600 text-md">
                  Invite your friends to get a percentage of their earnings
                </p>
              </div>
            </div>
          </div>
        </li>

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
                <h3 class="text-lg leading-6 font-medium">Promocodes</h3>
                <p class="text-blue-600 text-md">Redeem a promocode</p>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2">
              <img
                class="object-cover shadow-lg rounded-lg"
                src="https://cdn.discordapp.com/attachments/804782116126195732/805189392841965638/unknown.png"
                alt="" />
            </div>

            <div class="space-y-2">
              <div>
                <h3 class="text-lg leading-6 font-medium">Giveaway</h3>
                <p class="text-blue-600 text-md">Enter our giveaways</p>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2">
              <img
                class="object-cover shadow-lg rounded-lg"
                src="https://cdn.discordapp.com/attachments/804782116126195732/805192282323812412/unknown.png"
                alt="" />
            </div>

            <div class="space-y-2">
              <div>
                <h3 class="text-lg leading-6 font-medium">
                  YouTube competition
                </h3>
                <p class="text-blue-600 text-md">
                  Upload a YouTube video about bobux.gg for a chance to win a
                  weekly prize
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
