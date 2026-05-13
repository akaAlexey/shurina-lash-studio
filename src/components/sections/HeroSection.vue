<script setup lang="ts">
import heroImage from '../../assets/images/hero/alina-hero.webp'
import BaseButton from '../ui/BaseButton.vue'

const facts = ['4+ года практики', 'частная студия', 'запись онлайн']
</script>

<template>
  <section id="hero" class="hero-section">
    <div class="container hero-section__grid">
      <div class="hero-section__content">
        <span class="eyebrow">Астрахань, район улицы Боевой</span>
        <h1>Наращивание ресниц в Астрахани с акцентом на естественную красоту</h1>
        <p>
          Шурина Алина Алексеевна — мастер, который помогает подчеркнуть взгляд без
          перегруза. Аккуратная работа, стерильность и спокойная атмосфера частной студии.
        </p>
        <div class="hero-section__actions">
          <BaseButton href="#booking">Записаться онлайн</BaseButton>
          <BaseButton href="#gallery" variant="secondary">Посмотреть работы</BaseButton>
        </div>
        <ul class="hero-section__facts" aria-label="Краткие факты">
          <li v-for="fact in facts" :key="fact">{{ fact }}</li>
        </ul>
      </div>
      <div class="hero-section__media" aria-label="Портрет мастера Алины">
        <img :src="heroImage" alt="Шурина Алина Алексеевна" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 74px 0 92px;
}

.hero-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  align-items: center;
  gap: 3rem;
}

.hero-section__content h1 {
  margin-top: 0.75rem;
  font-size: clamp(2.5rem, 6vw, 5.2rem);
  line-height: 0.98;
  max-width: 850px;
}

.hero-section__content p {
  margin-top: 1.35rem;
  max-width: 660px;
  color: var(--color-text-muted);
  font-size: 1.15rem;
  line-height: 1.75;
}

.hero-section__actions {
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.hero-section__facts {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
  padding: 0;
  margin: 2rem 0 0;
  list-style: none;
}

.hero-section__facts li {
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  color: var(--color-text-muted);
  font-size: 0.94rem;
  font-weight: 700;
  padding: 0.65rem 0.9rem;
}

.hero-section__media {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-xl);
  background: var(--color-surface-muted);
  box-shadow: var(--shadow-soft);
  aspect-ratio: 4 / 5;
}

.hero-section__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 900px) {
  .hero-section__grid {
    grid-template-columns: 1fr;
  }

  .hero-section__media {
    max-height: 620px;
  }
}

@media (max-width: 520px) {
  .hero-section {
    padding: 48px 0 68px;
  }
}
</style>
