<script setup lang="ts">
import type { Service } from '../../data/services'

defineProps<{
  service: Service
}>()

defineEmits<{
  book: [serviceId: string]
}>()
</script>

<template>
  <article class="service-card" tabindex="0" @click="$emit('book', service.id)" @keydown.enter="$emit('book', service.id)">
    <div>
      <p class="service-card__duration">{{ service.duration }}</p>
      <h3>{{ service.title }}</h3>
      <p class="service-card__description">{{ service.description }}</p>
    </div>
    <div class="service-card__bottom">
      <strong>{{ service.price }}</strong>
      <span>Записаться</span>
    </div>
  </article>
</template>

<style scoped>
.service-card {
  display: flex;
  min-height: 230px;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 14px 38px rgba(89, 65, 67, 0.07);
  cursor: pointer;
  padding: 1.45rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: rgba(207, 143, 162, 0.46);
  box-shadow: var(--shadow-soft);
}

.service-card:focus-visible {
  outline: 3px solid rgba(184, 112, 132, 0.28);
  outline-offset: 3px;
}

.service-card__duration {
  color: var(--color-primary-dark);
  font-size: 0.86rem;
  font-weight: 800;
}

.service-card h3 {
  margin-top: 0.55rem;
  font-size: 1.32rem;
  line-height: 1.2;
}

.service-card__description {
  margin-top: 0.8rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

.service-card__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.3rem;
}

.service-card strong {
  font-size: 1.45rem;
}

.service-card__bottom span {
  border-radius: 999px;
  background: rgba(184, 112, 132, 0.1);
  color: var(--color-primary-dark);
  font-size: 0.84rem;
  font-weight: 800;
  padding: 0.55rem 0.75rem;
}

@media (max-width: 520px) {
  .service-card {
    min-height: 0;
    padding: 1.1rem;
  }

  .service-card h3 {
    font-size: 1.08rem;
  }

  .service-card__description {
    font-size: 0.92rem;
  }

  .service-card__bottom {
    align-items: flex-start;
    flex-direction: column;
    gap: 0.7rem;
  }
}
</style>
