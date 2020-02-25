<template>
  <div id="all-friends">
    <div class="card">
      <div class="card-header bg-dark text-white">All Friends</div>
      <ul class="list-group list-group-flush" v-for="(friend, index) in friends" :key="index">
        <li class="list-group-item" @click="unfriend(friend.name)">{{ friend.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllFriends",
  props: ["friends"],
  data() {
    return {};
  },
  methods: {
    unfriend(name) {
      this.$emit("delete", { name }); // passing function name and object to parent component
    }
  }
};
</script>

<style>
</style>