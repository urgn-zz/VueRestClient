<template>
  <div id="app">
    <h2>Add user</h2>
    <router-link v-bind:to="{path: '/'}" exact>
      <button class="btn default on-top">back</button>
    </router-link>
    <div v-if="loading">
      Loading...
    </div>
    <UserEditForm v-else v-on:submited="addUser"/>
    <modal name="success" class="modal">
      <p class="message">Added!</p>
      <div class="modal-controls">
      <button v-on:click="backToList" class="btn default">To the list</button>
      </div>
    </modal>
    <modal name="fail">
      <p class="message">{{errorMessage}}</p>
      <div class="modal-controls">
        <button v-on:click="backToList" class="btn default">To the list</button>
        <button v-on:click="tryAgain" class="btn default">Try again</button>
      </div>
    </modal>
  </div>
</template>

<script>
import UserEditForm from '../components/UserEditForm'
import UserModel from '../models/UserModel'

export default {
  name: 'AddView',
  components: {
    UserEditForm
  },
  data () {
    return {
      loading: false,
      errorMessage: null
    }
  },
  methods: {
    addUser: function (attr) {
      this.loading = true
      UserModel.addRecord(attr)
        .then(record => {
          this.$modal.show('success')
        })
        .catch((e) => {
          this.errorMessage = e
          this.$modal.show('fail')
        })
    },
    backToList: function () {
      this.$router.push('/')
    },
    tryAgain: function () {
      this.errorMessage = null
      this.$modal.hide('fail')
      this.loading = false
    }
  }
}
</script>
