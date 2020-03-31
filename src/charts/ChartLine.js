import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Label",
          backgroundColor: "#42b983",
          data: [5, 8, 3, 7, 3, 7, 8, 9, 5, 4, 6, 9]
        }
      ]
    });
  }
};
