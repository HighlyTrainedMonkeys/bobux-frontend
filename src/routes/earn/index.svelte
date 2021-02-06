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
                src="http://placehold.it/900x600"
                alt="" />
            </div>

            <div class="space-y-2">
              <div>
                <h3 class="text-lg leading-6 font-medium">AdGate Media</h3>
                <p class="text-blue-500 text-md">Top Earning Offerwall</p>
              </div>

              <a
                href="/earn/offerwalls"
                class="inline-flex items-center px-3 py-2 border
                border-transparent shadow-sm text-sm leading-4 font-medium
                rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500">
                Start earning
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2">
              <img
                class="object-cover shadow-lg rounded-lg"
                src="http://placehold.it/900x600"
                alt="" />
            </div>

            <div class="space-y-2">
              <div>
                <h3 class="text-lg leading-6 font-medium">Offertoro</h3>
                <p class="text-blue-500 text-md">Easy offers</p>
              </div>
              <a
                href="/earn/offerwalls"
                class="inline-flex items-center px-3 py-2 border
                border-transparent shadow-sm text-sm leading-4 font-medium
                rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500">
                Start earning
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2">
              <img
                class="object-cover shadow-lg rounded-lg"
                src="http://placehold.it/900x600"
                alt="" />
            </div>

            <div class="space-y-2">
              <div>
                <h3 class="text-lg leading-6 font-medium">AyeTStudios</h3>
                <p class="text-blue-500 text-md">Big bobux</p>
              </div>
              <a
                href="/earn/offerwalls"
                class="inline-flex items-center px-3 py-2 border
                border-transparent shadow-sm text-sm leading-4 font-medium
                rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500">
                Start earning
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
                src="http://placehold.it/900x600"
                alt="" />
            </div>

            <div class="space-y-2">
              <div>
                <h3 class="text-lg leading-6 font-medium">YouTube</h3>
                <p class="text-blue-500 text-md">
                  Subscribe to our channel for 1R$
                </p>
              </div>
              <a
                href="YOUTUBE_URL_HERE"
                class="inline-flex items-center px-3 py-2 border
                border-transparent shadow-sm text-sm leading-4 font-medium
                rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500">
                Subscribe
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2">
              <img
                class="object-cover shadow-lg rounded-lg"
                src="http://placehold.it/900x600"
                alt="" />
            </div>

            <div class="space-y-2">
              <div>
                <h3 class="text-lg leading-6 font-medium">Twitter</h3>
                <p class="text-blue-500 text-md">Share us on Twitter</p>
              </div>
              <a
                href="TWITTER_URL_HERE"
                class="inline-flex items-center px-3 py-2 border
                border-transparent shadow-sm text-sm leading-4 font-medium
                rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500">
                Follow
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2">
              <img
                class="object-cover shadow-lg rounded-lg"
                src="http://placehold.it/900x600"
                alt="" />
            </div>

            <div class="space-y-2">
              <div>
                <h3 class="text-lg leading-6 font-medium">Discord</h3>
                <p class="text-blue-500 text-md">Join our Discord server</p>
              </div>
              <a
                href="DISCORD_URL_HERE"
                class="inline-flex items-center px-3 py-2 border
                border-transparent shadow-sm text-sm leading-4 font-medium
                rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500">
                Join
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
                src="https://cdn.discordapp.com/attachments/804782116126195732/806456257182695424/unknown.png"
                alt="" />
            </div>

            <div class="space-y-2">
              <div>
                <h3 class="text-lg leading-6 font-medium">Quests</h3>
                <p class="text-blue-500 text-md">Complete daily quests</p>
              </div>
              <a
                href="/earn/quests"
                class="inline-flex items-center px-3 py-2 border
                border-transparent shadow-sm text-sm leading-4 font-medium
                rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500">
                View quests
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2">
              <img
                class="object-cover shadow-lg rounded-lg"
                src="https://cdn.discordapp.com/attachments/804782116126195732/805707404750487574/unknown.png"
                alt="" />
            </div>

            <div class="space-y-2">
              <div>
                <h3 class="text-lg leading-6 font-medium">Invite friends</h3>
                <p class="text-blue-500 text-md">
                  Invite your friends to earn bobux
                </p>
              </div>
              <a
                href="/earn/invite"
                class="inline-flex items-center px-3 py-2 border
                border-transparent shadow-sm text-sm leading-4 font-medium
                rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500">
                Start inviting
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </li>

        <li>
          <div class="space-y-4">
            <div class="aspect-w-3 aspect-h-2">
              <img
                class="object-cover shadow-lg rounded-lg"
                src="https://cdn.discordapp.com/attachments/804782116126195732/805549033614999562/unknown.png"
                alt="" />
            </div>

            <div class="space-y-2">
              <div>
                <h3 class="text-lg leading-6 font-medium">Promocodes</h3>
                <p class="text-blue-500 text-md">Redeem a promocode</p>
              </div>
              <a
                href="/earn/promocodes"
                class="inline-flex items-center px-3 py-2 border
                border-transparent shadow-sm text-sm leading-4 font-medium
                rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500">
                Redeem
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
                <p class="text-blue-500 text-md">Enter our giveaways</p>
              </div>
              <a
                href="/earn/giveaway"
                class="inline-flex items-center px-3 py-2 border
                border-transparent shadow-sm text-sm leading-4 font-medium
                rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500">
                Enter
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
                <p class="text-blue-500 text-md">
                  Create a YouTube video for a chance to win bobux
                </p>
              </div>
              <a
                href="/earn/competition"
                class="inline-flex items-center px-3 py-2 border
                border-transparent shadow-sm text-sm leading-4 font-medium
                rounded-md text-gray-50 bg-blue-500 hover:bg-blue-600
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-blue-500">
                Enter
                <svg
                  class="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
