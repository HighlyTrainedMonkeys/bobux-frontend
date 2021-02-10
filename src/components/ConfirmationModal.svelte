<script>
  import { createEventDispatcher } from "svelte";

  export let group;

  let dispatch = createEventDispatcher();

  const complete = () => {
    dispatch("complete");
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
      class="inline-block align-bottom bg-gray-50 rounded-lg px-4 pt-5 pb-4
      text-left overflow-hidden shadow-xl transform transition-all sm:my-8
      sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline">
      <div>
        <div
          class="mx-auto flex items-center justify-center h-20 w-20 rounded-md">
          <img src={group.image} alt="">
        </div>
        <div class="mt-3 text-center sm:mt-5">
          <h3
            class="text-lg leading-6 font-medium text-gray-900"
            id="modal-headline">
            Join the following group to receive your payout!
          </h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">{group.name}</p>
          </div>
        </div>
      </div>
       <div class="mt-5 sm:mt-6">
        <a
          href="https://roblox.com/groups/{group.gid}"
          class="inline-flex justify-center w-full rounded-md border
            border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base
            font-medium text-gray-50 hover:bg-blue-600 focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">
          Click to view group
        </a>
      </div>
      <div class="mt-5 sm:mt-6">
        <button
          on:click={complete}
          type="button"
          class="inline-flex justify-center w-full rounded-md border
            border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base
            font-medium text-gray-50 hover:bg-blue-600 focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm">
          I've joined the group!
        </button>
      </div>
    </div>
  </div>
</div>
