<script>
export default {
  name: "AppNav",
};
</script>
<template>
  <!-- Responsive navbar-->
  <nav class="navbar-container auth-container" ref="navbarContainer">
    <div class="actions">
      <!-- v-if="!loginStatus" -->
      <router-link class="actions-container" :to="{ name: 'LoginSignup' }">
        <div class="link-with-icon">
          <FontAwesomeIcon icon="sign-in" />
          <!-- <i class="fa fa-sign-in" aria-hidden="true"></i> -->
          <span class="link-title cut-1line">auth</span>
        </div>
      </router-link>
    </div>
    <div class="prand">
      <div class="prand-container">
        <router-link class="link-with-icon" :to="{ name: 'Home' }">
          <img class="icon-lg logo-icon" src="@/assets/img/me.png" alt="" />
          <span class="link-title cut-1line">my blog</span></router-link
        >
      </div>
    </div>
    <div class="settings">
      <div class="settings-container">setings</div>
    </div>
  </nav>
</template>
