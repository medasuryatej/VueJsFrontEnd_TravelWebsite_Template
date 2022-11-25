<template>
  <div class="reserveContainer">
    <div class="left">
      <div class="formWrapper">
        <span class="title">Search Flights</span>
        <form @submit.prevent="formSubmitted" ref="reserveForm">
          <input
            list="sourceCity"
            name="sourceCity"
            v-model="sourceCity"
            placeholder="select source city"
          />
          <datalist id="sourceCity">
            <option value="Blacksburg">Blacksburg</option>
            <option value="Roanoke">Roanoke</option>
            <option value="Christiansburg">Christiansburg</option>
            <option value="Charlotte">Charlotte</option>
            <option value="Herndon">Herndon</option>
            <option value="Arlington">Arlington</option>
            <option value="Fairfax">Fairfax</option>
            <option value="Radford">Radford</option>
          </datalist>
          <input
            list="destinationCity"
            name="destinationCity"
            v-model="destinationCity"
            placeholder="select destination city"
          />
          <datalist name="destinationCity" id="destinationCity" required>
            <option value="NewYork">NewYork</option>
            <option value="Washington">Washington</option>
            <option value="Seattle">Seattle</option>
            <option value="San Jose">San Jose</option>
            <option value="San Fransisco">San Fransisco</option>
            <option value="Arkansas">Arkansas</option>
            <option value="Cedar Rapids">Cedar Rapids</option>
          </datalist>

          <label for="start">Travel Date: </label>
          <input
            type="date"
            id="start"
            name="trip-start"
            value="2022-12-01"
            min="2022-12-01"
            max="2023-12-01"
            v-model="start_date"
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
    <div class="right">
      <span v-if="apiData">Results found</span>
      <span v-else>No Results Yet</span>
      <div v-for="(result, index) in results" :key="index">
        <!-- <p>{{ result.airline_name }}</p> -->
        <FlightDetail :flightResult="result" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FlightDetail from "../components/FlightDetail.vue";

export default {
  name: "Reserve",
  components: {
    FlightDetail,
  },
  data() {
    return {
      sourceCity: "",
      destinationCity: "",
      start_date: "",
      results: [],
      apiData: false,
    };
  },
  methods: {
    formSubmitted() {
      console.log(this.start_date);
      const config = {
        method: "get",
        url: "http://localhost:8080/SPM_InfinityTravel/api/flights",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          src: this.sourceCity,
          dest: this.destinationCity,
          start_date: this.start_date,
        },
      };

      axios(config)
        .then((res) => {
          console.log(res);
          this.apiData = true;
          this.results = res.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.reserveContainer {
  display: flex;

  .left {
    flex: 1;
    border-right: 1px solid black;

    .formWrapper {
      margin-top: 20px;
      padding: 20px;
      text-align: center;

      span {
        font-size: 24px;
        font-weight: bold;
      }

      form {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 15px;

        input,
        select {
          padding: 15px;
          border: none;
          width: 100%;
          border: 1px solid #ccc;
          display: inline-block;
          border-radius: 4px;
          box-sizing: border-box;
          // margin: 8px 0;

          &::placeholder {
            color: rgb(85, 85, 85);
          }
        }
      }
    }
  }

  .right {
    flex: 1;
    // text-align: center;
    margin-top: 20px;
    padding: 20px;

    span {
      font-size: 24px;
      font-weight: bold;
    }
  }
}
</style>
