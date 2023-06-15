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
  inputValue: string
  setInputValue: Dispatch<SetStateAction<string>>
  botResponse: string
  name: string
  setName: Dispatch<SetStateAction<string>>
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  password: string
  setPassword: Dispatch<SetStateAction<string>>
  handleCreateAcount: (e: any) => void
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

  const [inputValue, setInputValue] = useState('')
  const [botResponse, setBotResponse] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    sendMessage(inputValue).then((botResponse) => {
      // Faça algo com a resposta do ChatGPT
      setBotResponse(botResponse)
    })

    setInputValue('')
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
        inputValue,
        setInputValue,
        botResponse,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        handleCreateAcount,
      }}
    >
      {children}
    </ChatGptContext.Provider>
  )
}
