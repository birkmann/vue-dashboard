<template>
  <div class="sidebar">
    <nav>
      <router-link to="/">Dashboard</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/logout">Logout</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss" scoped>
.sidebar {
  background: #eee;
  nav {
    a {
      text-decoration: none;
      color: #333;
      padding: 10px;
      display: block;
    }
  }
}
</style>
