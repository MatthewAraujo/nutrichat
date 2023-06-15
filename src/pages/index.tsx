import { Sun, SunHorizon, Moon } from '@phosphor-icons/react'
import { Header } from '../components/Header'
import { Receitas } from '../components/Receitas'
import { TimeRecepies } from '../components/TimeRecepies'
import { Aside } from '../components/Aside'
import { ChatGptContext } from '../contexts/ChatGPTContext'
import { useContext, useEffect, useState } from 'react'
import { api } from '@/lib/axios'

// interface Receitas {
//   nome:string
//   idade :string
//   id :string
//   refeicoes: {
//     nome: string
//     receitas: {
//       nome: string
//       ingredientes: {
//         nome: string
//         quantidade: string
//       }[]
//       modo_preparo: string
//     }[]
//   }[]
// }

export default function Home() {
  // const [receitas, setReceitas] = useState<Receitas[]>([])
  // const { botResponse } = useContext(ChatGptContext)
  // console.log(botResponse)

  // if(botResponse){
  //   const message = JSON.parse(botResponse);

  //   if(message !== undefined)
  //   createNewPlan(message)
  // }

 

 
  // async function createNewPlan(data: any){
  //   await api.post('chatgpt', data)
  // }

  // async function loadReceitas(){
  //   const response = await api.get('chatgpt', {
  //     params: {
  //       limit: 4
  //     }
  //   })
  //   setReceitas(response.data)
  // }


  return (
    <main className="flex h-screen">
      <Aside />
      <div className="flex w-full max-w-[calc(100vw-200px)] flex-col gap-4 ">
        <Header name="Matthew" description="" />
        <div className="grid h-full w-full grid-cols-contentHome gap-8 py-2">
          <div className="mt-auto">
            <h2 className="text-2xl font-bold leading-relaxed tracking-wide	 text-[#020617]">
              Receitas da refeição
            </h2>
            <div className="grid grid-cols-2 gap-8">
            <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
               <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
               <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
               <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              
            </div>
          </div>
          <div className=" w-full">
            <h2 className="text-2xl font-bold leading-relaxed tracking-wide	 text-[#020617]">
              Programação do dia
            </h2>
            <div className="flex flex-col gap-4">
              <TimeRecepies
                estado={<Sun size={32} />}
                name="Café da manhã"
                time="06:00"
              />
              <TimeRecepies
                estado={<Sun size={32} />}
                name="Almoço"
                time="12:00"
              />
              <TimeRecepies
                estado={<SunHorizon size={32} />}
                name="Lanche da tarde"
                time="15:00"
              />
              <TimeRecepies
                estado={<Moon size={32} />}
                name="Jantar"
                time="21:00"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const localStorageTest = () => {
    if (typeof window !== 'undefined') {
      const name = localStorage.getItem('user')
      return name
    }
    return null // Retornar null caso não esteja no contexto do navegador
  }

  const name = localStorageTest()

  if (name === null) {
    return {
      redirect: {
        destination: '/signUp',
        permanent: false,
      },
    }
  } else {
    return {
      props: {
        name: name || null, // Retornar null se name for undefined
      },
    }
  }
}
