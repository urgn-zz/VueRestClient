<template>
  <div>
    <form v-on:submit="submitForm">
      <label for="login">Login</label>
      <input type="text" v-model="login" id="login" placeholder="Login"/>
      <label for="email">EMail</label>
      <input type="text" v-model="email" id="email" placeholder="EMail"/>
      <label for="password">Password</label>
      <input v-if="passwordShown" type="text" v-model="password" id="password" placeholder="Password"/>
      <input v-else type="password" v-model="password" id="password" placeholder="Password"/>
      <button class="btn info show-pass" v-on:click="togglePassword">{{ passwordShown ? 'hide' : 'show' }}</button>
      <input type="submit" class="btn success"/>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserEditFrom',
  props: ['userData'],
  data () {
    return {
      passwordShown: false,
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
    },
    togglePassword: function (event) {
      event.preventDefault()
      this.passwordShown = !this.passwordShown
    }
  }
}
</script>

<style>
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=submit] {
    width: 100%;
    margin: 8px 0;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  .show-pass {
    float: right;
    margin-top: -76px;
  }
</style>
