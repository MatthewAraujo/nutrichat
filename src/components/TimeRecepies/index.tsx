interface TimeRecepiesProps {
  time: string
  name: string
  estado: any
}

export function TimeRecepies({ time, name, estado }: TimeRecepiesProps) {
  return (
    <div className="flex gap-4 rounded-lg  p-3">
      <div className="rounded-full px-2 bg-[#facc15] flex items-center justify-center  ">
        {estado}
      </div>
      <div className=" font-bold">
        <p>{name}</p>
        <time> {time}</time>
      </div>
    </div>
  )
}
