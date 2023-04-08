<template>
  <div class="container">
    <h1>My Blog</h1>
    <div class="row">
      <div class="col-md-8">
        <h2 v-if="!selectedPost">All Posts</h2>
        <h2 v-else>{{ selectedPost.title }}</h2>
        <div class="card mb-3" v-for="post in posts" :key="post.id" v-if="!selectedPost || selectedPost.id === post.id">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <a href="#" class="card-link" @click.prevent="selectPost(post)">Read More</a>
          </div>
        </div>
      </div>
      <div class="col-md-4" v-if="selectedPost">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ selectedPost.title }}</h5>
            <p class="card-text">{{ selectedPost.body }}</p>
            <a href="#" class="btn btn-primary" @click.prevent="deselectPost()">Back to List</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: [],
      selectedPost: null,
    };
  },

  mounted() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => (this.posts = response.data))
      .catch(error => console.log(error));
  },

  methods: {
    selectPost(post) {
      this.selectedPost = post;
    },

    deselectPost() {
      this.selectedPost = null;
    },
  },
};
</script>
