<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './Loading.vue'

export default {
  components: { Loading },
  proprs: {
    name: { type: String, required: true }
  }
}
</script>
