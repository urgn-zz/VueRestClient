<template>
  <div id="app">
    <h2>Edit user #{{ id }}</h2>
    <router-link :to="{path: '/'}" exact>
      <button class="btn default on-top">Back</button>
    </router-link>
    <div v-if="loading">
      Loading...
    </div>
    <UserEditForm v-else v-bind:userData="user" v-on:submited="updateUserData"/>
    <modal name="confirmation">
      <p class="message">User data was edited</p>
      <div class="modal-controls">
      <button v-on:click="hideConfirm" class="btn default">Ok</button>
      </div>
    </modal>
    <modal name="error">
      <p class="message">{{ errorMessage }}</p>
      <div  class="modal-controls">
      <button v-on:click="hideError" class="btn default">OK</button>
      </div>
    </modal>
  </div>
</template>

<script>
import UserEditForm from '../components/UserEditForm'
import UserModel from '../models/UserModel'

export default {
  name: 'EditView',
  components: {
    UserEditForm
  },
  data () {
    return {
      loading: true,
      id: this.$route.params.id,
      user: null,
      errorMessage: null
    }
  },
  mounted () {
    this.fetchUserData()
  },
  methods: {
    updateUserData: function (attr) {
      this.loading = true
      UserModel.updateAttributes(this.id, attr)
        .then((user) => {
          this.user = user
          this.loading = false
          this.$modal.show('confirmation')
        })
        .catch((e) => {
          this.errorMessage = e.message
          this.$modal.show('error')
        })
    },
    hideError: function () {
      this.$modal.hide('error')
      this.errorMessage = null
    },
    fetchUserData: function () {
      this.loading = true
      UserModel.fetchRecord(this.id)
        .then((user) => {
          this.user = user
          this.loading = false
        })
        .catch((e) => {
          this.errorMessage = e.message
          this.$modal.show('error')
        })
    },
    hideConfirm: function () {
      this.$modal.hide('confirmation')
    }
  }
}
</script>
