<template>
  <div class="container text-center">
    <div class="mb-3 text-center">
      <ButtonControls />
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 class="text-center">Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonControls from "@/components/ButtonControls.vue";

export default {
  name: "Home",
  components: {
    ButtonControls
  }
};
</script>
