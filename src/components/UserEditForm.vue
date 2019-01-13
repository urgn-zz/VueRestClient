<template>
  <div>
    <form v-on:submit="submitForm">
      <label for="login">Login</label>
      <input type="text" v-model="login" id="login" placeholder="Login"/>
      <label for="email">EMail</label>
      <input type="text" v-model="email" id="email" placeholder="EMail"/>
      <label>Password</label>
      <input type="password" v-model="password" id="password" placeholder="Password"/>
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
  /* Style inputs */
  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  /* Style the submit button */
  input[type=submit] {
    width: 100%;
    margin: 8px 0;
    cursor: pointer;
  }

  /* Add a background color to the submit button on mouse-over */
  input[type=submit]:hover {
    background-color: #45a049;
  }
</style>
