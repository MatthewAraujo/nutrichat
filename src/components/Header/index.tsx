import { EnvelopeSimple } from '@phosphor-icons/react'
import { Perfil } from '../AvatarIcon'
interface HeaderProps {
  name: string | null | any
  description: string | null | any
}
export function Header({ name, description }: HeaderProps) {
  return (
    <div className="flex w-full items-center justify-between px-5 h-[123px]">
      <div>
        <h2 className="text-3xl font-bold leading-relaxed tracking-wide	 text-[#020617]">
          Olá, {name}
        </h2>
        <p className="font-bold text-[#9CA3AF]">{description}</p>
      </div>
      <div className="flex items-center gap-6">
        <EnvelopeSimple size={22} />
        <Perfil />
      </div>
    </div>
  )
}
