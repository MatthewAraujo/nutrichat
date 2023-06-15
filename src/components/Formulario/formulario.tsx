import { TooltipForm } from "@/components/Tooltip/Tooltip";

export function Formulario() {
  return (
    <form action="" className="w-full grid grid-cols-1 h-full px-4">
      <div className="grid grid-cols-2 h-full gap-8 w-full">
        <div className="flex flex-col justify-around">
          <div className="flex justify-center items-center gap-8">
            <label htmlFor="">Digite seu peso em Kg</label>
            <input type="text" className="rounded-md " />
          </div>
          <div className="flex justify-center items-center gap-8">
            <label htmlFor="">Digite sua Idade</label>
            <input type="text" className="rounded-md " />
          </div>
          <div className="flex justify-center items-center gap-8">
            <label htmlFor="">Digite aproximadamente sua renda</label>
            <input type="text" className="rounded-md " />
          </div>
         <div className="flex justify-center items-center gap-8">
            <label htmlFor="">Digite suas alergias</label>
            <input type="text" className="rounded-md " />
            <TooltipForm name="por exemplo: Manga, chocolate, aveia"/>

          </div>
         </div>
        <div className="flex flex-col justify-around">
          <div className="flex justify-center items-center gap-8">
            <label htmlFor="">Digite sua altura em cm</label>
            <input type="text" className="rounded-md " />
          </div>
          <div className="flex justify-center items-center gap-8">
            <label htmlFor="">Digite seu sexo</label>
            <input type="text" className="rounded-md " />
            <TooltipForm name="por exemplo: Masculino ou Feminino"/>

          </div>
          <div className="flex justify-center items-center gap-8">
            <label htmlFor="">Digite seu tipo de dieta</label>
            <input type="text" className="rounded-md " />
            <TooltipForm name="por exemplo: Vegana, Vegetariana, Carnivora"/>

          </div>
          <div className="flex justify-center items-center gap-8">
            <label htmlFor="">Digite suas preferencias</label>
            <input type="text" className="rounded-md " />
            <TooltipForm name="por exemplo: Pão frances, legumes, frango"/>

          </div>
          </div>
      </div>
    </form>
  )
}