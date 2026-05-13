<script setup lang="ts">
defineProps<{
  dates: {
    value: string
    day: string
    weekday: string
  }[]
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="booking-calendar" role="group" aria-label="Выбор даты">
    <button
      v-for="date in dates"
      :key="date.value"
      type="button"
      :class="{ active: modelValue === date.value }"
      @click="emit('update:modelValue', date.value)"
    >
      <span>{{ date.weekday }}</span>
      <strong>{{ date.day }}</strong>
    </button>
  </div>
</template>

<style scoped>
.booking-calendar {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 0.55rem;
}

.booking-calendar button {
  min-height: 78px;
  border: 1px solid var(--color-border);
  border-radius: 18px;
  background: var(--color-surface);
  color: var(--color-text);
  cursor: pointer;
  padding: 0.7rem 0.45rem;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.booking-calendar button:hover,
.booking-calendar button.active {
  border-color: var(--color-primary);
  background: #fff2f3;
  transform: translateY(-2px);
}

.booking-calendar span {
  display: block;
  color: var(--color-text-muted);
  font-size: 0.78rem;
  font-weight: 700;
}

.booking-calendar strong {
  display: block;
  margin-top: 0.35rem;
}

@media (max-width: 720px) {
  .booking-calendar {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 420px) {
  .booking-calendar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
