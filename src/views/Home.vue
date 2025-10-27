<template>
  <!-- HERO -->
  <section id="hero" class="hero">
    <div class="container hero-grid">
      <div class="copy">
        <h1>Téléthon Gaming 2025 — Solidarity</h1>
        <p>Marathon solidaire de 48h — au profit de l’AFM Téléthon.</p>
        <div class="actions">
          <RouterLink :to="{ path:'/', hash:'#programme' }" class="btn">Voir le programme</RouterLink>
          <button class="btn ghost" @click="onDonate">Faire un don</button>
        </div>
      </div>
      <!-- Placeholder visuel hero (arrondi d'après la maquette) -->
      <PhBox ratio="16/10" radius="1rem" />
    </div>
  </section>

  <!-- RÉASSURANCE / PARTENAIRES (cartes) -->
  <section id="reassurance" class="section">
    <div class="container cards">
      <div class="card" v-for="i in 4" :key="i">
        <h3>Réassurance</h3>
        <p>Texte court placeholder aligné maquette.</p>
      </div>
    </div>
  </section>

  <!-- PROGRAMME -->
  <section id="programme" class="section">
    <div class="container">
      <h2>Programme</h2>
      <div class="list-two">
        <article class="event" v-for="i in 2" :key="'ev-'+i">
          <div class="meta">
            <strong>Sam 06 déc 14:00</strong>
            <span>Tournoi Alkya</span>
          </div>
          <a class="btn small ghost" href="#">Voir</a>
        </article>
      </div>
    </div>
  </section>

  <!-- COMMENT ÇA MARCHE (4 étapes) -->
  <section id="how" class="section alt">
    <div class="container steps">
      <div class="step" v-for="i in 4" :key="'s-'+i">
        <PhBox ratio="1/1" radius=".75rem" />
        <h3>Étape {{ i }}</h3>
        <p>Texte placeholder sur 2–3 lignes.</p>
      </div>
    </div>
  </section>

  <!-- LEADERBOARDS -->
  <section id="tops" class="section">
    <div class="container grid-2">
      <div class="panel">
        <h2>Top streamers</h2>
        <ul class="rank">
          <li v-for="i in 6" :key="'ts-'+i">Streamer <b>100€</b></li>
        </ul>
      </div>
      <div class="panel">
        <h2>Top donateurs</h2>
        <ul class="rank">
          <li v-for="i in 6" :key="'td-'+i">Donateur <b>100€</b></li>
        </ul>
      </div>
    </div>
  </section>

  <!-- STREAMERS (grille + filtres) -->
  <section id="streamers" class="section alt">
    <div class="container">
      <div class="headrow">
        <h2>Streamers</h2>
        <div class="filters">
          <button class="chip is-active">Tous</button>
          <button class="chip">Sur place</button>
          <button class="chip">Distance</button>
        </div>
      </div>
      <div class="grid-streamers">
        <div class="card streamer" v-for="i in 18" :key="'st-'+i">
          <PhBox ratio="1/1" radius=".75rem" />
          <div class="s-name">Streamer</div>
          <div class="s-total">100€</div>
        </div>
      </div>
    </div>
  </section>

  <!-- PARTENAIRES -->
  <section id="partenaires" class="section">
    <div class="container grid-4">
      <div class="partner" v-for="i in 8" :key="'p-'+i">
        <PhBox ratio="16/9" radius=".75rem" />
        <div class="p-meta">
          <strong>Partenaire {{ i }}</strong>
          <a href="#" class="link">Lien</a>
        </div>
      </div>
    </div>
  </section>

  <!-- NOTRE ASSO -->
  <section id="asso" class="section alt">
    <div class="container grid-2">
      <div>
        <h2>Notre rôle</h2>
        <p>Texte placeholder.</p>
        <h3>Lien avec le Téléthon Gaming</h3>
        <p>Texte placeholder.</p>
      </div>
      <PhBox ratio="4/3" radius="1rem" />
    </div>
  </section>

  <!-- CLIPS / MEILLEURS MOMENTS -->
  <section id="clips" class="section">
    <div class="container">
      <div class="tabs">
        <button class="chip is-active">Récent</button>
        <button class="chip">Populaire</button>
      </div>
      <div class="grid-clips">
        <PhBox v-for="i in 6" :key="'c-'+i" ratio="16/9" radius="1rem" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PhBox from '@/components/PhBox.vue'
function onDonate(){ window.open('https://example.org/donate', '_blank') }
</script>

<style scoped lang="scss">
:global(html){ scroll-behavior: smooth; }
:global(section[id]){ scroll-margin-top: 72px; } /* compense le header sticky */

.hero{ padding: clamp(2rem,6vw,5rem) 0; background:#fafafa; }
.hero-grid{ display:grid; gap:2rem; grid-template-columns:1.1fr 0.9fr; align-items:center; }
.copy h1{ margin:0 0 .75rem; font-size:clamp(1.8rem,4.5vw,3rem); line-height:1.1; }
.copy p{ margin:0 0 1rem; color:var(--muted); font-size:clamp(1rem,2vw,1.2rem); }
.actions{ display:flex; gap:.75rem; flex-wrap:wrap; margin-top:.5rem; }
.btn{ background:#111;color:#fff;border:0;padding:.75rem 1rem;border-radius:.6rem;text-decoration:none; }
.btn.ghost{ background:transparent;color:#111;border:1px solid #111; }

.section{ padding: clamp(2rem,6vw,4rem) 0; }
.section.alt{ background:#fafafa; }

.cards{ display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; }
.card{ padding:1rem; border:1px solid var(--line); border-radius:.75rem; background:#fff; }

.list-two{ display:grid; grid-template-columns:repeat(2,1fr); gap:1rem; }
.event{ display:flex; align-items:center; justify-content:space-between; gap:1rem;
  padding:1rem;border:1px solid var(--line); border-radius:.75rem; background:#fff;
}
.btn.small{ padding:.5rem .75rem; font-size:.9rem; }

.steps{ display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; text-align:center; }
.step h3{ margin:.75rem 0 .25rem; }

.grid-2{ display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
.panel{ padding:1rem; border:1px solid var(--line); border-radius:.75rem; background:#fff; }
.rank{ list-style:none; margin:0; padding:0; display:grid; gap:.5rem; }
.rank li{ display:flex; justify-content:space-between; border:1px solid var(--line); border-radius:.5rem; padding:.6rem .75rem; }

.headrow{ display:flex; align-items:center; justify-content:space-between; gap:1rem; }
.filters{ display:flex; gap:.5rem; }
.chip{ border:1px solid #111; background:transparent; padding:.4rem .7rem; border-radius:999px; }
.chip.is-active{ background:#111; color:#fff; }

.grid-streamers{ display:grid; grid-template-columns:repeat(6,1fr); gap:1rem; }
.streamer{ padding: .75rem; border:1px solid var(--line); border-radius:.75rem; background:#fff; text-align:center; }
.s-name{ margin:.5rem 0 .25rem; font-weight:600; }
.s-total{ color:var(--muted); }

.grid-4{ display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; }
.partner{ padding:1rem; border:1px solid var(--line); border-radius:.75rem; background:#fff; }
.p-meta{ display:flex; align-items:center; justify-content:space-between; margin-top:.5rem; }
.link{ color:#111; text-decoration:underline; }

.tabs{ display:flex; gap:.5rem; margin-bottom:1rem; }
.grid-clips{ display:grid; grid-template-columns:repeat(3,1fr); gap:1rem; }

@media (max-width: 1100px){
  .hero-grid{ grid-template-columns:1fr; }
  .grid-2{ grid-template-columns:1fr; }
  .grid-4{ grid-template-columns:repeat(2,1fr); }
  .grid-streamers{ grid-template-columns:repeat(3,1fr); }
}
@media (max-width: 700px){
  .cards{ grid-template-columns:1fr 1fr; }
  .steps{ grid-template-columns:1fr 1fr; }
  .grid-4{ grid-template-columns:1fr; }
  .grid-streamers{ grid-template-columns:repeat(2,1fr); }
  .grid-clips{ grid-template-columns:1fr; }
}
</style>