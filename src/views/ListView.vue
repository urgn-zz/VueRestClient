<template>
  <div id="app">
    <h2>User list</h2>
    <router-link v-bind:to="{path: '/add'}" exact>
      <button type="button" class="btn success on-top">Add user</button>
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
