<template>
  <tr>
    <td>
      {{ user.id }}
    </td>
    <td>
      {{ user.login }}
    </td>
    <td>
      {{ user.password }}
    </td>
    <td>
      <router-link :to="{ path: `/edit/${user.id}` }" exact>
        <button type="button" class="btn btn-primary w-100">Add user</button>
      </router-link>
    </td>
    <td>
      <button v-on:click="remove">remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'UserItem',
  props: ['user'],
  methods: {
    remove: function (event) {
      debugger;
      alert("remove " + this.user.id);
    },
    edit: function (event) {
      alert("update " + this.user.id);
    }
  }
}
</script>

<style>

</style>
