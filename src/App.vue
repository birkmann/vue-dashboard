<template>
  <v-app>
    <div class="page">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
.page {
  .wrapper {
    display: flex;
    .sidebar {
      width: 200px;
      position: fixed;
      height: 100%;
    }
    .content {
      flex: 0 0 calc(100% - 200px);
      margin-left: 240px;
    }
  }
}
</style>
