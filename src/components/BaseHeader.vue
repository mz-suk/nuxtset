<template>
  <header>
    <h1>{{ title }}</h1>
    <div v-if="isToken">
      토큰 있음 {{ intgMbrNo }}
      <button @click.prevent="delToken()">delete Token</button>
    </div>
    <div v-else>
      토큰 없음
      <input v-model="intgMbrNo" type="tel" placeholder="회원번호" />
      <button @click.prevent="getToken()">get Token</button>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      intgMbrNo: '100503', // Test suk id
      isToken: false,
    }
  },
  fetch() {
    this.isToken = !!localStorage.getItem('token')
  },
  computed: {
    title() {
      return this.$store.state.title
    },
  },
  methods: {
    getToken() {
      this.$axios.$get(`/api/member/v1/login/developers-api/token/${this.intgMbrNo}`).then((res: any) => {
        localStorage.setItem('token', res.accessToken)
        if (res.accessToken) this.$axios.defaults.headers.common['X-AUTH-TOKEN'] = res.accessToken
        this.$fetch()
      })
    },
    delToken() {
      localStorage.removeItem('token')
      this.$fetch()
    },
  },
})
</script>

<style lang="scss" scoped>
header {
  font-size: 1.5rem;
  padding: 1rem;
  border-bottom: 2px solid #111;

  input {
    border: 1px solid #666;
  }
  button {
    padding: 0.2rem 1rem;
    border-radius: 0.5rem;
    background-color: #333;
    color: #fff;
  }
}
</style>
