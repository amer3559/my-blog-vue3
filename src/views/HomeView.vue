<template>
  <div class="home">
    <!-- Page header-->
    <PageHeader
      :title="'Explore the World Through Words'"
      :description="'Wanderlust got you down? Dive into Wanderlust Words, a blog that explores the world through the eyes of writers, poets, and storytellers...'"
    />
    <!-- Page content-->
    <template v-if="posts">
      <div class="container">
        <div class="row">
          <!-- Blog entries-->
          <div class="col-lg-8">
            <!-- Featured blog post-->
            <!-- <PostCard :post="posts[0]" /> -->
          </div>
          <div class="col-lg-4">
            <!-- Side widgets-->
            <SideWidget />
          </div>
        </div>
        <!-- Nested row for non-featured blog posts-->
        <div class="row">
          <div class="col-lg-4" v-for="post in nestedPosts" :key="post.id">
            <!-- Blog post-->
            <!-- <PostCard :post="post" /> -->
          </div>
        </div>
        <!-- Pagination-->
        <PaginationComponet />
      </div>
    </template>
    <template v-else>
      <h1 class="text-error">No Data to show!</h1>
    </template>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import SideWidget from "@/components/SideWidget.vue";
import PaginationComponet from "@/components/PaginationComponet.vue";
// import PostCard from "@/components/PostCard.vue";

export default {
  name: "HomeView",
  components: {
    PageHeader,
    SideWidget,
    PaginationComponet,
    // PostCard,
  },
  data() {
    return {
      posts: this.$store.state.posts.posts || [],
    };
  },
  computed: {
    nestedPosts() {
      return this.posts.slice(1);
    },
  },
  methods: {
    async fetchPosts() {
      await this.$store.dispatch("posts/fetchPosts");
    },
  },
  async created() {
    await this.fetchPosts();
  },
};
</script>

<style></style>
