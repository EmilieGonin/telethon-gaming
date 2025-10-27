import { createRouter, createWebHistory } from 'vue-router'

// Vitrine (toutes les sections)
const Home = () => import('./views/Home.vue')

// (Optionnel) pages mobiles plus tard
const Infos = () => import('./views/Infos.vue')
const Contact = () => import('./views/Contact.vue')

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/infos', name: 'infos', component: Infos },
    { path: '/contact', name: 'contact', component: Contact },
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) {
      const el = document.querySelector(to.hash) as HTMLElement | null
      if (el) {
        const header = document.querySelector('header.hdr') as HTMLElement | null
        const offset = header ? header.offsetHeight + 8 : 0
        const y = el.getBoundingClientRect().top + window.scrollY - offset
        return new Promise((resolve) => {
          requestAnimationFrame(() => {
            window.scrollTo({ top: y, behavior: 'smooth' })
            resolve({ left: 0, top: y })
          })
        })
      }
    }
    return { top: 0 }
  },
})