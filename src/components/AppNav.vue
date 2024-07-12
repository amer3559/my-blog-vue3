<template>
  <!-- Responsive navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        >My Blog</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li
            class="nav-item"
            v-for="route in visibaleRoutes"
            :key="route.path"
          >
            <router-link :to="{ name: route.name }" class="nav-link"
              >{{ route.meta.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppNav",
  computed: {
    visibaleRoutes() {
      return this.$router.options.routes.filter((route) => route.meta.visibale);
    },
  },
  mounted() {
    console.log(this.visibaleRoutes);
  },
};
</script>
