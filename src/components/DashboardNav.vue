<script>
import closeSidebarIcon from "@/assets/Icons/xmark.svg";
import openSidebarIcon from "@/assets/Icons/bars-regular.svg";
import settingIcon from "@/assets/Icons/setting.svg";

export default {
  name: "DashboardNav",
  data() {
    return {
      closeSidebarIcon,
      openSidebarIcon,
      settingIcon,
    };
  },
  computed: {
    isSidebarOpened() {
      return this.$store.getters.isSidebarOpened;
    },
  },
  methods: {
    toggleSidebarStatus() {
      this.$store.dispatch("toggleSidebarStatus");
    },
  },
};
</script>
<template>
  <nav class="navbar-container dashboard-container">
    <div class="actions">
      <img
        v-if="isSidebarOpened"
        class="icon-md navbar-icon toggel-sidebar-icon"
        :src="closeSidebarIcon"
        @click="toggleSidebarStatus()"
      />
      <img
        v-else
        class="icon-md navbar-icon toggel-sidebar-icon"
        :src="openSidebarIcon"
        @click="toggleSidebarStatus()"
      />
    </div>
    <div class="page-info">
      <div class="link-with-icon">
        <img class="icon-lg logo-icon" src="@/assets/img/me.png" alt="" />
        <span class="link-title cut-2line">page info</span>
      </div>
    </div>
    <div class="drop-down">
      <div class="dropdown-container">
        <img
          class="icon-md navbar-icon-home settings-icon"
          :src="settingIcon"
        />
      </div>
    </div>
  </nav>
</template>
