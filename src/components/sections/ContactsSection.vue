<script setup lang="ts">
import { studio } from '../../data/studio'
import SectionTitle from '../ui/SectionTitle.vue'

const contacts = [
  ['Мастер', studio.masterName],
  ['Город', studio.city],
  ['Район', studio.district],
  ['Ориентир', studio.landmark],
  ['Адрес', studio.address],
  ['Формат', studio.addressNote],
  ['Телефон', studio.phone],
  ['Режим', studio.workHours],
]
</script>

<template>
  <section id="contacts" class="section section--muted contacts-section">
    <div class="container contacts-section__grid">
      <div>
        <SectionTitle
          eyebrow="Контакты"
          title="Где проходит приём"
          text="Студия находится в районе улицы Боевой, рядом с удобными городскими маршрутами. Точный адрес отправляется после подтверждения записи."
        />
        <div class="contacts-section__links">
          <a :href="studio.telegram" target="_blank" rel="noreferrer">Telegram</a>
          <a :href="studio.vk" target="_blank" rel="noreferrer">VK</a>
        </div>
      </div>

      <div class="contacts-section__card">
        <div class="contacts-section__route">
          <span class="eyebrow">Как добраться</span>
          <h3>Ориентир — район Жилгородка и улицы Боевой</h3>
          <p>
            Приём проходит в частном кабинете мастера без потока клиентов. После
            подтверждения записи Алина отправляет точный адрес и короткую подсказку по
            маршруту.
          </p>
        </div>

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
  gap: clamp(1.25rem, 4vw, 2.5rem);
}

.contacts-section__links {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
}

.contacts-section__links a {
  display: inline-flex;
  min-height: 46px;
  align-items: center;
  justify-content: center;
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
  min-width: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  box-shadow: var(--shadow-soft);
  padding: clamp(1.1rem, 3vw, 2rem);
}

.contacts-section__route {
  border-radius: var(--radius-lg);
  background:
    linear-gradient(135deg, rgba(207, 143, 162, 0.18), rgba(234, 209, 194, 0.38)),
    var(--color-surface-muted);
  margin-bottom: 1.4rem;
  padding: clamp(1rem, 3vw, 1.3rem);
}

.contacts-section__route h3 {
  margin-top: 0.5rem;
  font-size: clamp(1.25rem, 3vw, 1.55rem);
  line-height: 1.15;
}

.contacts-section__route p {
  margin-top: 0.8rem;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.contacts-section dl {
  display: grid;
  gap: 1rem;
  margin: 0;
}

.contacts-section dl div {
  display: grid;
  grid-template-columns: minmax(96px, 140px) minmax(0, 1fr);
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
  min-width: 0;
  margin: 0;
  font-weight: 700;
  overflow-wrap: anywhere;
}

@media (max-width: 900px) {
  .contacts-section__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .contacts-section__links a {
    flex: 1 1 130px;
  }

  .contacts-section dl div {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}
</style>
