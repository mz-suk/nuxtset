<template>
  <div id="container">
    <base-header />

    <main id="main">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head() {
    return {
      title: this.$store.state.title,
    }
  },
})
</script>
