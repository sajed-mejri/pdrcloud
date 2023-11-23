<script setup lang="ts">
/* script */
</script>

<template>
  <header>
    <div class="wrapper d-flex justify-content-between">
      <b-nav>
        <b-nav-item><RouterLink to="/">Home</RouterLink></b-nav-item>
        <b-nav-item>
          <RouterLink to="/about">About</RouterLink>
        </b-nav-item>
      </b-nav>
      <b-nav>
        <b-nav-item>
          <RouterLink to="/login">Login</RouterLink>
        </b-nav-item>
        <b-nav-item>
          <RouterLink to="/login">Logout</RouterLink>
          <b-icon icon="arrow-up"></b-icon>
        </b-nav-item>
      </b-nav>
    </div>
  </header>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <RouterView />
</template>

<style scoped>
/* styles */
</style>
