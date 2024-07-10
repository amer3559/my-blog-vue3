<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary box-shadow-dark">
    <div class="container-fluid">
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
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'LandingPage' }"
              class="nav-link"
              aria-current="page"
              >Posts</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              :to="{ name: 'DashboardPage' }"
              class="nav-link"
              aria-current="page"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/test" class="nav-link">Test</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
