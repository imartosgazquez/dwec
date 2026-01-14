
<script setup>
defineProps({
  user: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <tr>
    <td>{{ user.name }}</td>
    <td>{{ user.email }}</td>
    <td class="text-end">{{ user.age }}</td>
    <td class="text-end">
      <slot />
    </td>
  </tr>
</template>

<style scoped>
.text-end { text-align: right; }
</style>
