<template>
  <div class="formContainer">
    <div class="formWrapper">
      <span class="header">Contact Support</span>
      <span class="email">Email: Support@infinitytravel.com</span>
      <span class="phone"
        >phone: 800-555-5555 <i class="nav-icon fas fa-phone"></i
      ></span>
      <span class="time">M-F 8:00AM - 5:00 PM EST</span>
      <div class="statusWrapper" v-show="status">
        <span class="status">Success: We will reach out to you asap.</span>
        <span class="status">New Case No: {{ caseNumber }}</span>
      </div>

      <form @submit.prevent="formSubmitted" ref="contactForm">
        <label>Email</label>
        <input type="email" placeholder="jonhdoe@gmail.com" />
        <label>Subject</label>
        <input type="text" placeholder="issue subject" />
        <label>Issue severity</label>
        <select name="severity" id="severity">
          <option class="option" value="High">High</option>
          <option class="option" value="Medium">Medium</option>
          <option class="option" value="Low">Low</option>
        </select>
        <label>Description</label>
        <textarea placeholder="Briefly describe your concern" rows="2" />
        <label>Case No:</label>
        <input type="text" placeholder="reference no: if any" />
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Support",
  data() {
    return {
      status: false,
    };
  },
  methods: {
    formSubmitted() {
      this.status = true;
      this.$refs.anyName.reset();
    },
  },
  computed: {
    caseNumber() {
      return Math.floor(Math.random() * 1000000000);
    },
  },
};
</script>

<style lang="scss" scoped>
.formContainer {
  background-color: #a7bcff;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .formWrapper {
    background-color: #fff;
    padding: 30px 60px;
    border-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 450px;

    .statusWrapper {
      display: flex;
      flex-direction: column;
      // gap: 5px;
      background-color: rgba(0, 128, 0, 0.445);
      padding: 10px;
      border-radius: 10px;
      .status {
        font-weight: bold;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;

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

      textarea {
        border: 1px solid #ccc;
        display: inline-block;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 10px;
      }

      button {
        font-weight: bold;
      }
    }
  }
}
</style>
