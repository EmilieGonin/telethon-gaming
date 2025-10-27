<template>
  <footer class="ftr">
    <div class="container">
      <small>© {{ new Date().getFullYear() }} Téléthon Gaming — Tous droits réservés</small>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.ftr { border-top: 1px solid var(--line); padding: 1rem 0; margin-top: 2rem; color: var(--muted); }
</style>