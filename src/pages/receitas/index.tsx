import { useContext } from 'react'
import { Aside } from '../../components/Aside'
import { Header } from '../../components/Header'
import { Receitas } from '../../components/Receitas'
import { ChatGptContext } from '@/contexts/ChatGPTContext'

export default function ReceitasDiary() {
  const { name } = useContext(ChatGptContext)
  return (
    <main className="flex h-screen">
      <Aside />
      <div className="flex w-full max-w-[calc(100vw-200px)]  flex-col gap-4 ">
        <Header description="Vamos ver sua algumas receitas" name={name} />
        <div className="flex h-full flex-col bg-[#D9D9D9] justify-evenly px-3">
          <div className="flex flex-col gap-2">
            <h2>Café da manha</h2>
            <div className="flex justify-around ">
              <Receitas
                name="Aveia com banana"
                data={{
                  calories: 332 ,
                  carbohydrate: 63,
                  protein: 8,
                }}
                ingrediente1='Aveia em Flocos 50g'
                ingrediente2='Leite 200ml'
                ingrediente3='Banana 1 unidade'
                ingrediente4='Canela 1 colher de chá'
                preparo="Misture a aveia com o leite de amêndoas e leve ao fogo até formar um mingau. Sirva em uma tigela com a banana cortada em rodelas e a canela por cima."
              />
              <Receitas
                name="Sanduíche"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Pão integral 2 fatias'
                ingrediente2='Queijo branco 2 fatia'
                ingrediente3='Tomate 1 unidade'
                ingrediente4='Alface 1 folha'
                preparo="Monte o sanduíche com o queijo e o tomate entre as fatias de pão integral. Leve ao forno para que o queijo derreta um pouco."
              />
              <Receitas
                name="Vitamina"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Leite 200ml'
                ingrediente2='Morangos 10 unidades'
                ingrediente3='Banana 1 unidade'
                ingrediente4='Açúcar 1 colher de sopa'
                preparo="Bata todos os ingredientes no liquidificador até ficar homogêneo. Sirva em um copo."
              />
              <Receitas
                name="Omelete"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Ovo 2 unidades'
                ingrediente2='Brócolis 1 xícara'
                ingrediente3='Cebola 1/4 unidade'
                ingrediente4='Queijo branco 2 fatias'
                preparo="Bata os ovos em uma tigela. Adicione o brócolis picado e as fatias de queijo. Misture bem. Despeje a mistura em uma frigideira aquecida e espere até que a omelete esteja firme. Sirva."
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Almoço</h2>
            <div className="flex justify-around ">
              <Receitas
                name="Arroz com lentilha"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Arroz 1 xícara'
                ingrediente2='Lentilha 1 xícara'
                ingrediente3='Cebola 1 unidade'
                ingrediente4='Alho 2 dentes'
                ingrediente5='Abobrinha 1 unidade'
                ingrediente6='Cenoura 1 unidade'
                ingrediente7='Ervilha 1 xícara'
                preparo='"Cozinhe o arroz integral e a lentilha separadamente. Em uma panela, refogue a cebola e o alho picados em um fio de azeite até ficarem dourados. Adicione a abobrinha e a cenoura picadas e a ervilha e refogue mais um pouco. Misture o arroz, a lentilha e os legumes na panela e mexa bem. Sirva."'
              />
              <Receitas
                name="Macarrão com almôndegas" 
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Macarrão 100g'
                ingrediente2='Tomate pelado 1 lata'
                ingrediente3='Cebola 1 unidade'
                ingrediente4='Alho 2 dentes'
                ingrediente5='Peito de frango moído 200g'
                preparo='"Cozinhe o macarrão integral de acordo com as instruções da embalagem. Em uma panela, refogue a cebola e o alho picados em um fio de azeite até ficarem dourados. Adicione o tomate pelado e deixe cozinhar por alguns minutos. Tempere com sal e pimenta. Em uma tigela, misture o peito de frango moído com o pão integral ralado e temperos a gosto. Faça almôndegas e leve ao forno por cerca de 20 minutos. Sirva com o macarrão e o molho de tomate."'
              />
              <Receitas
                name="Frango com salada"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Peito de frango 150g'
                ingrediente2='Alface 1 xícara'
                ingrediente3='Cenoura ralada 1 unidade'
                ingrediente4='Tomate 1 unidade'
                preparo='"Misture todos os ingredientes em uma tigela. Tempere com sal, azeite e vinagre balsâmico."'

              />
              <Receitas
                name="Risoto de cogumelos"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Arroz 1 xícara'
                ingrediente2='Cogumelos 1 xícara'
                ingrediente3='Cebola 1 unidade'
                ingrediente4='Alho 2 dentes'
                ingrediente5='Queijo parmesão 1 colher de sopa'
                preparo='"Cozinhe o arroz integral de acordo com as instruções da embalagem. Em uma panela, refogue a cebola e o alho picados em um fio de azeite até ficarem dourados. Adicione os cogumelos picados e deixe cozinhar por alguns minutos. Misture o arroz e os cogumelos na panela e mexa bem. Acrescente o queijo parmesão ralado ao final e sirva."'
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Lanche</h2>
            <div className="flex justify-around ">
              <Receitas
                name="Iogurte com granola"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Iogurte 1 pote'
                ingrediente2='Granola 1/2 xícara'
                ingrediente3='Morangos 5 unidades'
                ingrediente4='Mel 1 colher de sopa'
                preparo='"Misture o iogurte com a granola em um pote. Adicione os morangos picados por cima."'
              />
              <Receitas
                name="Sanduiche"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Pão integral 2 fatias'
                ingrediente2='Queijo branco 2 fatia'
                ingrediente3='Tomate 1 unidade'
                ingrediente4='Peito de peru 2 fatias'
                preparo='"Monte o sanduíche com o queijo e o peito de peru entre as fatias de pão integral."'


              />
              <Receitas
                name="Smoothie"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Leite 200ml'
                ingrediente2='Abacate 1/2 unidades'
                ingrediente3='Banana 1 unidades'
                ingrediente4='Açúcar 1 colher de sopa'
                preparo='"Bata todos os ingredientes no liquidificador até ficar homogêneo. Sirva em um copo."'
              />
              <Receitas
                name="Torrada com atum"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Pão integral 2 fatias'
                ingrediente2='Atum 1 lata'
                ingrediente3='Cebola 1/4 unidade'
                ingrediente4='Salsinha 1 colher de sopa'
                preparo="Misture o atum em conserva, a cebola picada e a salsinha em uma tigela. Passe o patê sobre as fatias de pão integral. Leve ao forno para que a torrada fique crocante."
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2>Jantar</h2>
            <div className="flex justify-around ">
              <Receitas
                name="Strogonoff de frango"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Peito de frango 200g'
                ingrediente2='Cebola 1 unidade'
                ingrediente3='Alho 2 dentes'
                ingrediente4='Molho de tomate 1 xícara'
                ingrediente5='Creme de leite 1/2 xícara'
                ingrediente6='Cogumelos 1 xícara'
                
                preparo="Cozinhe o arroz integral de acordo com as instruções da embalagem. Em um panela, refogue a cebola e o alho picados em um fio de azeite até ficarem dourados. Adicione o frango e deixe dourar por alguns minutos. Adicione os cogumelos picados e misture. Adicione o molho de tomate e deixe cozinhar por alguns minutos. Por fim, misture o creme de leite e sirva com o arroz integral."
                
              />
              <Receitas
                name="Tortilha"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Ovo 2 unidades'
                ingrediente2='Cenoura ralada 2 unidade'
                ingrediente3='Tomate picado 1 unidade'
                ingrediente4='Abobrinha picada 1 unidade'
                ingrediente5='Queijo branco picado 2 fatias'
                preparo="Bata os ovos em uma tigela. Adicione os legumes picados e o queijo branco e misture. Despeje a mistura em uma frigideira aquecida e deixe cozinhar até que a tortilha esteja firme. Vire para que cozinhe do outro lado. Sirva."

              />
              <Receitas
                name="Salmão grelhado"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Salmão 150g'
                ingrediente2='Brócolis 1 xícara'
                ingrediente3='Cenoura 1 unidade'
                ingrediente4='Pimentão 1 unidade'
                preparo="Tempere o salmão com sal e pimenta a gosto. Grelhe em uma frigideira antiaderente até que esteja cozido por dentro e crocante por fora. Corte os legumes em pedaços pequenos e cozinhe no vapor por alguns minutos. Sirva o salmão com os legumes."
              />
              <Receitas
                name="Frango grelhado"
                data={{
                  calories: 100,
                  carbohydrate: 12,
                  protein: 11,
                }}
                ingrediente1='Peito de frango 150g'
                ingrediente2='Alface 1 xícara'
                ingrediente3='Rucula  1 xícara'
                ingrediente4='Tomate 1 unidade'
                preparo='"Grelhe o peito de frango em uma frigideira antiaderente. Sirva com a salada verde temperada com vinagrete."'
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
