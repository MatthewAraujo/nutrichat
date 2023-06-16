import { useContext } from 'react'
import { Aside } from '../../components/Aside'
import { Header } from '../../components/Header'
import { ChatGptContext } from '@/contexts/ChatGPTContext'

export default function Dieta() {
  const { name } = useContext(ChatGptContext)

  return (
    <main className="flex h-screen">
      <Aside />
      <div className="flex w-full max-w-[calc(100vw-200px)] flex-col gap-4 ">
        <Header description="Vamos ver sua dieta" name={name} />

        <div className=" grid h-full w-full grid-cols-2 bg-[#D9D9D9]">
          <div className=" flex h-full w-full flex-col items-center justify-center gap-4 p-8">
            <div className="mx-auto h-full w-full bg-[#E2E8F0] p-4">
              <h2 className="text-2xl font-bold text-black">
                Motivacao da dieta
              </h2>
              <p className="mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                obcaecati tempore, quaerat ex aperiam iste adipisci suscipit
                quas accusamus aspernatur error fugit quod illo voluptas. Illum
                et deleniti tenetur ab!
              </p>
            </div>
            <div className=" h-full w-full bg-[#E2E8F0] p-4">
              <h2 className="text-2xl font-bold text-black">
                Dados do usuario
              </h2>
              <p>Peso:79kg</p>
              <p>ALtura: 1.75cm</p>
              <p>Idade: 21 anos</p>
              <p>Sexo: Masculino</p>
              <p>Tipo de Dieta: Sem preferências</p>
              <p>Alergias: Chocolate</p>
            </div>
          </div>
          <div className=" py-8">
            <div className="h-full w-auto bg-[#E2E8F0] p-4 mr-4 flex flex-col justify-evenly">
              <h2 className="text-2xl font-bold text-black">Sua dieta</h2>
              <ul className='w-full flex flex-col mt-3'>
                <li className='text-sm font-bold'>Café da manhã</li>
                <ul className='grid grid-cols-2 place-items-center'> 
                    <li className='list-disc'>Aveia em Flocos 50g </li>
                    <li className='list-disc'>Leite 200ml</li>
                    <li className='list-disc'>Banana 1 unidade</li>
                    <li className='list-disc'>Canela 1 colher de chá</li>
                </ul>
              </ul>
              <ul>
                <li className='text-sm font-bold mt-4'>Almoço</li>
                <ul className='grid grid-cols-3 place-items-center'> 
                    <li className='list-disc'>Macarrão 100g</li>
                    <li className='list-disc'>Tomate pelado 1 lata</li>
                    <li className='list-disc'>Cebola 1 unidade</li>
                    <li className='list-disc'>Alho 2 dentes</li>
                    <li className='list-disc'>Peito de frango moído 200g</li>
                </ul>
              </ul>
              <ul>
                <li className='text-sm font-bold mt-4'>Lanche da tarde</li>
                  <ul className='grid grid-cols-3 place-items-center'> 
                    <li className='list-disc'>Iogurte 1 pote</li>
                    <li className='list-disc'>Granola 1/2 xícara</li>
                    <li className='list-disc'>Morango 5 unidades</li>
                  </ul>
              </ul>
              <ul>
                <li className='text-sm font-bold mt-4'>Jantar</li>
                  <ul className='grid grid-cols-3 place-items-center'> 
                    <li className='list-disc'>Peito de frango 150g</li>
                    <li className='list-disc'>Alface 1 xícara</li>
                    <li className='list-disc'>Rúcula 1 xícara</li>
                    <li className='list-disc'>Tomate 1/2 unidade</li>
                    <li className='list-disc'>Vinagrete a gosto</li>
                  </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

