import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  email: z.string().email('E-mail inválido').min(1, 'Necessário um e-mail'),
  restaurant: z.string().min(1, 'Necessário um nome do estabelecimento'),
  manager: z.string().min(1, 'Necessário um nome'),
  phone: z.string().min(1, 'Necessário o número do estabelecimento'),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const navigate = useNavigate()

  async function handleSignIn(data: SignUpForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Restaurante cadastrado com sucesso.', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="restaurant">Nome do estabelecimento</Label>
              <Input
                id="restaurant"
                type="text"
                placeholder="Ex: Ifood Cia"
                {...register('restaurant')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="manager">Seu nome</Label>
              <Input
                id="manager"
                type="text"
                placeholder="Ex: Carlos Ribeiro"
                {...register('manager')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Ex: pizza@hotmail.com"
                {...register('email')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Ex: (22) 99759-9571"
                {...register('phone')}
              />
            </div>
            <Button className="w-full" type="submit" disabled={isSubmitting}>
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="#" className="underline underline-offset-4">
                Termos de serviço
              </a>{' '}
              e{' '}
              <a href="#" className="underline underline-offset-4 ">
                políticas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
