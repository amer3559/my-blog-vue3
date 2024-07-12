<template>
  <AppNav />
  <router-view />
  <AppFooter />
</template>

<script>
import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppNav,
    AppFooter,
  },
};
</script>

<style lang="scss"></style>
