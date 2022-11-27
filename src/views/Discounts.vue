<template>
  <div class="discountsContainer">
    <div class="left">
      <div class="title">
        <p>Add New Discount To DB</p>
      </div>
      <form @submit.prevent="formSubmitted" ref="discountForm">
        <label>Discount Code</label>
        <input
          type="text"
          placeholder="HPYTHANKSGIVING23"
          v-model="discountCode"
        />
        <label>Percentage Discount</label>
        <input type="number" placeholder="10" v-model="percentageDiscount" />
        <label>Valid From Date</label>
        <input type="date" v-model="date" value="2022-12-01" />
        <label>Expiry Date</label>
        <input type="date" v-model="enddate" value="2022-12-01" />
        <label>Applicability</label>
        <input
          type="text"
          v-model="applicability"
          placeholder="all / user@gmail.com"
        />
        <button>Submit</button>
      </form>
    </div>
    <div class="right">
      <div class="title">
        <p>Discounts Table</p>
      </div>
      <div class="discounts__list">
        <table>
          <tr>
            <th>
              DiscountCode
            </th>
            <th>
              DiscountPercentage
            </th>
            <th>
              CreationDate
            </th>
            <th>
              ExpiryDate
            </th>
            <th>
              Utilization
            </th>
            <th>
              Applicability
            </th>
          </tr>
          <tr v-for="(item, index) in discounts" :key="index">
            <td>{{ item.discountCode }}</td>
            <td>{{ item.percentage }}</td>
            <td>{{ timeConverter(item.creationDate) }}</td>

            <td>{{ timeConverter(item.endDate) }}</td>
            <td>{{ item.utilized }}</td>
            <td>{{ item.applicability }}</td>
          </tr>
        </table>

        <p v-if="isError" class="errorMsg">Connection Error</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Discounts",
  data: () => {
    return {
      discounts: [],
      discountCode: "",
      percentageDiscount: 0,
      date: "",
      enddate: "",
      applicability: "",
      err: false,
      errMsg: "",
    };
  },
  methods: {
    async formSubmitted() {
      const data = JSON.stringify({
        discountCode: this.discountCode,
        percentage: this.percentageDiscount,
        creationDate: this.date,
        endDate: this.enddate,
        applicability: this.applicability,
      });

      console.log(data);

      const config = {
        method: "post",
        url: "http://localhost:8080/SPM_InfinityTravel/api/discounts/new",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((res) => {
          console.log(res);
          alert("Discount Code registered successfully");
        })
        .catch((err) => {
          console.log(err);
          this.err = true;
          this.errMsg = err.msg;
        });
    },
    async fetchDiscounts() {
      const config = {
        method: "get",
        url: "http://localhost:8080/SPM_InfinityTravel/api/discounts",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          limit: 15,
        },
      };
      axios(config)
        .then((res) => {
          this.discounts = res.data;
          console.log(this.discounts);
        })
        .catch((err) => {
          console.log(err);
          this.err = true;
          this.errMsg = err.msg;
        });
    },
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
  },
  async mounted() {
    await this.fetchDiscounts();
  },
  computed: {
    isError() {
      return this.err;
    },
  },
};
</script>

<style lang="scss" scoped>
.discountsContainer {
  display: flex;
  flex-direction: row;
  width: 100%;

  .left {
    flex: 1;
    padding: 20px;
    border-right: 3px solid black;

    .title {
      text-align: center;

      p {
        font-size: 18px;
        font-weight: 500;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin: 20px;

      input {
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

  .right {
    flex: 2;
    padding: 20px;
    .title {
      text-align: center;

      p {
        font-size: 18px;
        font-weight: 500;
      }
    }

    .discounts__list {
      table {
        // font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;

        tr:nth-child(even) {
          background-color: #dddddd;
        }

        td,
        th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
      }
    }

    .errorMsg {
      color: red;
    }
  }
}
</style>
