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
  ingrediente1: string
  ingrediente2: string
  ingrediente3: string
  ingrediente4: string
  ingrediente5?: string
  ingrediente6?: string
  ingrediente7?: string
  ingrediente8?: string



  preparo: string
}

export function Receitas({ name, data, ingrediente1,ingrediente2,ingrediente3,ingrediente4, ingrediente5, ingrediente6, ingrediente7, ingrediente8 ,preparo }: ReceitaProps) {
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
        <Dialog.Overlay className="fixed inset-0 z-10 bg-blackA9 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[750px] z-50 translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-[17px] font-medium capitalize text-mauve12">
            {name}
          </Dialog.Title>
          <Dialog.Description className="mb-5 mt-[10px] flex gap-2  text-[15px] leading-normal text-mauve11 ">
            <div className="w-1/2  px-4">
              <h2 className="text-lg font-bold text-black">Ingredientes</h2>
              <ul className=" h-full list-disc">
                <li className="pt-6">
                  {ingrediente1}
                </li>
                <li className="pt-6">
                  {ingrediente2}
                </li>
                <li className="pt-6">{ingrediente3}</li>
                <li className="pt-6">
                  {ingrediente4}
                </li>
                {ingrediente5 && (
                    <li className="pt-6">
                    {ingrediente5}
                     </li>
                )}
                
                {ingrediente6 && (
                  <li className="pt-6">
                  {ingrediente6}
                </li>
                )}
                {
                  ingrediente7 && (
                    <li className="pt-6">
                      {ingrediente7}
                    </li>
                  )
                }
                {
                  ingrediente8 && (
                    <li className="pt-6">
                      {ingrediente8}
                    </li>
                  )
                }
              </ul>
            </div>
            <div className=" w-1/2">
              <h2 className="text-lg font-bold text-black">Modo de preparo</h2>
              <p>{preparo}</p>
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
