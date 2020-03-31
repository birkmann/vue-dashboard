<template>
  <div class="content">
    <h2>Dashboard</h2>
    <div class="chart-wrapper">
      <div class="chart">
        <ChartBar />
      </div>
      <div class="chart">
        <ChartLine />
      </div>
    </div>
  </div>
</template>

<script>
import ChartBar from "../charts/ChartBar";
import ChartLine from "../charts/ChartLine";
export default {
  name: "Home",
  components: {
    ChartBar,
    ChartLine
  }
};
</script>

<style lang="scss" scoped>
.chart-wrapper {
  display: flex;
  .chart {
    flex: 0 0 25%;
  }
}
</style>
