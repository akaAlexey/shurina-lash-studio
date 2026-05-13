<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__inner">
      <div>
        <strong>Shurina Lash Studio</strong>
        <p>Наращивание ресниц в Астрахани</p>
      </div>
      <p class="app-footer__demo">Демо-кейс для портфолио frontend-разработчика.</p>
      <span>© {{ year }}</span>
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
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 1.5rem;
}

.app-footer strong {
  font-size: 1.05rem;
}

.app-footer p,
.app-footer span {
  color: rgba(255, 250, 246, 0.74);
}

.app-footer__demo {
  max-width: 420px;
  text-align: center;
}

@media (max-width: 760px) {
  .app-footer__inner {
    grid-template-columns: 1fr;
    text-align: left;
  }

  .app-footer__demo {
    text-align: left;
  }
}
</style>
