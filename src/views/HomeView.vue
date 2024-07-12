<template>
  <div class="home">
    <!-- Page header-->
    <PageHeader />
    <!-- Page content-->
    <template v-if="posts">
      <div class="container">
        <div class="row">
          <!-- Blog entries-->
          <div class="col-lg-8">
            <!-- Featured blog post-->
            <div class="card mb-4">
              <a href="#!"
                ><img
                  class="card-img-top"
                  src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                  alt="..."
              /></a>
              <div class="card-body">
                <div class="small text-muted">January 1, 2023</div>
                <h2 class="card-title">Featured Post Title</h2>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                  laboriosam. Dicta expedita corporis animi vero voluptate
                  voluptatibus possimus, veniam magni quis!
                </p>
                <a class="btn btn-primary" href="#!">Read more →</a>
              </div>
            </div>
            <!-- Nested row for non-featured blog posts-->
            <div class="row">
              <div class="col-lg-6" v-for="post in posts" :key="post.id">
                <!-- Blog post-->
                <div class="card mb-4">
                  <a href="#!"
                    ><img
                      class="card-img-top"
                      src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                      alt="..."
                  /></a>
                  <div class="card-body">
                    <div class="small text-muted">Views : {{ post.views }}</div>
                    <h2 class="card-title h4">{{ post.title }}</h2>
                    <p class="card-text">
                      {{ post.body }}
                    </p>
                    <a class="btn btn-primary" href="#!">Read more →</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- Pagination-->
            <PaginationComponet />
          </div>
          <!-- Side widgets-->
          <SideWidget />
        </div>
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

export default {
  name: "HomeView",
  components: { PageHeader, SideWidget, PaginationComponet },

  data() {
    return {
      posts: this.$store.state.posts.posts || [],
    };
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
