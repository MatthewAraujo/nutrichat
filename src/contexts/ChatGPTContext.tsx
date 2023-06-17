import axios from 'axios'
import { useRouter } from 'next/router'
import {
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'

interface ChatGptContextType {
  sendMessage: (messages: string) => Promise<any>
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  botResponse: string
  name: string
  setName: Dispatch<SetStateAction<string>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  password: string
  setPassword: Dispatch<SetStateAction<string>>
  handleCreateAcount: (e: any) => void
  peso: string
  setPeso: Dispatch<SetStateAction<string>>
  idade: string
  setIdade: Dispatch<SetStateAction<string>>
  renda: string
  setRenda: Dispatch<SetStateAction<string>>
  alergias: string
  setAlergias: Dispatch<SetStateAction<string>>
  altura: string
  setAltura: Dispatch<SetStateAction<string>>
  sexo: string
  setSexo: Dispatch<SetStateAction<string>>
  dieta: string
  setDieta: Dispatch<SetStateAction<string>>
  preferencias: string
  setPreferencias: Dispatch<SetStateAction<string>>
  objetivo: string
  setObjetivo: Dispatch<SetStateAction<string>>
  handleCreateData: (e: any) => void


}

interface ChatGPTProviderProps {
  children: ReactNode
}
export const ChatGptContext = createContext({} as ChatGptContextType)

export function ChatGptProvider({ children }: ChatGPTProviderProps) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [peso, setPeso] = useState('')
  const [idade, setIdade] = useState('')
  const [renda, setRenda] = useState('')
  const [alergias, setAlergias] = useState('')
  const [altura, setAltura] = useState('')
  const [sexo, setSexo] = useState('')
  const [dieta, setDieta] = useState('')
  const [preferencias, setPreferencias] = useState('')
  const [objetivo,setObjetivo] = useState('')
  const message = `
  Agora és um treinador especializado em nutrição. Vou pedir-lhe que me ajude a elaborar um plano alimentício baseado nos meus dados. Irei te dar dados para trabalhar, esses dados serão relacionados ao peso, altura, idade, tipo de dieta,  duração do plano, preferencias, objetivos, alergias, quantas refeições ao dia quero fazer, renda salarial . Toda sua busca sobre a dieta eu espero uma resposta pormenorizada e bem argumentada, apoiada por números precisos. O plano também deve ser especificado em pormenor (que quantidade, que tipo de alimentos, que plano diário, as minhas preferências, objetivo, nutrição e mental. Em relação a renda salarial, gostaria que levasse em conta aos preços médios dos produtos encontrados baseado na renda salarial, a dieta tem que ser algo que mensalmente custe 2/3 da renda salarial. Para cada refeição faça 4 receitas diferentes para que eu possa escolher qual fazer no dia, essas 4 receitas terão que conter as quantidades, ingredientes e como preparar a refeição 
  Espero que seja sério, intransigente, compreensivo e encorajador.

  Os dados que você deve levar em consideração são esses: 
  Peso: ${peso}kg
  Altura: ${altura}cm
  Idade: ${idade} anos
  Tipo de dieta: ${dieta}
  Duração do plano: 1 mês
  preferencias: ${preferencias}
  Objetivo: ${objetivo}
  Alergia: ${alergias}
  Refeições: 4 por dia
  Renda: R$${renda}

Para me dar a resposta desse resultado vocé vai funcionar como uma API, estou fazendo a requisição e voce vai me retornar APENAS um JSON com todas as respostas

`

  const [botResponse, setBotResponse] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    sendMessage(message).then((botResponse) => {
      // Faça algo com a resposta do ChatGPT
      setBotResponse(botResponse)
    })

  }
  const sendMessage = (message: string) => {
    const url = '/api/hello'
    const data = {
      model: 'gpt-3.5-turbo-0301',
      messages: [{ role: 'user', content: message }],
    }

    return axios
      .post(url, data)
      .then((response) => {
        const botResponse = response.data.choices[0].message.content

        return botResponse // Retornando a resposta do ChatGPT
      })
      .catch((error) => {
        console.log(error)
      })
  }

  function handleCreateData(e: any) {
    e.preventDefault()
    setPeso(peso)
    setIdade(idade)
    setRenda(renda)
    setAlergias(alergias)
    setAltura(altura)
    setSexo(sexo)
    setDieta(dieta)
    setPreferencias(preferencias)
    setObjetivo(objetivo)

    handleSubmit(e)


    router.push('/')
  }

  function handleCreateAcount(e: any) {
    e.preventDefault()
    setName(name)
    setEmail(email)
    setPassword(password)
    setUser(name)
    router.push('/cadastro')
    return { name, email, password }
  }

  function setUser(name: string) {
    localStorage.setItem('user', JSON.stringify(name));
  }

  return (
    <ChatGptContext.Provider
      value={{
        sendMessage,
        handleSubmit,
        botResponse,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        handleCreateAcount,
        peso,
        setPeso,
        idade,
        setIdade,
        renda,
        setRenda,
        alergias,
        setAlergias,
        altura,
        setAltura,
        sexo,
        setSexo,
        dieta,
        setDieta,
        preferencias,
        setPreferencias,
        objetivo,
        setObjetivo,

        handleCreateData
      }}
    >
      {children}
    </ChatGptContext.Provider>
  )
}
