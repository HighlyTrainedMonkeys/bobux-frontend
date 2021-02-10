<script>
  import LinkModal from "../components/LinkModal.svelte";
  import {goto} from "@sapper/app";

  const update = () => {
    goto("/earn");
  };
</script>


<LinkModal
  on:update={update}
/>