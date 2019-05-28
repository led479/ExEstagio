<template>
  <b-breadcrumb
    v-if="this.$route.name !== 'index'"
    :items="items"
  ></b-breadcrumb>
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  watch: {
    $route() {
      this.ajustaItems()
    }
  },
  created() {
    this.ajustaItems()
  },
  methods: {
    ajustaItems() {
      this.items = this.$route.path
        .split('/')
        .slice(1)
        .map(item => {
          return { text: this.capitalize(item), to: `/${item}` }
        })
    },
    capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>
