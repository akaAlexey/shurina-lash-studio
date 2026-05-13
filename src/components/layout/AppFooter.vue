<script setup lang="ts">
import { studio } from '../../data/studio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__inner">
      <a class="app-footer__social" :href="studio.telegram" target="_blank" rel="noreferrer">TG</a>
      <div class="app-footer__center">
        <strong>Shurina Lash Studio — наращивание ресниц в Астрахани</strong>
        <p class="app-footer__demo">Сайт-пример работы. Принадлежит разработчику akaAlexey.</p>
      </div>
      <a class="app-footer__social" :href="studio.vk" target="_blank" rel="noreferrer">VK</a>
      <span>© {{ year }} akaAlexey</span>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--color-border);
  background: var(--color-text);
  color: #fffaf6;
  padding: 2.1rem 0;
}

.app-footer__inner {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.app-footer strong {
  font-size: 1.05rem;
}

.app-footer__center {
  display: grid;
  gap: 0.45rem;
}

.app-footer__social {
  display: inline-flex;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 250, 246, 0.18);
  border-radius: 999px;
  color: #fffaf6;
  font-weight: 900;
}

.app-footer p,
.app-footer span {
  color: rgba(255, 250, 246, 0.74);
}

.app-footer__demo {
  text-align: center;
}

.app-footer span {
  grid-column: 1 / -1;
  font-size: 0.9rem;
}

@media (max-width: 760px) {
  .app-footer__inner {
    grid-template-columns: 44px minmax(0, 1fr) 44px;
  }

  .app-footer__demo {
    text-align: center;
  }
}

@media (max-width: 420px) {
  .app-footer strong {
    font-size: 0.9rem;
  }

  .app-footer__demo {
    font-size: 0.82rem;
  }
}
</style>
