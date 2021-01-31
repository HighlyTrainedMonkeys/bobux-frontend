<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status} - {error.message}</title>
</svelte:head>

<div class="w-screen flex flex-col justify-center items-center mt-32">
  <div class="flex flex-col items-center sm:flex-row mx-14">

    <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
      <img
        class="h-60 w-auto"
        src="https://images.rbxcdn.com/9281912c23312bc0d08ab750afa588cc.png"
        alt="" />

    </div>
    <div class="text-center sm:text-left">
      <h4 class="text-2xl font-bold">{status}</h4>
      <p class="mt-1 text-lg">{error.message}</p>

      {#if dev && error.stack}
        <p class="mt-1">{error.stack}</p>
      {/if}
    </div>
  </div>
</div>
