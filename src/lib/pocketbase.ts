import PocketBase from "pocketbase";

import { writable } from "svelte/store";

export const pb = new PocketBase("http://172.232.208.12:7777");

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
  console.log("User changed", auth);
  currentUser.set(pb.authStore.model);
});
