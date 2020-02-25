<template>
  <div class="about container">
    <div class="mb-3 text-center">
      <ButtonControls />
    </div>
    <h1 class="text-center">This is an about page</h1>
    <div class="card mt-3">
      <div class="card-header bg-dark text-white">All Friends</div>
      <ul class="list-group list-group-flush" v-for="(friend, index) in friends" :key="index">
        <!-- <router-link class="list-group-item text-dark" :to="`/profile/${friend.name}`"> -->
        <router-link
          class="list-group-item text-dark"
          :to="{ name: 'Profile', params: {friend: friend.name}} "
        >
          <div class="row">
            <div class="col">{{ friend.name }}</div>
            <div class="col text-right" v-if="friend.online">
              <span class="badge badge-success">Online</span>
            </div>
            <div class="col text-right" v-else>
              <span class="badge badge-danger">Offline</span>
            </div>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import ButtonControls from "@/components/ButtonControls";
export default {
  name: "About",
  components: {
    ButtonControls
  },
  data() {
    return {
      friends: [
        { name: "Mario", online: true },
        { name: "Luigi", online: false },
        { name: "Toad", online: true },
        { name: "Bowser", online: false }
      ]
    };
  }
};
</script>
