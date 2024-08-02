<template>
  <div class="app-layout dashboard-layout">
    <div class="app-navbar dashboard-navbar">nav-dashbord</div>
    <div class="app-content dashboard-content">
      <div class="app-content-container">
        <div class="dashboard-content-container">
          <div class="dashboard-sidebar">sidebar</div>
          <router-view class="main-content-container" />
        </div>

        <div class="app-footer">footer</div>
      </div>
    </div>
  </div>
</template>
