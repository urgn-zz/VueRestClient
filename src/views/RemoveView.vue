<template>
  <div>
    <p><b>{{ id }}</b></p>
    <router-link :to="{path: '/'}" exact>
      <button>back</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "EditView",
    data () {
      return {
        id: this.$route.params.id
      }
    }
  }
</script>
