<template>
<div class="eatery">
<v-row>
  <v-col cols="12">
    <v-btn x-large style="float: left;" @click="openEateryContent">Jídelna</v-btn>
  </v-col>
</v-row>
</div>
</template>

<script>

export default {
  name: 'Eatery',
  components: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    openEateryContent() {
      this.$store.commit('eatery', true)
    }
  }
}

</script>

<style scoped>
.header {
  background-color: blue
}
</style>
