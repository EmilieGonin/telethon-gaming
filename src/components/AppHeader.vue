<template>
  <header class="hdr">
    <div class="container wrap">
      <RouterLink class="brand" :to="{ name:'home' }">Téléthon Gaming</RouterLink>

      <nav :class="['nav', { open }]">
        <!-- ancres de la vitrine -->
        <RouterLink :to="{ path:'/', hash:'#programme' }">Programme</RouterLink>
        <RouterLink :to="{ path:'/', hash:'#streamers' }">Streamers</RouterLink>
        <RouterLink :to="{ path:'/', hash:'#partenaires' }">Partenaires</RouterLink>
        <RouterLink :to="{ path:'/', hash:'#asso' }">Notre asso</RouterLink>
        <RouterLink :to="{ path:'/', hash:'#clips' }">Clips</RouterLink>
        <!-- pages dédiées (mobile) -->
        <RouterLink :to="{ name:'infos' }">Infos</RouterLink>
        <RouterLink :to="{ name:'contact' }">Contact</RouterLink>
      </nav>

      <button class="burger" @click="open=!open" aria-label="Menu">
        <span/><span/><span/>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>

<style scoped lang="scss">
.hdr { position: sticky; top: 0; z-index: 50; background: #fff; border-bottom: 1px solid var(--line); }
.wrap { display:flex; align-items:center; justify-content:space-between; gap:1rem; padding:.75rem 0; }
.brand { font-weight: 800; text-decoration: none; color: var(--text); }
.nav { display:flex; gap:.75rem;
  a{ text-decoration:none; color:#222; padding:.5rem .6rem; border-radius:.5rem; }
}
.burger{ display:none; background:transparent; border:0; padding:.5rem;
  span{display:block;width:22px;height:2px;background:#111;margin:4px 0;border-radius:2px;}
}
@media (max-width:900px){
  .nav{ position:absolute; left:0; right:0; top:56px; background:#fff; border-bottom:1px solid var(--line);
    padding:.75rem 1rem; flex-direction:column; align-items:flex-start; display:none;
    &.open{ display:flex; }
  }
  .burger{ display:block; }
}
</style>