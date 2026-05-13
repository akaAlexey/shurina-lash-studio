<script setup lang="ts">
import alinaCloseup from '../../assets/images/hero/alina-closeup.webp'
import studioLounge from '../../assets/images/studio/studio-lounge.webp'
import studioRoom from '../../assets/images/studio/studio-room.webp'
import SectionTitle from '../ui/SectionTitle.vue'

const cards = [
  'Индивидуальный подбор эффекта',
  'Гигиена и одноразовые материалы',
  'Спокойная запись без потока',
]
</script>

<template>
  <section id="about" class="section about-section">
    <div class="container about-section__grid">
      <div class="about-section__media" aria-label="Мастер и атмосфера студии">
        <img class="about-section__main-image" :src="alinaCloseup" alt="Алина за работой" />
        <img class="about-section__small-image about-section__small-image--top" :src="studioRoom" alt="Небольшой кабинет студии" />
        <img class="about-section__small-image about-section__small-image--bottom" :src="studioLounge" alt="Зона ожидания в студии" />
      </div>

      <div>
        <SectionTitle eyebrow="О мастере" title="О мастере" />
        <div class="about-section__mobile-studio" aria-label="Атмосфера студии">
          <img :src="studioRoom" alt="Небольшой кабинет студии" />
          <img :src="studioLounge" alt="Зона ожидания в студии" />
        </div>
        <div class="about-section__text">
          <p>
            Алина работает в небольшом арендованном кабинете и принимает по одному
            клиенту за раз. Большая часть записей приходит по рекомендациям: клиентки
            возвращаются за спокойной атмосферой, аккуратной посадкой ресниц и честным
            подбором эффекта.
          </p>
          <p>
            <img class="about-section__inline-portrait" :src="alinaCloseup" alt="Алина за работой" />
            В работе Алина делает акцент на чистоте, одноразовых расходниках и комфортном
            темпе процедуры. Перед записью можно обсудить желаемый результат: от
            максимально натуральной классики до более выразительного объёма.
          </p>
        </div>
        <div class="about-section__cards">
          <article v-for="card in cards" :key="card">{{ card }}</article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section__grid {
  display: grid;
  grid-template-columns: minmax(280px, 0.9fr) minmax(0, 1fr);
  align-items: center;
  gap: 3.5rem;
}

.about-section__media {
  position: relative;
  min-height: 620px;
}

.about-section__main-image,
.about-section__small-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: var(--shadow-soft);
}

@supports (animation-timeline: view()) {
  .about-section__main-image,
  .about-section__small-image {
    animation: softImageLift both ease-out;
    animation-timeline: view();
    animation-range: entry 0% cover 58%;
  }
}

@keyframes softImageLift {
  from {
    transform: scale(0.985);
  }

  to {
    transform: scale(1.015);
  }
}

.about-section__main-image {
  position: absolute;
  inset: 0 auto auto 0;
  width: 72%;
  height: 78%;
  border-radius: var(--radius-xl);
}

.about-section__small-image {
  position: absolute;
  border: 8px solid var(--color-bg);
  border-radius: var(--radius-lg);
}

.about-section__small-image--top {
  top: 6%;
  right: 0;
  width: 44%;
  height: 32%;
}

.about-section__small-image--bottom {
  right: 5%;
  bottom: 0;
  width: 54%;
  height: 34%;
}

.about-section__text {
  display: grid;
  gap: 1rem;
  color: var(--color-text-muted);
  font-size: 1.04rem;
  line-height: 1.75;
}

.about-section__inline-portrait {
  display: none;
}

.about-section__mobile-studio {
  display: none;
}

.about-section__inline-portrait {
  object-fit: cover;
}

.about-section__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
  margin-top: 1.7rem;
}

.about-section__cards article {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: 0 12px 30px rgba(89, 65, 67, 0.06);
  color: var(--color-text);
  font-weight: 800;
  line-height: 1.35;
  padding: 1.1rem;
}

@media (max-width: 980px) {
  .about-section__grid {
    grid-template-columns: 1fr;
  }

  .about-section__media {
    min-height: 560px;
  }
}

@media (max-width: 768px) {
  .about-section__media {
    min-height: 480px;
  }
}

@media (max-width: 640px) {
  .about-section__media {
    display: none;
    min-height: auto;
  }

  .about-section__main-image,
  .about-section__small-image {
    position: static;
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
    border: 0;
  }

  .about-section__main-image {
    display: none;
  }

  .about-section__small-image {
    aspect-ratio: 1 / 1;
    border-radius: 20px;
  }

  .about-section__inline-portrait {
    display: block;
    float: right;
    overflow: hidden;
    width: min(42%, 150px);
    aspect-ratio: 4 / 5;
    border-radius: 18px;
    box-shadow: var(--shadow-soft);
    margin: 0.35rem 0 0.6rem 1rem;
  }

  .about-section__text-room {
    display: none;
  }

  .about-section__mobile-studio {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .about-section__mobile-studio img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 18px;
    box-shadow: var(--shadow-soft);
  }

  .about-section__text p::after {
    content: '';
    display: block;
    clear: both;
  }

  .about-section__cards {
    grid-template-columns: 1fr;
  }
}
</style>
