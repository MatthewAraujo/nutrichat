import { Note, BowlFood, Gear, HouseSimple } from '@phosphor-icons/react'
import Link from 'next/link'
export function Aside() {
  return (
    <aside className=" flex h-full w-[200px] flex-col justify-between">
      <div className="w-full">
        <Link
          href="/"
          className="flex h-[140px] w-full items-center justify-center focus:bg-[#C9DBA3] "
        >
          <HouseSimple size={40} />
        </Link>
        <Link
          href="/dieta"
          className="flex h-[140px] w-full items-center justify-center focus:bg-[#C9DBA3]"
        >
          <Note size={40} />
        </Link>
        <Link
          href="/receitas"
          className="flex h-[140px] w-full items-center justify-center focus:bg-[#C9DBA3] "
        >
          <BowlFood size={40} />
        </Link>
      </div>
      <Link
        href="/"
        className=" mt-auto flex h-[140px] items-center justify-center "
      >
        <Gear size={40} />
      </Link>
    </aside>
  )
}
