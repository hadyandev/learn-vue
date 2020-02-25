<template>
  <div id="blogs" class="container">
    <div class="mb-3 text-center">
      <ButtonControls />
    </div>
    <div class="row mt-5">
      <div class="col">
        <h2>{{ blogTitle }}</h2>
      </div>
      <div class="col">
        <button class="btn btn-dark text-right" @click="changeTitle">Change Title</button>
      </div>
    </div>
    <input type="text" class="form-control mt-3" placeholder="Search" v-model="searchTerm" />
    <div class="card mt-3" v-for="post in filteredPosts" :key="post.id">
      <div class="card-header bg-dark text-white">{{ post.title }}</div>
      <div class="card-body">{{ post.body | snippet }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ButtonControls from "@/components/ButtonControls";
export default {
  name: "Blogs",
  components: {
    ButtonControls
  },
  data() {
    return {
      blogTitle: "Blogs",
      posts: [],
      searchTerm: ""
    };
  },
  methods: {
    changeTitle() {
      this.blogTitle = "Amazing Blog Site";
    }
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post => {
        return post.title.match(this.searchTerm);
      });
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response);
        this.posts = response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style></style>
