import React from 'react';
import { Info } from '@phosphor-icons/react';
import * as Tooltip from '@radix-ui/react-tooltip';
interface TooltipProps {
  name: string;
}
export function TooltipForm({name}: TooltipProps){
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
      <Tooltip.Trigger asChild >
          <button className="text-greenBgCalendar shadow-blackA7 hover:bg-violet3 inline-flex h-[25px] w-[25px] items-center justify-center rounded-full bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-black">
            <Info size={22} />
          </button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
          <Tooltip.Content
            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-greenBgCalendar select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
            sideOffset={5}
          >
            {name}
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
    </Tooltip.Provider>
  )
}