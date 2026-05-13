<script setup lang="ts">
defineProps<{
  slots: string[]
  modelValue: string
  disabledSlots?: string[]
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="time-slot-picker" role="group" aria-label="Выбор времени">
    <button
      v-for="slot in slots"
      :key="slot"
      type="button"
      :disabled="disabledSlots?.includes(slot)"
      :class="{ active: modelValue === slot }"
      @click="emit('update:modelValue', slot)"
    >
      {{ slot }}
      <span v-if="disabledSlots?.includes(slot)">занято</span>
    </button>
  </div>
</template>

<style scoped>
.time-slot-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
}

.time-slot-picker button {
  min-width: 88px;
  min-height: 44px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text);
  cursor: pointer;
  font-weight: 800;
  padding: 0.75rem 1rem;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.time-slot-picker button span {
  display: block;
  color: var(--color-text-muted);
  font-size: 0.64rem;
  font-weight: 800;
  line-height: 1;
  margin-top: 0.2rem;
}

@media (max-width: 420px) {
  .time-slot-picker button {
    flex: 1 1 calc(50% - 0.55rem);
  }
}

.time-slot-picker button:hover,
.time-slot-picker button.active {
  border-color: var(--color-primary);
  background: #fff2f3;
  color: var(--color-primary-dark);
  transform: translateY(-2px);
}

.time-slot-picker button:disabled {
  cursor: not-allowed;
  opacity: 0.42;
  transform: none;
}
</style>
