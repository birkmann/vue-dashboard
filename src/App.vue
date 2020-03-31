<template>
  <v-app>
    <div class="page">
      <div class="wrapper">
        <Sidebar />
        <router-view></router-view>
      </div>
    </div>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
export default {
  name: "App",
  components: {
    Sidebar
  }
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
