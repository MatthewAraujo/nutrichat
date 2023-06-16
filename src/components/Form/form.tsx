import { ChatGptContext } from '@/contexts/ChatGPTContext'
import { useContext } from 'react'

export function Form() {
  const { handleSubmit } = useContext(ChatGptContext)

  return (
    <>
      <h1>ChatGPT</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-red-300 h-90 text-cyan-400"
        />
        <button type="submit">Send</button>
      </form>
    </>
  )
}
