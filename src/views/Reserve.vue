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
          <button>Submit</button>
        </form>
      </div>
    </div>
    <div class="right">
      No Results Yet
    </div>
  </div>
</template>

<script>
export default {
  name: "Reserve",
  data() {
    return {
      sourceCity: "",
      destinationCity: "",
    };
  },
  methods: {
    formSubmitted() {
      console.log(this.sourceCity);
      console.log(this.destinationCity);
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
  }
}
</style>
