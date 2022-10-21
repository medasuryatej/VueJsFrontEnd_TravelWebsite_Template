<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen"></BlogPost>
    <BlogPost
      v-for="(post, index) in sampleBlogPost"
      :key="index"
      :post="post"
    ></BlogPost>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>My Travel Vlog</h3>
        <div class="blog-cards">
          <BlogCard
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>The journey of a 1000 miles begins with a single step!</h2>
        <router-link class="router-button" :to="{name: 'Login'}">
          RESERVE on InfinityTravel <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCard from "../components/BlogCard";
import Arrow from "../assets/Icons/arrow-right-light.svg";
export default {
  name: "Home",
  components: { BlogPost, BlogCard, Arrow },
  data() {
    return {
      welcomeScreen: {
        title: "VOYAGER!",
        blogPost:
          "My Goal is to run out of pages in my Passport. To Infinity & Beyond",
        welcomeScreen: true,
        photo: "infinity_travel",
      },

      sampleBlogPost: [
        {
          title: "A Happy Customer is a returning Customer!",
          blogHTML: "Check out our hospitatlity!",
          // blogCoverPhoto: "beautiful-stories",
          blogCoverPhoto: "customer"
        },
        {
          title: "You Only Live Once!",
          blogHTML: "It is time to STRIKE OUT this place from your todo list!",
          blogCoverPhoto: "explore_place",
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },

    user() {
      return this.$store.state.user;
    }
  },
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
