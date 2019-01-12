<template>
  <div>
    <p>Users</p>
    <table>
      <UserItem
        v-for="user in users"
        v-bind:user="user"
        :key="user.id"
      />
    </table>
  </div>
</template>

<script>
import UserItem from './UserItem'

export default {
  name: 'UserList',
  components: {
    UserItem
  },
  data () {
    return {
      users: [
        {id: 0, login: 'test', email: 'test2', password: 'pwd'},
        {id: 1, login: 'test', email: 'test2', password: 'pwd'},
        {id: 2, login: 'test', email: 'test2', password: 'pwd'},
        {id: 3, login: 'test', email: 'test2', password: 'pwd'},
        {id: 4, login: 'test', email: 'test2', password: 'pwd'}
      ]}
  }
}
</script>

<style>

</style>
