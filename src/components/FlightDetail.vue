<template>
  <div class="main-container">
    <div class="cards">
      <div class="card">
        <div class="card__icon">
          <i class="fas fa-plane-departure"></i>
        </div>
        <!-- <p class="card__exit"><i class="fas fa-times"></i></p> -->
        <div class="card__heading">
          <h2 class="card__title">
            American Airlines
          </h2>
          <h2 class="card__price">
            $ 145.99
          </h2>
        </div>
        <div class="card__details">
          <p class="city">Source</p>
          <div>
            <div class="arrow">
              <div class="line"></div>
              <div class="point"></div>
            </div>
            <p>2 Stops</p>
          </div>
          <p class="city">Destination</p>
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
};
</script>

<style lang="scss" scoped>
.main-container {
  padding: 30px;

  .cards {
    margin: 20px;
    padding: 20px;
    width: 500px;
    min-height: 200px;
    display: grid;
    grid-template-rows: 20px 50px 1fr 50px;
    border-radius: 10px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);

    &:hover {
      box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
      transform: scale(1.01);
    }
  }
}
.cards {
  background: radial-gradient(#1fe4f5, #3fbafe);
}
</style>
