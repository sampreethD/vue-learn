import axios from 'axios'
import { useRestauarantStore } from '@/store/hotelStore/index'

export async function fetchRestaurants() {
  const lat = 12.9634
  const lng = 77.5855
  const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`

  try {
    const response = await axios.get(url)
    useRestauarantStore().setItems(response)

    // Adjust based on API response structure
  } catch (error) {
    console.error('Error fetching restaurants:', error)
  }
}
