<template>
  <div class="wrapper">
    <Sidebar />
    <div class="content">
      <h2>Dashboard</h2>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
export default {
  name: "Home",
  components: {
    Sidebar
  }
};
</script>

<style scoped></style>
