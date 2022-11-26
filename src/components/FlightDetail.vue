<template>
  <div class="main-container">
    <div class="cards">
      <div class="card">
        <div class="card-title">
          <div class="card__icon">
            <i class="fas fa-plane-departure"></i>
          </div>
          <!-- <p class="card__exit"><i class="fas fa-times"></i></p> -->
          <div class="card__heading">
            <h2 class="card__title">
              {{ flightResult.airline_name }}
            </h2>
            <h2 class="card__price">$ {{ flightResult.price }}</h2>
          </div>
        </div>
        <div class="card__details">
          <p class="city">{{ flightResult.src }}</p>
          <div>
            <div class="arrow">
              <div class="line"></div>
              <div class="point"></div>
            </div>
            <p>{{ flightResult.num_stops }} Stops</p>
          </div>
          <p class="city">{{ flightResult.dest }}</p>
        </div>
        <div class="card__details__2">
          <p>Num seats available: {{ flightResult.seats }}</p>
          <p>Start Date: {{ timeConverter(flightResult.start_date) }}</p>
          <p>Reach Date: {{ timeConverter(flightResult.reach_date) }}</p>
        </div>
        <div class="card__reserve">
          <form @submit.prevent="reserveFormSubmitted" ref="reserveForm">
            <input
              type="text"
              placeholder="discountCode"
              v-model="discountCode"
            />
            <button>Reserve Tickets</button>
          </form>
          <p v-if="flightResult.saved">Flight Search Saved</p>
          <form v-else @submit.prevent="saveFormSubmitted" ref="saveForm">
            <button>Save Search</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FlightDetail",
  data() {
    return {
      discountCode: "",
    };
  },
  props: ["flightResult"],
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

    async reserveFormSubmitted() {
      console.log(this.discountCode);
      const config = {
        method: "get",
        url: `http://localhost:8080/SPM_InfinityTravel/api/discounts/code/${this.discountCode}`,
        headers: {},
      };

      axios(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data));
          // console.log(this.flightResult.price);
          alert(
            `Booking Successful, ticket price after discount is ${(this
              .flightResult.price *
              (100 - response.data.percentage)) /
              100}`
          );
        })
        .catch((error) => {
          console.log(error);
          alert(`Discount Code: ${this.discountCode} is not valid`);
        });
    },

    async saveFormSubmitted() {
      console.log("save form submitted");
      console.log(this.flightResult);
      const config = {
        method: "get",
        url: `http://localhost:8080/SPM_InfinityTravel/api/flights/save/${this.flightResult.flight_id}/true`,
        headers: {},
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          alert("Flight Search Saved Succesfully");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  padding: 10px;

  .cards {
    margin: 10px;
    padding: 20px;
    width: 500px;
    min-height: 200px;
    // display: grid;
    // grid-template-rows: 20px 50px 1fr 50px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);

    &:hover {
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
      transform: scale(1.01);
    }

    .card {
      display: flex;
      flex-direction: column;
      width: 100%;

      .card-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        // column-gap: 20px;

        .card__heading {
          width: 100%;
          padding: 0 0 0 10px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          // column-gap: 40px;
        }
      }

      .card__details {
        padding-top: 15px;
        display: flex;
        justify-content: space-between;

        .city {
          font-size: 18px;
          font-weight: 500;
        }
      }

      .card__details__2 {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .card__reserve {
        display: flex;
        flex-direction: column;
        width: 100%;
        form {
          width: 100%;
          justify-content: space-between;

          input {
            margin-top: 15px;
            margin-right: 25px;
            padding: 15px;
            border: none;
            width: 200px;
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
  }
}
.cards {
  background: radial-gradient(#1fe4f5, #3fbafe);
}
</style>
