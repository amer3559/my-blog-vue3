<template>
  <div class="landing-page">
    <h1>Post page</h1>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  components: {},
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
  mounted() {
    this.$store.dispatch("posts/fetchPosts");
    console.log(this.posts);
  },
};
</script>
