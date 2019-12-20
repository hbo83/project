<template>
<div id="app">
  <Header />
  <v-container fluid><!--fluid znamena ze kontejner zabere celou sirku-->
    <v-row>
      <v-col cols="2">
        <News />
        <Actions />
        <Subjects />
        <School />
        <Eatery />
      </v-col>
      <v-col cols="10">
        <NewsContent v-if="this.$store.state.news"/>
        <ActionsContent v-if="this.$store.state.actions"/>
        <SubjectsContent  v-if="this.$store.state.subjects"/>
        <SchoolContent v-if="this.$store.state.school"/>
        <EateryContent v-if="this.$store.state.eatery"/>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import News from "./components/News.vue";
import Actions from "./components/Actions.vue";
import Subjects from "./components/Subjects.vue";
import School from "./components/School.vue";
import Eatery from "./components/Eatery.vue";

import NewsContent from "./components/content/NewsContent.vue";
import ActionsContent from "./components/content/ActionsContent.vue";
import SubjectsContent from "./components/content/SubjectsContent.vue";
import SchoolContent from "./components/content/SchoolContent.vue";
import EateryContent from "./components/content/EateryContent.vue";

export default {
  name: "app",
  components: {
    Header,
    News,
    Actions,
    Subjects,
    School,
    Eatery,

    NewsContent,
    ActionsContent,
    SubjectsContent,
    SchoolContent,
    EateryContent
  },
  data() {
    return {
      // news: true,
      // actions: false,
      // subjects: false,
      // school: false,
      // eatery: false,

    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
