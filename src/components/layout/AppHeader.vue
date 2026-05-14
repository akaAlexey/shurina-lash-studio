<script setup lang="ts">
import { ref } from 'vue'

const links = [
  { href: '#about', label: 'О мастере' },
  { href: '#services', label: 'Услуги' },
  { href: '#gallery', label: 'Работы' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
]

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="app-header">
    <div class="container app-header__inner">
      <a class="app-header__logo" href="#hero" @click="closeMenu">Shurina Lash Studio</a>
      <button
        class="app-header__toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-controls="main-navigation"
        aria-label="Открыть меню"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav
        id="main-navigation"
        class="app-header__nav"
        :class="{ 'app-header__nav--open': isMenuOpen }"
        aria-label="Основная навигация"
      >
        <a v-for="link in links" :key="link.href" :href="link.href" @click="closeMenu">
          {{ link.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  z-index: 20;
  top: 0;
  border-bottom: 1px solid rgba(234, 222, 215, 0.72);
  background:
    linear-gradient(
      115deg,
      rgba(255, 248, 244, 0.9),
      rgba(244, 222, 225, 0.9),
      rgba(255, 246, 226, 0.88),
      rgba(247, 229, 236, 0.9),
      rgba(255, 248, 244, 0.9)
    );
  background-size: 320% 320%;
  animation: headerGradientFlow 18s ease-in-out infinite;
  backdrop-filter: blur(18px);
  box-shadow: 0 10px 34px rgba(83, 57, 61, 0.06);
}

.app-header::after {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(143, 90, 104, 0.26), transparent);
}

.app-header__inner {
  position: relative;
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

.app-header__logo {
  flex: 0 0 auto;
  color: var(--color-text);
  font-size: 1.05rem;
  font-weight: 800;
}

.app-header__nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem;
  flex-wrap: wrap;
}

.app-header__nav a {
  border: 1px solid rgba(143, 90, 104, 0.14);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.28);
  color: #715d64;
  font-size: 0.92rem;
  font-weight: 700;
  padding: 0.55rem 0.8rem;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition:
    color 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.app-header__nav a:hover {
  border-color: rgba(143, 90, 104, 0.26);
  color: #7f4658;
  background: rgba(255, 250, 243, 0.58);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    0 8px 18px rgba(127, 70, 88, 0.08);
}

.app-header__toggle {
  display: none;
}

@keyframes headerGradientFlow {
  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

@media (max-width: 900px) {
  .app-header__inner {
    min-height: 64px;
  }

  .app-header__toggle {
    display: inline-flex;
    width: 44px;
    height: 44px;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 999px;
    background: var(--color-surface);
    box-shadow: inset 0 0 0 1px var(--color-border);
    cursor: pointer;
  }

  .app-header__toggle span {
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: var(--color-text);
  }

  .app-header__nav {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    display: none;
    width: auto;
    border: 1px solid var(--color-border);
    border-radius: 22px;
    background: var(--color-bg);
    box-shadow: var(--shadow-soft);
    padding: 0.6rem;
  }

  .app-header__nav--open {
    display: grid;
    gap: 0.25rem;
    align-items: stretch;
    justify-content: stretch;
  }

  .app-header__nav a {
    width: 100%;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-color: rgba(143, 90, 104, 0.16);
    background: rgba(255, 255, 255, 0.52);
    font-size: 0.95rem;
    padding: 0.7rem 0.85rem;
  }
}

@media (max-width: 420px) {
  .app-header__logo {
    font-size: 0.96rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .app-header {
    animation: none;
  }
}
</style>
