<template>
  <div class="sticky">
    <button class="donate" @click="$emit('click')">
      {{ label }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<style scoped lang="scss">
.sticky {
  position: sticky;
  bottom: 0;
  z-index: 60;
  backdrop-filter: saturate(130%) blur(6px);
  background: color-mix(in oklab, #ffffff 85%, transparent);
  padding: .5rem clamp(.75rem, 3vw, 1rem) max(env(safe-area-inset-bottom), .5rem);
  border-top: 1px solid var(--line);
  display: grid; place-items: center;
}
.donate {
  width: min(480px, 100%);
  padding: .9rem 1.1rem;
  border-radius: 999px; border: 0;
  font-weight: 700; font-size: clamp(1rem, 2.5vw, 1.05rem);
  background: #111; color: #fff;
  box-shadow: 0 8px 20px rgba(0,0,0,.12);
}
@media (min-width: 1024px) { .sticky { padding-block: .6rem; } }
</style>