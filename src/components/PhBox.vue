<template>
  <div
    class="ph"
    :style="{
      width: w || '100%',
      height: h || (ratio ? 'auto' : '240px'),
      aspectRatio: ratio || 'auto',
      borderRadius: radius,
    }"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
defineProps<{ w?: string; h?: string; ratio?: string; radius?: string }>()
</script>

<style scoped>
.ph{
  background: #eaeaea;
  box-shadow: inset 0 0 0 1px #ddd;
}
</style>