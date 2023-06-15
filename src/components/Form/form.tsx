import { ChatGptContext } from '@/contexts/ChatGPTContext'
import { useContext } from 'react'

export function Form() {
  const { handleSubmit, inputValue, setInputValue } = useContext(ChatGptContext)

  return (
    <>
      <h1>ChatGPT</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-red-300 h-90 text-cyan-400"
        />
        <button type="submit">Send</button>
      </form>
    </>
  )
}
