<template>
  <div id="app">
    <h2>User list</h2>
    <router-link v-bind:to="{path: '/add'}" exact>
      <button type="button" class="btn success add">Add user</button>
    </router-link>
    <UserList/>
    <modal name="confirm-removal">
      Confirm removal of {{ idToRemove }}
    </modal>
    <modal name="error">
      {{ errorMessage }}
      <button>OK</button>
    </modal>
  </div>
</template>

<script>
import UserList from '../components/UserList'

export default {
  name: 'ListView',
  components: {
    UserList
  },
  data () {
    return {
      errorMessage: null,
      idToRemove: null
    }
  }
}
</script>

<style>
.add {
  float: right;
  margin: -28px 0;
}
</style>
