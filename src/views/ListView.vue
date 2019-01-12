<template>
  <div id="app">
    <router-link v-bind:to="{path: '/add'}" exact>
      <button type="button" class="btn btn-primary w-100">Add user</button>
    </router-link>
    <UserList/>
  </div>
</template>

<script>
import UserList from '../components/UserList'

export default {
  name: 'ListView',
  components: {
    UserList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
