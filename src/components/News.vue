<template>
<div class="news">
  <v-row>
    <v-col cols="12">
      <v-btn x-large style="float: left;" @click="openNewsContent">Aktuality</v-btn>
    </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: 'News',
  components: {

  },
  data() {
    return {

    }
  },
  computed: {

  },
  methods: {
    openNewsContent() {
      this.$store.commit('news', true)
    }
  }
}
</script>

<style scoped>
.header {
  background-color: red
}
</style>
