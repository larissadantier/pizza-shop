import { api } from '@/lib/axios'

interface SignInBody {
  email: string
}

export async function signIn({ email }: SignInBody) {
  return await api.post('/authenticate', { email })
}
