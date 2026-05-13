<script setup lang="ts">
import { ref } from 'vue'

const links = [
  { href: '#about', label: 'О мастере' },
  { href: '#services', label: 'Услуги' },
  { href: '#gallery', label: 'Работы' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
]

const emit = defineEmits<{
  book: []
}>()

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}

function openBooking() {
  closeMenu()
  emit('book')
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
        <button class="app-header__book" type="button" @click="openBooking">Запись</button>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  z-index: 20;
  top: 0;
  border-bottom: 1px solid rgba(234, 222, 215, 0.8);
  background: rgba(255, 250, 246, 0.86);
  backdrop-filter: blur(18px);
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
  border-radius: 999px;
  color: var(--color-text-muted);
  font-size: 0.92rem;
  font-weight: 700;
  padding: 0.55rem 0.8rem;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
}

.app-header__book {
  min-height: 40px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-primary));
  color: #fff;
  cursor: pointer;
  font-weight: 800;
  padding: 0.55rem 0.95rem;
  box-shadow: 0 10px 22px rgba(151, 86, 104, 0.22);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.app-header__book:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(151, 86, 104, 0.28);
}

.app-header__nav a:hover {
  color: var(--color-primary-dark);
  background: rgba(207, 143, 162, 0.12);
}

.app-header__toggle {
  display: none;
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
    font-size: 0.95rem;
    padding: 0.7rem 0.85rem;
  }

  .app-header__book {
    width: 100%;
    min-height: 44px;
    margin-top: 0.25rem;
  }
}

@media (max-width: 420px) {
  .app-header__logo {
    font-size: 0.96rem;
  }
}
</style>
