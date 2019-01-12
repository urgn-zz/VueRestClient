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
      <button>edit</button>
    </td>
    <td>
      <button>remove</button>
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
