<script lang="ts">
  import Login from "./lib/Login.svelte";
  import Messages from "./lib/Messages.svelte";
  import { currentUser } from "./lib/pocketbase";
</script>

<h1>Pocketchat 444</h1>

<Login />

{#if $currentUser}
  <Messages />
{/if}
