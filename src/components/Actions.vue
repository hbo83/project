<template>
<div class="actions">
<v-row>
  <v-col cols="12">
    <v-btn x-large style="float: left;" @click="openActionContent">Akce</v-btn>
  </v-col>
</v-row>
</div>
</template>

<script>

export default {
  name: 'Actions',
  components: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    openActionContent() {
      this.$store.commit('actions', true)
    }
  }
}

</script>

<style scoped>
.header {
  background-color: blue
}
</style>
