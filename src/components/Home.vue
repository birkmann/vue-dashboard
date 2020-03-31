<template>
  <div class="content">
    <h2>Dashboard</h2>
    <CommitChart />
  </div>
</template>

<script>
import CommitChart from "./CommitChart";
export default {
  name: "Home",
  components: {
    CommitChart
  }
};
</script>

<style scoped></style>
