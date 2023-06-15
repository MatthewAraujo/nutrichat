import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { BowlFood, Pizza, Fish } from '@phosphor-icons/react'

interface ReceitaProps {
  name: string
  data: {
    protein: number
    carbohydrate: number
    calories: number
  }
}

export function Receitas({ name, data }: ReceitaProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="flex cursor-pointer gap-4 rounded-lg bg-[#E2E8F0] p-3">
          <div className="w-16 rounded-full bg-white p-1 flex items-center justify-center ">
            <BowlFood size={42} />
          </div>
          <div className="w-full  capitalize">
            <p className="text-lg font-bold">{name}</p>
            <div className="flex w-full justify-between">
              <p className="flex items-center gap-2 pt-2 text-sm text-[#9CA3AF]">
                {data.calories}kcal
              </p>
              <p className="flex items-center gap-2 pt-2 text-sm text-[#9CA3AF]">
                <Fish />
                {data.protein}mg
              </p>
              <p className="flex items-center gap-2 pt-2 text-sm text-[#9CA3AF]">
                <Pizza />
                {data.carbohydrate}mg
              </p>
            </div>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-blackA9 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[750px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-medium capitalize text-mauve12">
            {name}
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-[10px] flex gap-2  text-[15px] leading-normal text-mauve11 ">
            <div className="w-1/2  px-4">
              <h2 className="text-lg font-bold text-black">Ingredientes</h2>
              <ul className=" h-full list-disc">
                <li className="pt-6">
                  2 xícaras de leite (pode ser leite de vaca, leite vegetal ou
                  iogurte natural)
                </li>
                <li className="pt-6">
                  1 colher de sopa de mel ou outro adoçante a gosto
                </li>
                <li className="pt-6">Frutas frescas para servir (opcional)</li>
                <li className="pt-6">
                  1 colher de sopa de mel ou outro adoçante a gosto
                </li>
              </ul>
            </div>
            <div className=" w-1/2">
              <h2 className="text-lg font-bold text-black">Modo de preparo</h2>
              <ul className="list-decimal text-sm ">
                <li>
                  Em uma panela pequena, aqueça o leite em fogo médio até ficar
                  morno. Não deixe ferver.
                </li>
                <li>Adicione a aveia em flocos ao leite morno e mexa bem. </li>
                <li>
                  Cubra a panela com uma tampa ou pano de prato limpo e deixe
                  descansar por cerca de 10 minutos. Isso permitirá que a aveia
                  absorva parte do líquido.
                </li>
                <li>
                  Após os 10 minutos, adicione o mel ou outro adoçante de sua
                  preferência e mexa novamente.
                </li>
                <li>
                  Despeje o conteúdo da panela em potes de vidro esterilizados
                  ou em um recipiente de vidro com tampa hermética.
                </li>
                <li>
                  Cubra os potes ou recipientes com papel filme ou tampa e
                  coloque-os em um local quente da sua cozinha, como dentro do
                  forno desligado, por exemplo.
                </li>
                <li>
                  Deixe descansar por cerca de 6 a 8 horas, ou até que o iogurte
                  tenha engrossado e adquirido uma consistência cremosa. Depois
                  que o iogurte tiver fermentado pelo tempo desejado, coloque-o
                  na geladeira para esfriar e firmar por pelo menos 1 hora.
                </li>
                <li>
                  Quando estiver pronto para servir, você pode adicionar frutas
                  frescas por cima do iogurte, se desejar.
                </li>
              </ul>
            </div>
          </Dialog.Description>

          <div className="mt-[25px] flex justify-end"></div>
          <Dialog.Close asChild>
            <button
              className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
