<script setup lang="ts">
const links = [
  { href: '#about', label: 'О мастере' },
  { href: '#services', label: 'Услуги' },
  { href: '#gallery', label: 'Работы' },
  { href: '#booking', label: 'Запись' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
]
</script>

<template>
  <header class="app-header">
    <div class="container app-header__inner">
      <a class="app-header__logo" href="#hero">Shurina Lash Studio</a>
      <nav class="app-header__nav" aria-label="Основная навигация">
        <a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a>
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

.app-header__nav a:hover {
  color: var(--color-primary-dark);
  background: rgba(207, 143, 162, 0.12);
}

@media (max-width: 760px) {
  .app-header__inner {
    min-height: auto;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.65rem;
    padding: 0.85rem 0;
  }

  .app-header__nav {
    justify-content: flex-start;
    width: 100%;
  }

  .app-header__nav a {
    background: rgba(255, 255, 255, 0.72);
    font-size: 0.84rem;
    padding: 0.45rem 0.65rem;
  }
}
</style>
