import { api } from '@/lib/axios'

interface RegisterRestaurantBody {
  email: string
  restaurant: string
  manager: string
  phone: string
}

export async function registerRestaurant({
  email,
  manager,
  phone,
  restaurant,
}: RegisterRestaurantBody) {
  return await api.post('/restaurants', {
    restaurantName: restaurant,
    managerName: manager,
    email,
    phone,
  })
}
