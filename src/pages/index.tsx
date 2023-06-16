import { Sun, SunHorizon, Moon } from '@phosphor-icons/react'
import { Header } from '../components/Header'
import { Receitas } from '../components/Receitas'
import { TimeRecepies } from '../components/TimeRecepies'
import { Aside } from '../components/Aside'
import { ChatGptContext } from '../contexts/ChatGPTContext'
import { useContext, useEffect, useState } from 'react'
import { api } from '@/lib/axios'
import { Calendar } from '@/components/Calendar'

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
  const { name } = useContext(ChatGptContext)

  return (
    <main className="flex h-screen">
      <Aside />
      <div className="flex w-full max-w-[calc(100vw-200px)] flex-col gap-4 ">
        <Header name={name} description="Vamos viver saúdavel a partir de hoje " />
        <div className="grid h-full w-full grid-cols-contentHome gap-8 py-2">
          <div className="mt-auto">
            <h2 className="text-2xl font-bold leading-relaxed tracking-wide	 text-[#020617]">
              Receitas da refeição
            </h2>
            <div className="grid grid-cols-2 gap-8">
            <Receitas
                name="Arroz com lentilha"
                data={{
                  calories: 312,
                  carbohydrate: 27,
                  protein: 36,
                }}
                ingrediente1='Arroz 1 xícara'
                ingrediente2='Lentilha 1 xícara'
                ingrediente3='Cebola 1 unidade'
                ingrediente4='Alho 2 dentes'
                ingrediente5='Abobrinha 1 unidade'
                ingrediente6='Cenoura 1 unidade'
                ingrediente7='Ervilha 1 xícara'
                preparo='"Cozinhe o arroz integral e a lentilha separadamente. Em uma panela, refogue a cebola e o alho picados em um fio de azeite até ficarem dourados. Adicione a abobrinha e a cenoura picadas e a ervilha e refogue mais um pouco. Misture o arroz, a lentilha e os legumes na panela e mexa bem. Sirva."'
              />
               <Receitas
                name="Macarrão com almôndegas" 
                data={{
                  calories: 421,
                  carbohydrate: 40,
                  protein: 27,
                }}
                ingrediente1='Macarrão 100g'
                ingrediente2='Tomate pelado 1 lata'
                ingrediente3='Cebola 1 unidade'
                ingrediente4='Alho 2 dentes'
                ingrediente5='Peito de frango moído 200g'
                preparo='"Cozinhe o macarrão integral de acordo com as instruções da embalagem. Em uma panela, refogue a cebola e o alho picados em um fio de azeite até ficarem dourados. Adicione o tomate pelado e deixe cozinhar por alguns minutos. Tempere com sal e pimenta. Em uma tigela, misture o peito de frango moído com o pão integral ralado e temperos a gosto. Faça almôndegas e leve ao forno por cerca de 20 minutos. Sirva com o macarrão e o molho de tomate."'
              />
                <Receitas
                name="Frango com salada"
                data={{
                  calories: 210,
                  carbohydrate: 12,
                  protein: 34,
                }}
                ingrediente1='Peito de frango 150g'
                ingrediente2='Alface 1 xícara'
                ingrediente3='Cenoura ralada 1 unidade'
                ingrediente4='Tomate 1 unidade'
                preparo='"Misture todos os ingredientes em uma tigela. Tempere com sal, azeite e vinagre balsâmico."'

              />
              <Receitas
                name="Risoto de cogumelos"
                data={{
                  calories: 319,
                  carbohydrate: 24,
                  protein: 40,
                }}
                ingrediente1='Arroz 1 xícara'
                ingrediente2='Cogumelos 1 xícara'
                ingrediente3='Cebola 1 unidade'
                ingrediente4='Alho 2 dentes'
                ingrediente5='Queijo parmesão 1 colher de sopa'
                preparo='"Cozinhe o arroz integral de acordo com as instruções da embalagem. Em uma panela, refogue a cebola e o alho picados em um fio de azeite até ficarem dourados. Adicione os cogumelos picados e deixe cozinhar por alguns minutos. Misture o arroz e os cogumelos na panela e mexa bem. Acrescente o queijo parmesão ralado ao final e sirva."'
              />
            </div>
          </div>
          <div className=" w-full">
            <div className='h-1/5 w-full'>
            <Calendar />

            </div>
            
            <div className="flex flex-col gap-4 w-4/5">
              <h2 className="text-2xl font-bold leading-relaxed tracking-wide	 text-[#020617]">
                Programação do dia
              </h2>
              <TimeRecepies
                estado={<Sun size={32} />}
                name="Café da manhã"
                time="08:00"
              />
              <TimeRecepies
                estado={<Sun size={32} />}
                name="Almoço"
                time="13:00"
              />
              <TimeRecepies
                estado={<SunHorizon size={32} />}
                name="Lanche da tarde"
                time="15:30"
              />
              <TimeRecepies
                estado={<Moon size={32} />}
                name="Jantar"
                time="22:00"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}