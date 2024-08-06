<script>
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";
import generalMixins from "@/utils/generalMixins";

export default {
  name: "DashboardLayout",
  mixins: [generalMixins],
  components: {
    AppNav,
    AppFooter,
  },
};
</script>
<template>
  <div class="app-layout dashboard-layout">
    <div class="app-navbar dashboard-navbar">
      <AppNav />
    </div>
    <div class="app-content dashboard-content">
      <div class="app-content-container">
        <div
          class="dashboard-content-container"
          :class="isSidebarOpened ? 'sidebar-opend' : 'sidebar-closed'"
        >
          <div
            class="dashboard-sidebar"
            :class="isSidebarOpened ? 'sidebar-opend' : 'sidebar-closed'"
          >
            sidebar
          </div>
          <router-view
            class="main-content-container"
            :class="isSidebarOpened ? 'sidebar-opend' : 'sidebar-closed'"
          />
        </div>

        <div class="app-footer">
          <AppFooter />
        </div>
      </div>
    </div>
  </div>
</template>
