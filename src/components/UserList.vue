<template>
  <div>
    <table>
      <tr>
        <th>
          id
        </th>
        <th>
          login
        </th>
        <th>
          email
        </th>
        <th>
          password
        </th>
      </tr>
      <UserItem
        v-for="user in users"
        v-bind:user="user"
        v-bind:key="user.id"
      />
    </table>
  </div>
</template>

<script>
import UserItem from './UserItem'
import UserModel from '../models/UserModel'

export default {
  name: 'UserList',
  components: {
    UserItem
  },
  data () {
    return {
      loading: false,
      users: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      this.loading = true
      UserModel.fetchAll()
        .then((res) => {
          this.users = res
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<style>

</style>
