<template>
<div class="subjectsContent">
<v-row>
  <v-col cols="12">
    <v-btn x-large style="float: left;" @click="openSubjectsContent">Předměty</v-btn>
  </v-col>
</v-row>
</div>
</template>

<script>

export default {
  name: 'SubjectsContent',
  components: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    openSubjectsContent() {
      this.$store.commit('subjects', true)
    }
  }
}

</script>

<style scoped>
.header {
  background-color: blue
}
</style>
