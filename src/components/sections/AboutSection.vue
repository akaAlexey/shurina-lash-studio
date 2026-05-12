<script setup lang="ts">
import studioImage from '../../assets/images/studio/studio-interior.png'
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
      <div class="about-section__media">
        <img :src="studioImage" alt="Интерьер частной студии" />
      </div>
      <div>
        <SectionTitle eyebrow="О мастере" title="О мастере" />
        <div class="about-section__text">
          <p>
            Алина пришла в beauty-сферу после нескольких лет работы с клиентским сервисом.
            Ей всегда нравились аккуратные детали, симметрия и спокойная ручная работа.
            Первое обучение по наращиванию ресниц она прошла в 2020 году, затем долго
            отрабатывала технику на моделях и постепенно собрала постоянных клиенток.
          </p>
          <p>
            Сейчас Алина арендует небольшую студию в Астрахани и принимает по
            предварительной записи. В студии нет потока и суеты: один клиент, чистое
            рабочее место, мягкий свет, спокойная музыка и достаточно времени на каждую
            процедуру.
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
  grid-template-columns: minmax(280px, 0.82fr) minmax(0, 1fr);
  align-items: center;
  gap: 3.5rem;
}

.about-section__media {
  overflow: hidden;
  border-radius: var(--radius-xl);
  aspect-ratio: 4 / 5;
  box-shadow: var(--shadow-soft);
}

.about-section__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-section__text {
  display: grid;
  gap: 1rem;
  color: var(--color-text-muted);
  font-size: 1.04rem;
  line-height: 1.75;
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

@media (max-width: 900px) {
  .about-section__grid {
    grid-template-columns: 1fr;
  }

  .about-section__cards {
    grid-template-columns: 1fr;
  }
}
</style>
