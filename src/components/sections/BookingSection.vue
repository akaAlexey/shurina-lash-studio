<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { services } from '../../data/services'
import { timeSlots } from '../../data/timeSlots'
import BookingCalendar from '../booking/BookingCalendar.vue'
import BookingForm from '../booking/BookingForm.vue'
import TimeSlotPicker from '../booking/TimeSlotPicker.vue'

interface BookingDate {
  value: string
  day: string
  weekday: string
}

const props = defineProps<{
  isOpen: boolean
  initialServiceId?: string
}>()

const emit = defineEmits<{
  close: []
}>()

const selectedDate = ref('')
const selectedTime = ref('')
const selectedService = ref('')
const name = ref('')
const phone = ref('')
const comment = ref('')
const isSuccess = ref(false)

const errors = reactive<Record<string, string>>({})

const dates = computed<BookingDate[]>(() => {
  const formatter = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  })

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() + index)
    const parts = formatter.formatToParts(date)
    const weekday = parts.find((part) => part.type === 'weekday')?.value ?? ''
    const day = `${parts.find((part) => part.type === 'day')?.value ?? ''} ${
      parts.find((part) => part.type === 'month')?.value ?? ''
    }`

    return {
      value: date.toISOString().slice(0, 10),
      weekday,
      day,
    }
  })
})

function validate() {
  errors.service = selectedService.value ? '' : 'Выберите услугу'
  errors.date = selectedDate.value ? '' : 'Выберите дату'
  errors.time = selectedTime.value ? '' : 'Выберите время'
  errors.name = name.value.trim() ? '' : 'Введите имя'
  errors.phone = phone.value.trim() ? '' : 'Введите телефон'

  return Object.values(errors).every((error) => !error)
}

function submitBooking() {
  isSuccess.value = false

  if (!validate()) {
    return
  }

  isSuccess.value = true
}

function closeModal() {
  emit('close')
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

watch(
  () => props.isOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    if (isOpen) {
      selectedService.value = props.initialServiceId ?? ''
      isSuccess.value = false
      Object.keys(errors).forEach((key) => {
        errors[key] = ''
      })
    }
  },
)

watch(
  () => props.initialServiceId,
  (serviceId) => {
    if (props.isOpen) {
      selectedService.value = serviceId ?? ''
    }
  },
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="booking-modal" role="presentation" @click.self="closeModal">
      <div
        class="booking-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
      >
        <button class="booking-modal__close" type="button" aria-label="Закрыть запись" @click="closeModal">
          ×
        </button>

        <div class="booking-modal__header">
          <span class="eyebrow">Онлайн-запись</span>
          <h2 id="booking-title">Запись на процедуру</h2>
          <p>
            Выберите услугу, дату и время. Алина свяжется для подтверждения записи и
            уточнения точного адреса студии.
          </p>
        </div>

        <div class="booking-modal__content">
          <div class="booking-section__step">
            <div class="booking-section__step-title">
              <span>1</span>
              <h3>Дата</h3>
            </div>
            <BookingCalendar v-model="selectedDate" :dates="dates" />
            <small v-if="errors.date">{{ errors.date }}</small>
          </div>

          <div class="booking-section__step">
            <div class="booking-section__step-title">
              <span>2</span>
              <h3>Время</h3>
            </div>
            <TimeSlotPicker v-model="selectedTime" :slots="timeSlots" />
            <small v-if="errors.time">{{ errors.time }}</small>
          </div>

          <div class="booking-section__step">
            <div class="booking-section__step-title">
              <span>3</span>
              <h3>Контакты</h3>
            </div>
            <BookingForm
              v-model:selected-service="selectedService"
              v-model:name="name"
              v-model:phone="phone"
              v-model:comment="comment"
              :services="services"
              :errors="errors"
              @submit="submitBooking"
            />
          </div>

          <div v-if="isSuccess" class="booking-section__success" role="status">
            <strong>Спасибо! Заявка отправлена.</strong>
            <p>
              Алина свяжется с вами для подтверждения записи и уточнения точного адреса студии.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.booking-modal {
  position: fixed;
  inset: 0;
  z-index: 60;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgba(52, 47, 50, 0.34);
  backdrop-filter: blur(12px);
  padding: clamp(0.75rem, 3vw, 1.5rem);
}

.booking-modal__dialog {
  position: relative;
  width: min(100%, 920px);
  max-height: min(92vh, 980px);
  overflow-y: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  background: rgba(255, 250, 246, 0.98);
  box-shadow: 0 28px 80px rgba(52, 47, 50, 0.24);
  padding: clamp(1rem, 3vw, 1.8rem);
}

.booking-modal__close {
  position: sticky;
  top: 0;
  z-index: 2;
  float: right;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: var(--color-surface);
  color: var(--color-text);
  cursor: pointer;
  font-size: 1.7rem;
  line-height: 1;
  box-shadow: inset 0 0 0 1px var(--color-border);
}

.booking-modal__header {
  max-width: 640px;
  margin-bottom: 1.2rem;
}

.booking-modal__header h2 {
  margin-top: 0.45rem;
  font-size: clamp(1.8rem, 4vw, 2.7rem);
  line-height: 1.06;
}

.booking-modal__header p {
  margin-top: 0.75rem;
  color: var(--color-text-muted);
  line-height: 1.65;
}

.booking-modal__content {
  display: grid;
  gap: 1.05rem;
}

.booking-section__step {
  display: grid;
  gap: 0.9rem;
}

.booking-section__step-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.booking-section__step-title span {
  display: inline-flex;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: var(--color-primary-dark);
  color: #fff;
  font-weight: 800;
}

.booking-section__step-title h3 {
  font-size: 1.12rem;
}

.booking-section small {
  color: #a74350;
  font-weight: 700;
}

.booking-section__success {
  border-radius: var(--radius-lg);
  background: #f3fff7;
  color: #245c38;
  padding: 1.1rem 1.25rem;
}

.booking-section__success p {
  margin-top: 0.35rem;
  line-height: 1.6;
}

@media (max-width: 560px) {
  .booking-modal {
    align-items: end;
    padding: 0;
  }

  .booking-modal__dialog {
    max-height: 92svh;
    border-radius: 26px 26px 0 0;
    padding: 1rem;
  }

  .booking-modal__header {
    margin-bottom: 0.9rem;
  }

  .booking-modal__header p {
    font-size: 0.94rem;
  }
}
</style>
