<template>
<div class="school">
<v-row>
  <v-col cols="12">
    <v-btn x-large style="float: left;" @click="openSchoolContent">Škola</v-btn>
  </v-col>
</v-row>
</div>
</template>

<script>

export default {
  name: 'School',
  components: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    openSchoolContent() {
      this.$store.commit('school', true)
    }
  }
}

</script>

<style scoped>
.header {
  background-color: blue
}
</style>
