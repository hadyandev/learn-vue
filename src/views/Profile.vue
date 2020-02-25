<template>
  <div class="profile text-center">
    <div class="mb-3">
      <ButtonControls />
    </div>
    <h1>Profile of {{ friendName }}</h1>
    <router-link :to="{ name: 'About' }" class="btn btn-dark">Back to About Page</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonControls from "@/components/ButtonControls.vue";

export default {
  name: "Profile",
  components: {
    ButtonControls
  },
  data() {
    return {
      friendName: this.$route.params.friend
    };
  }
  //   methods: {
  //     updateName() {
  //       this.friendName = this.$route.params.friend;
  //     }
  //   },
  //   watch: {
  //     $route: "updateName"
  //   }
};
</script>
