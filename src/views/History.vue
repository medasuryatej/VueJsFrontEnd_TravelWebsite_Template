<template>
  <div class="historyContainer">
    <span class="title">My Saved Searches</span>
    <div class="historyTable">
      <table>
        <tr>
          <th>
            Airline Name
          </th>
          <th>
            Source City
          </th>
          <th>
            Destination City
          </th>
          <th>
            Num Stops
          </th>
          <th>
            Price
          </th>
          <th>
            Start Date
          </th>
          <th>
            Reach Date
          </th>
        </tr>
        <tr v-for="(item, index) in searchResults" :key="index">
          <td>{{ item.airline_name }}</td>
          <td>{{ item.src }}</td>
          <td>{{ item.dest }}</td>
          <td>{{ item.num_stops }}</td>
          <td>$ {{ item.price }}</td>
          <td>{{ timeConverter(item.start_date) }}</td>
          <td>{{ timeConverter(item.reach_date) }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "History",
  data() {
    return {
      searchResults: [],
    };
  },
  methods: {
    timeConverter(UNIX_timestamp) {
      var a = new Date(UNIX_timestamp);
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var time = date + " " + month + " " + year;
      return time;
    },
    async fetchSavedSearches() {
      const config = {
        method: "get",
        url: "http://localhost:8080/SPM_InfinityTravel/api/flights/saved",
        headers: {},
      };

      axios(config)
        .then((response) => {
          //   console.log(JSON.stringify(response.data));
          this.searchResults = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  async mounted() {
    await this.fetchSavedSearches();
  },
};
</script>

<style lang="scss" scoped>
.historyContainer {
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: center;
  .title {
    padding: 20px;
    font-size: 25px;
    font-weight: 500;
  }

  .historyTable {
    padding: 25px;
    width: 100%;
    text-align: center;
    table {
      // font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;

      tr:nth-child(even) {
        background-color: #dddddd;
      }

      td,
      th {
        border: 1px solid #878686;
        text-align: left;
        padding: 8px;
      }
    }
  }
}
</style>
