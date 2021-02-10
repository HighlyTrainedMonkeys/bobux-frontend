<script>
  import LinkModal from "../components/LinkModal.svelte";
  import {goto} from "@sapper/app";

  const update = () => {
    goto("/earn");
  };
</script>
<svelte:head>
  <title>Bobux.GG - Link Account</title>
</svelte:head>

<LinkModal
  on:update={update}
/>