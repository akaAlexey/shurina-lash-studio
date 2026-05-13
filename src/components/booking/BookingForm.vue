<script setup lang="ts">
import type { Service } from '../../data/services'
import BaseButton from '../ui/BaseButton.vue'

defineProps<{
  services: Service[]
  selectedService: string
  name: string
  phone: string
  comment: string
  errors: Record<string, string>
}>()

const emit = defineEmits<{
  'update:selectedService': [value: string]
  'update:name': [value: string]
  'update:phone': [value: string]
  'update:comment': [value: string]
  submit: []
}>()
</script>

<template>
  <form class="booking-form" @submit.prevent="emit('submit')">
    <label>
      <span>Услуга</span>
      <select
        :value="selectedService"
        :class="{ invalid: errors.service }"
        @change="emit('update:selectedService', ($event.target as HTMLSelectElement).value)"
      >
        <option value="">Выберите услугу</option>
        <option v-for="service in services" :key="service.id" :value="service.id">
          {{ service.title }} — {{ service.price }}
        </option>
      </select>
      <small v-if="errors.service">{{ errors.service }}</small>
    </label>

    <label>
      <span>Имя</span>
      <input
        :value="name"
        :class="{ invalid: errors.name }"
        type="text"
        placeholder="Ваше имя"
        @input="emit('update:name', ($event.target as HTMLInputElement).value)"
      />
      <small v-if="errors.name">{{ errors.name }}</small>
    </label>

    <label>
      <span>Телефон</span>
      <input
        :value="phone"
        :class="{ invalid: errors.phone }"
        type="tel"
        placeholder="+7 (___) ___-__-__"
        @input="emit('update:phone', ($event.target as HTMLInputElement).value)"
      />
      <small v-if="errors.phone">{{ errors.phone }}</small>
    </label>

    <label class="booking-form__wide">
      <span>Комментарий</span>
      <textarea
        :value="comment"
        rows="4"
        placeholder="Пожелания по эффекту или удобное время для связи"
        @input="emit('update:comment', ($event.target as HTMLTextAreaElement).value)"
      ></textarea>
    </label>

    <BaseButton class="booking-form__submit" type="submit">Оставить заявку</BaseButton>
  </form>
</template>

<style scoped>
.booking-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.booking-form label {
  display: grid;
  gap: 0.45rem;
}

.booking-form span {
  color: var(--color-text);
  font-weight: 800;
}

.booking-form input,
.booking-form select,
.booking-form textarea {
  width: 100%;
  border: 1px solid var(--color-border);
  border-radius: 18px;
  background: var(--color-surface);
  color: var(--color-text);
  outline: none;
  padding: 0.92rem 1rem;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.booking-form input:focus,
.booking-form select:focus,
.booking-form textarea:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(207, 143, 162, 0.15);
}

.booking-form .invalid {
  border-color: #be5562;
}

.booking-form small {
  color: #a74350;
  font-weight: 700;
}

.booking-form__wide,
.booking-form__submit {
  grid-column: 1 / -1;
}

.booking-form__submit {
  min-height: 52px;
}

@media (max-width: 680px) {
  .booking-form {
    grid-template-columns: 1fr;
  }
}
</style>
