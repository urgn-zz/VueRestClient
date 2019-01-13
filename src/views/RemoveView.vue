<template>
  <div>
    <h2>Remove user #{{ id }}</h2>
    <div v-if="loading">
      Loading...
    </div>
    <div v-else>
      Are you sure?
      <button v-on:click="remove">Yes</button>
      <router-link :to="{path: '/'}" exact>
        <button>No</button>
      </router-link>
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
