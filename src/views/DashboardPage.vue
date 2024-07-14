<template>
  <div class="dashbord-page">
    <PageHeader
      :title="'Dashboard'"
      :description="'Dashboard Page CRUD Post'"
    />
    <div class="container">
      <div class="row">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="add-tab"
              data-bs-toggle="tab"
              data-bs-target="#add-tab-pane"
              type="button"
              role="tab"
              aria-controls="add-tab-pane"
              aria-selected="true"
            >
              Add Post
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="posts-tab"
              data-bs-toggle="tab"
              data-bs-target="#posts-tab-pane"
              type="button"
              role="tab"
              aria-controls="posts-tab-pane"
              aria-selected="false"
            >
              posts
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <ProfileComponent />
          </div>
          <div
            class="tab-pane fade show active"
            id="add-tab-pane"
            role="tabpanel"
            aria-labelledby="add-tab"
            tabindex="0"
          >
            <h2 class="m-3">Add Post Component</h2>
            <form @submit.prevent="addPost" class="row m-3">
              <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input
                  class="form-control"
                  placeholder="post title"
                  type="text"
                  id="title"
                  name="title"
                  v-model="post.title"
                />
              </div>
              <div class="mb-3">
                <label for="body" class="form-label">Post Body</label>
                <textarea
                  class="form-control"
                  placeholder="post content"
                  id="body"
                  name="body"
                  v-model="post.body"
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3 d-flex justify-content-center">
                <button type="submit" class="btn btn-primary">Add</button>
              </div>
            </form>
          </div>

          <div
            class="tab-pane fade"
            id="posts-tab-pane"
            role="tabpanel"
            aria-labelledby="posts-tab"
            tabindex="0"
          >
            <h2>posts Component</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import ProfileComponent from "@/components/ProfileComponent.vue";

export default {
  name: "DashboardPage",
  components: { PageHeader, ProfileComponent },
  data() {
    return {
      post: {
        id: null,
        title: null,
        body: null,
        userId: null,
      },
    };
  },
  async created() {
    await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "I am in love with someone.",
        userId: 10,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts;
    },
  },
  methods: {
    addPost() {
      // this.$store.dispatch("posts/addPost", this.post);
      console.log(this.post);
    },
    deletePost(postId) {
      this.$store.dispatch("posts/deletePost", postId);
    },
    // editPost(postId) {
    //   // ... implement logic for editing (e.g., open a modal)
    // },
  },
};
</script>
