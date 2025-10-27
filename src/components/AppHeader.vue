<template>
  <header class="hdr">
    <div class="container row">

      <!-- LOGO -->
      <div class="logo">
        <img src="/src/assets/logo-placeholder.png" alt="Téléthon Gaming" />
      </div>

      <!-- NAV -->
      <nav class="nav">
        <RouterLink :to="{ path:'/' }">Accueil</RouterLink>
        <RouterLink :to="{ path:'/', hash:'#programme' }">Programme</RouterLink>
        <RouterLink :to="{ path:'/', hash:'#streamers' }">Streamers</RouterLink>
        <RouterLink :to="{ path:'/', hash:'#partenaires' }">Partenaires</RouterLink>
        <RouterLink :to="{ path:'/', hash:'#asso' }">Notre asso</RouterLink>
        <RouterLink :to="{ path:'/', hash:'#clips' }">Clips</RouterLink>
      </nav>

      <!-- SOCIAL -->
      <div class="social">
        <a href="#"><img src="/src/assets/placeholder.png" alt="Twitch" /></a>
        <a href="#"><img src="/src/assets/placeholder.png" alt="YouTube" /></a>
        <a href="#"><img src="/src/assets/placeholder.png" alt="Instagram" /></a>
        <a href="#"><img src="/src/assets/placeholder.png" alt="Facebook" /></a>
        <a href="#"><img src="/src/assets/placeholder.png" alt="TikTok" /></a>
        <a href="#"><img src="/src/assets/placeholder.png" alt="X" /></a>
        <a href="#"><img src="/src/assets/placeholder.png" alt="LinkedIn" /></a>
      </div>

    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
.hdr {
  background: #150E2A; /* violet très foncé */
  padding: 0.75rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  height: 48px; /* Ajustable selon ton logo */
  display: block;
}

.nav {
  display: flex;
  gap: 2rem; /* espacement large comme la maquette */
}

.nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 700; /* texte épaissi */
  font-size: 1.05rem;
}

.nav a.router-link-active {
  text-decoration: underline;
}

.social {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.social img {
  height: 22px;
  width: 22px;
  filter: brightness(0) saturate(100%) invert(91%) sepia(81%) saturate(3454%) hue-rotate(7deg) brightness(104%) contrast(105%);
  /* → transforme icône blanche/noire en jaune Téléthon (#FFD100) */
}
</style>