<template>
  <div class="dashbord-page">
    <div class="container">
      <h1>Dashboard</h1>
      <!-- <PostForm /> -->
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{ post.title }}
          <button @click="deletePost(post.id)">Delete</button>
          <button @click="editPost(post.id)">Edit</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import PostForm from "@/components/PostForm.vue";

export default {
  name: "DashboardPage",
  // components: { PostForm },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
  methods: {
    deletePost(postId) {
      this.$store.dispatch("posts/deletePost", postId);
    },
    // editPost(postId) {
    //   // ... implement logic for editing (e.g., open a modal)
    // },
  },
};
</script>
