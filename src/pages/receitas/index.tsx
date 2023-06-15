import { Aside } from '../../components/Aside'
import { Header } from '../../components/Header'
import { Receitas } from '../../components/Receitas'

export default function ReceitasDiary() {
  return (
    <main className="flex h-screen">
      <Aside />
      <div className="flex w-full max-w-[calc(100vw-200px)] flex-col gap-4 ">
        <Header description="Vamos ver sua algumas receitas" name="Matthew" />
        <div className="flex h-full flex-col justify-evenly">
          <div className="flex flex-col gap-2">
            <h2>Café da manha</h2>
            <div className="flex justify-around ">
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Almoço</h2>
            <div className="flex justify-around ">
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Lanche</h2>
            <div className="flex justify-around ">
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Jantar</h2>
            <div className="flex justify-around ">
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
              <Receitas
                name="iogurte"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
