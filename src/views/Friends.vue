<template>
  <div class="container">
    <div class="mb-3 text-center">
      <ButtonControls />
    </div>
    <div class="row">
      <div class="col">
        <AllFriends :friends="friends" @delete="deleteFriend" />
      </div>
      <div class="col">
        <OnlineFriends :friends="friends" />
      </div>
    </div>
  </div>
</template>

<script>
import AllFriends from "@/components/AllFriends";
import OnlineFriends from "@/components/OnlineFriends";
import ButtonControls from "@/components/ButtonControls";
export default {
  name: "Friends",
  components: {
    AllFriends,
    OnlineFriends,
    ButtonControls
  },
  data() {
    return {
      title: "My another Vue app, yoo",
      friends: [
        { name: "Mario", online: true },
        { name: "Luigi", online: false },
        { name: "Toad", online: true },
        { name: "Bowser", online: false }
      ]
    };
  },
  methods: {
    deleteFriend(payload) {
      console.log(payload);
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name;
      });
    }
  }
};
</script>

<style>
</style>