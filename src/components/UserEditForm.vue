<template>
  <div>
    <form v-on:submit="submitForm">
      <input type="text" v-model="login"/>
      <input type="text" v-model="email"/>
      <input type="password" v-model="password"/>
      <input type="submit"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserEditFrom',
  props: ['userData'],
  data () {
    return {
      login: (this.userData && this.userData.login) || null,
      email: (this.userData && this.userData.email) || null,
      password: (this.userData && this.userData.password) || null
    }
  },
  methods: {
    submitForm: function (event) {
      event.preventDefault()
      this.$emit('submited', {
        login: this.login,
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>
</style>
