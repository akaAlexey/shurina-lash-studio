<script setup lang="ts">
import { studio } from '../../data/studio'
import SectionTitle from '../ui/SectionTitle.vue'

const contacts = [
  ['Бренд', studio.brand],
  ['Мастер', studio.master],
  ['Город', studio.city],
  ['Район', studio.district],
  ['Адрес', studio.address],
  ['Телефон', studio.phone],
  ['Режим работы', studio.workingHours],
]
</script>

<template>
  <section id="contacts" class="section section--muted contacts-section">
    <div class="container contacts-section__grid">
      <div>
        <SectionTitle
          eyebrow="Контакты"
          title="Контакты"
          text="Точный адрес частной студии отправляется после подтверждения записи. Ссылки ниже демонстрационные."
        />
        <div class="contacts-section__links">
          <a :href="studio.telegram" target="_blank" rel="noreferrer">Telegram</a>
          <a :href="studio.vk" target="_blank" rel="noreferrer">VK</a>
        </div>
      </div>

      <div class="contacts-section__card">
        <dl>
          <div v-for="[label, value] in contacts" :key="label">
            <dt>{{ label }}</dt>
            <dd>{{ value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts-section__grid {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(320px, 1fr);
  gap: 2rem;
}

.contacts-section__links {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.contacts-section__links a {
  border-radius: 999px;
  background: var(--color-primary-dark);
  color: #fff;
  font-weight: 800;
  padding: 0.82rem 1.1rem;
  transition:
    transform 0.2s ease,
    background-color 0.2s ease;
}

.contacts-section__links a:hover {
  background: #8f5263;
  transform: translateY(-2px);
}

.contacts-section__card {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
  padding: clamp(1.2rem, 3vw, 2rem);
}

.contacts-section dl {
  display: grid;
  gap: 1rem;
  margin: 0;
}

.contacts-section dl div {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 1rem;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1rem;
}

.contacts-section dl div:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.contacts-section dt {
  color: var(--color-text-muted);
  font-weight: 800;
}

.contacts-section dd {
  margin: 0;
  font-weight: 700;
}

@media (max-width: 820px) {
  .contacts-section__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .contacts-section dl div {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}
</style>
