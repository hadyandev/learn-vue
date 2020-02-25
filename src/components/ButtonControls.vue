<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-warning" @click="goBack">Go Back</button>
    <button type="button" class="btn btn-primary" @click="goHome">Redirect to Home</button>
    <button type="button" class="btn btn-info" @click="goForward">Go Forward</button>
  </div>
</template>

<script>
export default {
  name: "ButtonControls",
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goBack() {
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    }
  }
};
</script>

<style>
</style>