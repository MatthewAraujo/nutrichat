import { TooltipForm } from "@/components/Tooltip/Tooltip";
import { ChatGptContext } from "@/contexts/ChatGPTContext";
import { useContext } from "react";

export function Formulario() {
  const { handleCreateData, idade, setIdade, peso, setPeso, renda,setRenda, alergias,setAlergias, altura,setAltura, sexo, setSexo,dieta,setDieta,preferencias,setPreferencias ,objetivo,setObjetivo} = useContext(ChatGptContext)

  return (
    <form action="" onSubmit={handleCreateData}className="w-full  h-full px-4">
      <div className="flex h-96 justify-center gap-52 w-full">
        <div className="flex flex-col justify-around">
          <div className="flex justify-center items-center gap-8">
            <label htmlFor="">Digite seu peso em Kg</label>
            <input type="text" className="rounded-md " value={peso} onChange={(e)=>[setPeso(e.target.value)] }  />
            <TooltipForm name="Por exemplo: 76"/>

          </div>
          <div className="flex justify-center items-center gap-8">
            <label htmlFor="">Digite sua Idade</label>
            <input type="text" className="rounded-md "  value={idade} onChange={(e)=>[setIdade(e.target.value)] }/>
            <TooltipForm name="Por exemplo: 21"/>

          </div>
          <div className="flex justify-center items-center gap-8">
            <label htmlFor="">Digite aproximadamente sua renda</label>
            <input type="text" className="rounded-md " value={renda} onChange={(e)=>[setRenda(e.target.value)] } />
            <TooltipForm name="Por exemplo: 1200"/>

          </div>
            <div className="flex justify-center items-center gap-8">
                <label htmlFor="">Digite suas alergias</label>
                <input type="text" className="rounded-md " value={alergias} onChange={(e)=>[setAlergias(e.target.value)] } />
                <TooltipForm name="Por exemplo: Manga, chocolate, aveia"/>

            </div>
         </div>
         
        <div className="flex flex-col justify-around">
            <div className="flex justify-center items-center gap-8">
              <label htmlFor="">Digite sua altura em cm</label>
              <input type="text" className="rounded-md " value={altura} onChange={(e)=>[setAltura(e.target.value)] }/>
              <TooltipForm name="Por exemplo: 1.75"/>

            </div>
            <div className="flex justify-center items-center gap-8">
              <label htmlFor="">Digite seu sexo</label>
              <input type="text" className="rounded-md " value={sexo} onChange={(e)=>[setSexo(e.target.value)] }/>
              <TooltipForm name="Por exemplo: Masculino ou Feminino"/>

            </div>
            <div className="flex justify-center items-center gap-8">
              <label htmlFor="">Digite seu tipo de dieta</label>
              <input type="text" className="rounded-md " value={dieta} onChange={(e)=>[setDieta(e.target.value)] }/>
              <TooltipForm name="Por exemplo: Vegana, Vegetariana, Carnivora"/>

            </div>
            <div className="flex justify-center items-center gap-8">
              <label htmlFor="">Digite suas preferencias</label>
              <input type="text" className="rounded-md " value={preferencias} onChange={(e)=>[setPreferencias(e.target.value)] }/>
              <TooltipForm name="Por exemplo: Pão frances, legumes, frango"/>
            </div>
            <div className="flex justify-center items-center gap-8">
              <label htmlFor="">Digite seu objetivo</label>
              <input type="text" className="rounded-md " value={objetivo} onChange={(e)=>[setObjetivo(e.target.value)] }/>
              <TooltipForm name="Por exemplo: Ganhar musculos, me alimentar melhor, emagrecer"/>
            </div>    
          </div>
      </div>
      <button 
        type="submit" 
        disabled={peso === '' || idade === '' || renda === '' || alergias === '' || altura === '' || sexo === '' || dieta === '' || preferencias === '' || objetivo === ''}
        className="mt-auto w-fit h-10 rounded-lg bg-greenBgButtonLogin p-1 px-14 text-center 
        font-bold text-greenTextLogin disabled:bg-slate-700 disabled:cursor-not-allowed">
        Cadastrar
      </button>
      
      

    </form>
  )
}