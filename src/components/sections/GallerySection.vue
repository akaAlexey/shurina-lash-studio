<script setup lang="ts">
import { galleryItems } from '../../data/gallery'
import SectionTitle from '../ui/SectionTitle.vue'

const emit = defineEmits<{
  book: [serviceId: string]
}>()

function serviceForGalleryItem(title: string) {
  if (title.includes('объём')) return 'two-d'
  if (title.includes('Натуральный')) return 'classic'
  return ''
}

function openBooking(title: string) {
  emit('book', serviceForGalleryItem(title))
}
</script>

<template>
  <section id="gallery" class="section gallery-section">
    <div class="container">
      <SectionTitle
        eyebrow="Портфолио"
        title="Работы"
        text="Примеры эффектов, рабочий процесс и материалы, которые помогают заранее понять стиль мастера."
      />
      <div class="gallery-section__grid">
        <article
          v-for="item in galleryItems"
          :key="item.id"
          class="gallery-card"
          tabindex="0"
          @click="openBooking(item.title)"
          @keydown.enter="openBooking(item.title)"
        >
          <div class="gallery-card__image">
            <img :src="item.image" :alt="item.title" :style="{ objectPosition: item.position }" />
            <span>{{ item.badge }}</span>
          </div>
          <div class="gallery-card__body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <span class="gallery-card__link">Записаться</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.gallery-card {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: 0 12px 34px rgba(89, 65, 67, 0.06);
  cursor: pointer;
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease;
}

.gallery-card:hover,
.gallery-card:focus-visible {
  transform: translateY(-4px);
  box-shadow: var(--shadow-soft);
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

@supports (animation-timeline: view()) {
  .gallery-card__image img {
    animation: imageBreath both ease-out;
    animation-timeline: view();
    animation-range: entry 0% cover 65%;
  }
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

.gallery-card__link {
  display: inline-flex;
  margin-top: 0.75rem;
  color: var(--color-primary-dark);
  font-size: 0.86rem;
  font-weight: 800;
}

@keyframes imageBreath {
  from {
    transform: scale(0.97);
  }

  to {
    transform: scale(1.025);
  }
}

@media (max-width: 1180px) {
  .gallery-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .gallery-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .gallery-card {
    border-radius: 18px;
  }

  .gallery-card__image {
    aspect-ratio: 1 / 1.08;
  }

  .gallery-card__image span {
    top: 0.55rem;
    left: 0.55rem;
    font-size: 0.68rem;
    padding: 0.35rem 0.5rem;
  }

  .gallery-card__body {
    padding: 0.75rem;
  }

  .gallery-card h3 {
    font-size: 0.92rem;
  }

  .gallery-card p {
    display: none;
  }
}

@media (max-width: 340px) {
  .gallery-card h3 {
    font-size: 0.86rem;
  }
}
</style>
