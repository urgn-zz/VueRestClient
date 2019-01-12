<template>
  <table>
    <UserItem
      v-for="user in users"
      v-bind:user="user"
      v-bind:key="user.id"
    />
  </table>
</template>

<script>
import UserItem from './UserItem'

export default {
  name: 'UserList',
  components: [
    UserItem
  ],
  data: function () {
    return {
      users: [
        {login: 'test', email: 'test2', password: 'pwd'},
        {login: 'test', email: 'test2', password: 'pwd'}
      ]}
  }
}
</script>

<style>

</style>
