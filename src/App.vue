<template>
  <div>
    <AppHeader />
    <main class="main">
      <RouterView />
    </main>
    <StickyDonate label="Faire un don" @click="goDonate" />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import StickyDonate from './components/StickyDonate.vue'
function goDonate(){ window.open('https://example.org/donate','_blank') }
</script>

<style scoped>
.main{ min-height:60vh; }
</style>