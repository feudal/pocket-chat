<script lang="ts">
  import { currentUser, pb } from "./pocketbase";

  let username = "";
  let password = "";

  async function login() {
    await pb.collection("users").authWithPassword(username, password);
  }

  async function signup() {
    try {
      const data = {
        username,
        password,
        passordConfirm: password,
      };

      const createdUser = await pb.collection("users").create(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function logout() {
    pb.authStore.clear();
  }
</script>

{#if $currentUser}
  <p>Signed id as {$currentUser.username}</p>
{:else}
  <form on:submit|preventDefault>
    <input type="text" bind:value={username} placeholder="Username" />
    <input type="password" bind:value={password} placeholder="Password" />

    <button on:click={login}>Login</button>
    <button on:click={signup}>Signup</button>
  </form>
{/if}
