<script setup lang="ts">
import { studio } from '../../data/studio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__inner">
      <a
        class="app-footer__social app-footer__social--telegram"
        :href="studio.telegram"
        target="_blank"
        rel="noreferrer"
        aria-label="Telegram"
      >
        TG
      </a>
      <div class="app-footer__center">
        <strong>Shurina Lash Studio — наращивание ресниц в Астрахани</strong>
        <p class="app-footer__demo">Сайт-пример работы. Принадлежит разработчику akaAlexey.</p>
      </div>
      <a
        class="app-footer__social app-footer__social--vk"
        :href="studio.vk"
        target="_blank"
        rel="noreferrer"
        aria-label="ВКонтакте"
      >
        VK
      </a>
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
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 10px 22px rgba(0, 0, 0, 0.18);
  transition:
    transform 0.2s ease,
    filter 0.2s ease;
}

.app-footer__social:hover {
  filter: brightness(1.05);
  transform: translateY(-2px);
}

.app-footer__social--telegram {
  background: linear-gradient(135deg, #37b7f4, #178fd0);
}

.app-footer__social--vk {
  background: linear-gradient(135deg, #5c86bd, #416a9b);
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
