<script>
  import LinkModal from "../components/LinkModal.svelte";
  import {goto} from "@sapper/app";
  import { onMount } from "svelte";

  const update = () => {
    goto("/earn");
  };

  onMount(() => {
    let user = localStorage.getItem("roblox-user");

    if (user) goto("/earn");
  });
</script>
<svelte:head>
  <title>Bobux.GG - Link Account</title>
</svelte:head>

<LinkModal
  on:update={update}
/>