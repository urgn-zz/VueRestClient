<template>
  <tr class="row-user">
    <td>
      {{ user.id }}
    </td>
    <td>
      {{ user.login }}
    </td>
    <td>
      {{ user.email }}
    </td>
    <td class="col-controls">
      <div class="record-controls">
        <router-link v-bind:to="{ path: `/edit/${user.id}` }" exact>
          <button type="button" class="btn info">Edit</button>
        </router-link>
        <router-link v-bind:to="{ path: `/remove/${user.id}` }" exact>
          <button type="button" class="btn danger">Remove</button>
        </router-link>
      </div>
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
.record-controls {
  display: table-cell;
  float: right;
}

.col-controls {
  width: 155px;
}

.row-user:nth-child(even)  {
  background-color: aliceblue;
}
</style>
