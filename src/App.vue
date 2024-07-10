<template>
  <AppNav />
  <router-view />
</template>

<script>
import AppNav from "./components/AppNav.vue";

export default {
  name: "App",
  components: {
    AppNav,
  },
};
</script>

<style lang="scss"></style>
