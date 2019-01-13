<template>
  <tr>
    <td>
      {{ user.id }}
    </td>
    <td>
      {{ user.login }}
    </td>
    <td>
      {{ user.email }}
    </td>
    <td>
      {{ user.password }}
    </td>
    <td>
      <router-link :to="{ path: `/edit/${user.id}` }" exact>
        <button type="button" class="btn btn-primary w-100">Edit</button>
      </router-link>
    </td>
    <td>
      <router-link :to="{ path: `/remove/${user.id}` }" exact>
        <button type="button" class="btn btn-primary w-100">Remove</button>
      </router-link>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'UserItem',
  props: ['user']
}
</script>

<style>

</style>
