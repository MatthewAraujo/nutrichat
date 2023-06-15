import { User } from '@phosphor-icons/react'
import * as Avatar from '@radix-ui/react-avatar'
import React from 'react'
export function Perfil() {
  return (
    <Avatar.Root>
      <Avatar.Image
        src="https://github.com/MatthewAraujo.png"
        alt="avatar"
        className="h-full max-h-11 w-full  rounded-full object-cover"
      />
      <Avatar.Fallback className="flex h-full w-full items-center justify-center rounded-full">
        <User />
      </Avatar.Fallback>
    </Avatar.Root>
  )
}
