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
        <div>
          <p class="card__apply">
            <a class="card__link" href="#">RESERVE TICKETS</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlightDetail",
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
      // var hour = a.getHours();
      // var min = a.getMinutes();
      // var sec = a.getSeconds();
      var time = date + " " + month + " " + year;
      return time;
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

      .card__apply {
        margin-top: 15px;
        .card__link {
          text-decoration: none;
          background-color: #eeeeee;
          color: #333333;
          padding: 4px 8px 4px 8px;
          border-top: 1px solid #cccccc;
          border-right: 1px solid #333333;
          border-bottom: 1px solid #333333;
          border-left: 1px solid #cccccc;
          border-radius: 5px;
        }
      }
    }
  }
}
.cards {
  background: radial-gradient(#1fe4f5, #3fbafe);
}
</style>
