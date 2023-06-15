import { Formulario } from '@/components/Formulario/formulario'
import { Aside } from '../../components/Aside'
import { Header } from '../../components/Header'
import { useContext } from 'react'
import { ChatGptContext } from '@/contexts/ChatGPTContext'

export default function Cadastro() {
  const { name }  = useContext(ChatGptContext)
  console.log(name)
  return (
    <main className="flex h-screen ">
      <Aside />
      <div className="flex w-full max-w-[calc(100vw-200px)] flex-col gap-4 bg-[#E5E5E5] ">
        <Header description="Vamos decidir sua dieta" name={name} />

        <article className='bg-[#C8E3A5] w-full p-4'><p className='font-bold text-lg text-justify'>Bem-vindo(a) ao nosso site! Estamos aqui para ajudar comunidades carentes a melhorar sua alimentação de forma acessível. Entendemos que cada real conta, por isso, criamos um sistema que monta dietas personalizadas com base na sua renda. Nosso compromisso é utilizar até 2/3 da sua renda para elaborar uma dieta saudável e equilibrada, sem comprometer suas finanças. Com a nossa empresa, você pode confiar que estará recebendo orientações nutricionais confiáveis e um plano alimentar adaptado às suas necessidades e possibilidades. Juntos, vamos transformar a alimentação de comunidades carentes e promover um estilo de vida mais saudável.</p></article>
        <Formulario/>
      </div>

    </main>
  )
}
