<template>
  <div id="app">
    <h2>Remove user #{{ id }}</h2>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      <p class="message">Are you sure?</p>
      <div class="dialog-group">
        <button v-on:click="remove" class="btn danger">Yes</button>
        <router-link :to="{path: '/'}" exact>
          <button class="btn info">No</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import UserModel from '../models/UserModel'

export default {
  name: 'EditView',
  data () {
    return {
      loading: false,
      id: this.$route.params.id
    }
  },
  methods: {
    remove: function () {
      this.loading = true
      UserModel.deleteRecord(this.id)
        .then(() => {
          this.loading = false
          this.$router.push('/')
        })
        .catch(() => {
          this.loading = false
          this.$router.push('/')
        })
    }
  }
}
</script>

<style>
.dialog-group {
  padding: 12px 0 0 0;
  text-align: center;
}
</style>
