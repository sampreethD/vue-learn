<script setup lang="ts">
import { onMounted } from 'vue'
import { fetchRestaurants } from '/src/services/api.ts'
import { useRestauarantStore } from '@/store/hotelStore/index'

onMounted(async () => {
  await fetchRestaurants()
  console.log(useRestauarantStore().getItems.data.data.cards)
})
</script>

<template>
  <p>Landing works</p>
</template>
