import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "NewYork",
        blogCoverPhoto: "newyork",
        blogDate: "Jan 1, 2001",
        airline: "American Airlines",
        passengers: 2,
        price: 215.99,
      },
      {
        blogTitle: "Paris",
        blogCoverPhoto: "paris",
        blogDate: "Feb 14, 2004",
        airline: "Indigo",
        passengers: 4,
        price: 469.95,
      },
      {
        blogTitle: "Rome",
        blogCoverPhoto: "rome",
        blogDate: "June 19, 2019",
        airline: "United Airlines",
        passengers: 3,
        price: 195.00,
      },
      {
        blogTitle: "Las Vegas",
        blogCoverPhoto: "vegas",
        blogDate: "Dec 24, 2022",
        airline: "Alaskan Airlines",
        passengers: 1,
        price: 49.50,
      },
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUserName = doc.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUserName(state, payload) {
      state.profileUserName = payload;
    },
  },
  actions: {
    // dont make changes in actions, if u want to make changes make in mutations
    async getCurrentUser({ commit }) {
      const dataBase = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get();
      commit("setProfileInfo", dbResults);
      commit("setProfileInitials");
      console.log(dbResults);
    },

    async updateUserSettings({ commit, state }) {
      const dataBase = await db.collection("users").doc(state.profileId);
      await dataBase.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUserName,
      });
      commit("setProfileInitials");
    },
  },
  modules: {},
});
