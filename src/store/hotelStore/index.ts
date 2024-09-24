// stores/useCounterStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useRestauarantStore = defineStore('counter', () => {
  // Use ref for state
  const restaurants = ref([])

  // Actions
  const setItems = (item: any) => {
    restaurants.value = item
  }

  const getItems = computed(() => {
    return restaurants.value
  })

  return {
    setItems,
    getItems
  }
})
