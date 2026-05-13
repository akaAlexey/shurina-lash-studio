<script setup lang="ts">
import { galleryItems } from '../../data/gallery'
import SectionTitle from '../ui/SectionTitle.vue'
</script>

<template>
  <section id="gallery" class="section gallery-section">
    <div class="container">
      <SectionTitle
        eyebrow="Портфолио"
        title="Работы"
        text="Работы, процесс и материалы на локальных demo-изображениях проекта."
      />
      <div class="gallery-section__grid">
        <article v-for="item in galleryItems" :key="item.id" class="gallery-card">
          <div class="gallery-card__image">
            <img :src="item.image" :alt="item.title" :style="{ objectPosition: item.position }" />
            <span>{{ item.badge }}</span>
          </div>
          <div class="gallery-card__body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.gallery-card {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: 0 12px 34px rgba(89, 65, 67, 0.06);
}

.gallery-card__image {
  position: relative;
  aspect-ratio: 4 / 5;
  overflow: hidden;
}

.gallery-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.gallery-card:hover img {
  transform: scale(1.04);
}

.gallery-card__image span {
  position: absolute;
  top: 1rem;
  left: 1rem;
  border-radius: 999px;
  background: rgba(255, 250, 246, 0.9);
  color: var(--color-primary-dark);
  font-size: 0.78rem;
  font-weight: 800;
  padding: 0.45rem 0.7rem;
}

.gallery-card__body {
  padding: 1rem;
}

.gallery-card h3 {
  font-size: 1.05rem;
}

.gallery-card p {
  margin-top: 0.45rem;
  color: var(--color-text-muted);
  line-height: 1.55;
}

@media (max-width: 1180px) {
  .gallery-section__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 780px) {
  .gallery-section__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .gallery-section__grid {
    grid-template-columns: 1fr;
  }
}
</style>
