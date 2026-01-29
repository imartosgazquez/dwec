<template>
  <div>
    <div
      class="error alert alert-danger alert-dismissible"
      role="alert"
      v-for="(message, index) in messages"
      :key="index"
    >
      {{ message }}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        @click="remove(index)"
      >
        x
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { store } from '@/store'

const messages = computed(() => store.state.messages)

function remove(index) {
  store.clearMessageAction(index)
}
</script>

<style scoped>
.error {
  background-color: lightcoral;
}
.info {
  background-color: lightgreen;
}
</style>
