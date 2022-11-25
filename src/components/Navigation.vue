<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }"
          >InfinityTravel <i class="fas fa-helicopter"></i> </router-link
        >
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" :to="{ name: 'Home' }">Home <i class="nav-icon fas fa-home"></i></router-link>
          <router-link class="link" :to="{ name: 'Blogs' }">Saved <i class="nav-icon  fas fa-save"></i></router-link>
          <router-link class="link" :to="{name: 'Reserve'}">Reservation <i class="nav-icon  fas fa-plane-departure"></i></router-link>
          <router-link class="link" :to="{ name: 'Support'}">Support <i class="nav-icon  fas fa-phone"></i></router-link>
          <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
            >Login/Register <i class="nav-icon fas fa-user"></i></router-link
          >
        </ul>
        <div v-if="user" @click="toggleProfileMenu" class="profile" ref="profile">
          <span>{{ this.$store.state.profileInitials }}</span>
          <div v-show="profileMenu" class="profile-menu">
            <div class="info">
              <p class="initials">{{ this.$store.state.profileInitials }}</p>
              <div class="right">
                <p>
                  {{ this.$store.state.profileFirstName }}
                  {{ this.$store.state.profileLastName }}
                </p>
                <p>{{ this.$store.state.profileUserName }}</p>
                <p>{{ this.$store.state.profileEmail }}</p>
              </div>
            </div>
            <div class="options">
              <div class="option">
                <router-link class="option" :to="{name: 'Profile'}">
                  <userIcon class="icon" />
                  <p>Profile</p>
                </router-link>
              </div>
              <div class="option">
                <router-link class="option" :to="{name: 'Admin'}">
                  <adminIcon class="icon" />
                  <p>Admin</p>
                </router-link>
              </div>
              <div class="option">
                <router-link class="option" :to="{name: 'Discounts'}">
                  <i class="fas fa-dollar-sign icon"></i>
                  <p>Discounts</p>
                </router-link>
              </div>
              <div @click="signOut" class="option">
                  <signOutIcon class="icon" />
                  <p>SignOut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <menuIcon @click="toggleMobileNav" class="menu-icon" v-show="mobile" />

    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" :to="{ name: 'Home' }">Home <i class="nav-icon fas fa-home"></i></router-link>
        <router-link class="link" :to="{ name: 'Blogs' }">Saved <i class="nav-icon  fas fa-save"></i></router-link>
        <router-link class="link" :to="{name: 'Reserve'}">Reservation <i class="nav-icon  fas fa-plane-departure"></i></router-link>
        <router-link class="link" :to="{ name: 'Support'}">Support <i class="nav-icon fas fa-phone"></i></router-link>
        <router-link v-if="!user" class="link" :to="{ name: 'Login' }"
          >Login/Register <i class="nav-icon fas fa-user"></i></router-link
        >
        
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
import userIcon from "../assets/Icons/user-alt-light.svg";
import adminIcon from "../assets/Icons/user-crown-light.svg";
import signOutIcon from "../assets/Icons/sign-out-alt-regular.svg";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "navigation",
  components: {
    menuIcon,
    userIcon,
    adminIcon,
    signOutIcon,
  },
  data() {
    return {
      profileMenu: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    toggleProfileMenu(e) {
      if (e.target === this.$refs.profile) {
        this.profileMenu = !this.profileMenu;
      }
    },

    signOut() {
      firebase.auth().signOut();
      window.location.reload();
    }
  },

  computed: {
    user() {
      return this.$store.state.user;
    }
  },
};
</script>

<!-- scoped restricts the styles reside and work only for this component -->
<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 99;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      .nav-icon {
        margin-left: 5px;
      }
    }

    ul {
      margin-right: 32px;

      .link {
        margin-right: 32px;
      }

      .link:last-child {
        margin-right: 0px;
      }
    }

    .profile {
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #fff;
      background-color: #303030;

      span {
        pointer-events: none;
      }

      .profile-menu {
        position: absolute;
        top: 60px;
        right: 0;
        width: 300px;
        background-color: #303030;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);

        .info {
          display: flex;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid white;

          .initials {
            position: initial;
            width: 40px;
            height: 40px;
            background-color: #fff;
            color: #303030;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            padding: 15px;
          }

          .right {
            flex: 1;
            margin-left: 24px;

            p {
              margin-bottom: 5px;
            }

            p:nth-child(1) {
              font-size: 18px;
            }
            p:nth-child(2),
            p:nth-child(3) {
              font-size: 14px;
            }

            p:nth-child(3) {
              max-width: 180px;
              overflow-wrap: break-word;
              word-wrap: break-word;
            }
          }
        }

        .options {
          padding: 15px;
          .option {
            text-decoration: none;
            color: #fff;
            display: flex;
            align-items: center;
            margin-bottom: 12px;
          }

          .icon {
            width: 18px;
            height: auto;
          }

          p {
            font-size: 14px;
            margin-left: 12px;
          }

          &:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
  }
  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;

    .link {
      padding: 15px 0;
      color: white;
    }
    .nav-icon {
      margin-left: 5px;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 1s ease;
  }

  .mobile-nav-enter {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0px);
  }

  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }
}
</style>
