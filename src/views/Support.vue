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
        <input
          type="email"
          placeholder="jonhdoe@gmail.com"
          v-model="email"
          required
        />
        <label>Subject</label>
        <input
          type="text"
          placeholder="issue subject"
          v-model="subject"
          required
        />
        <label>Issue severity</label>
        <select name="severity" id="severity" v-model="severity" required>
          <option class="option" value="High">High</option>
          <option class="option" value="Medium">Medium</option>
          <option class="option" value="Low">Low</option>
        </select>
        <label>Description</label>
        <textarea
          placeholder="Briefly describe your concern"
          rows="2"
          v-model="description"
        />
        <label>Case No:</label>
        <input
          type="text"
          placeholder="reference no: if any"
          v-model="caseno"
        />
        <p v-show="error" class="error">Fill the missing Fields</p>
        <button>Submit</button>
      </form>
    </div>
  </div>
</template>

<script type="text/javascript" src="https://smtpjs.com/v3/smtp.js"></script>
<script>
export default {
  name: "Support",
  data() {
    return {
      status: false,
      email: "",
      subject: "",
      severity: "",
      description: "",
      caseno: "",
      error: false,
      newcaseno: "",
    };
  },
  methods: {
    formSubmitted() {
      if (
        this.email === "" ||
        this.description === "" ||
        this.subject === ""
      ) {
        this.error = true;
        return;
      }

      this.status = true;
      if (this.newcaseno === "") {
        const caseno = caseNumber();
      } else {
        const caseno = this.newcaseno;
      }

      const messageBody =
        "<br\> Thank You for Contacting Infinity Travel, our engineers are busy helping those in need.<br\>Rest assured you are in safe hands.<br\>Contact: Support@infinitytravel.com<br\>Phone: 800-555-5555<br\>Call us: M-F *:00AM-5:00PM EST ";

      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "youremail@domain.com",
        Password: "yourpasswordhere",
        To: this.email,
        From: "youremail@domain.com",
        Subject: this.newcaseno + ": " + this.subject + " : " + this.severity,
        Body: this.description + messageBody,
      }).then((message) => alert("Issue registered, check the email."));

      this.email = "";
      this.description = "";
      this.severity = "";
      this.subject = "";
      this.caseno = "";
    },
  },
  computed: {
    caseNumber() {
      if (this.newcaseno === "") {
        this.newcaseno = Math.floor(Math.random() * 1000000000);
      }
      return this.newcaseno;
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

      .error {
        text-align: center;
        color: red;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
}
</style>
