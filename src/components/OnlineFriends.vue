<template>
  <div id="online-friends">
    <div class="card">
      <div class="card-header bg-dark text-white">Online Friends</div>
      <ul class="list-group list-group-flush" v-for="(friend, index) in friends" :key="index">
        <li class="list-group-item" v-if="friend.online">{{ friend.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineFriends",
  props: ["friends"],
  data() {
    return {};
  }
};
</script>

<style>
</style>