<template>
  <main id="document">
    <p>GET test</p>
    <p>서버상태: {{ serverStatus }}</p>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  asyncData({ store }) {
    store.commit('updateTitle', '메인 페이지')
  },
  data() {
    return {
      serverStatus: '',
    }
  },
  mounted() {
    this.$axios.get('/api/sttl/v1/ccpsvc/tmap/status').then((res: any) => {
      this.serverStatus = res.resultMessage
    })

    this.$axios.get('/api/member/v1/my/info').then((res: any) => {
      console.log(res)
    })

    console.log(process.env.TEST_CD)
  },
})
</script>
