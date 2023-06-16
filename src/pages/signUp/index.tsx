import { ChatGptContext } from '@/contexts/ChatGPTContext'
import Image from 'next/image'
import { useContext } from 'react'

export default function SignUp() {
  const {name,setName, email, setEmail, password, setPassword, handleCreateAcount} = useContext(ChatGptContext)
  return (
    <main className="mx-auto flex h-screen max-w-[830px] items-center justify-center ">
      <div className="flex rounded-lg">
        <div  className="w-full">
          <Image
            src="/food.png"
            className="h-full w-full rounded-s-lg object-cover"
            alt="food"
            width={371}
            height={360}
          />
        </div>
        <div
          className="flex w-full flex-col gap-4 rounded-e-lg bg-greenBgLogin p-4 text-left"
        >
          <div>
            <span className=" text-4xl font-bold text-white ">
              Crie sua conta
            </span>
          </div>
          <form action="" onSubmit={handleCreateAcount} className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Nome</label>
              <input
                className=" h-10 rounded-lg px-4 text-gray-800 outline-none placeholder:text-left"
                placeholder="Digite seu e-mail"
                value={name}
                onChange={(e)=>[setName(e.target.value)]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                className=" h-10 rounded-lg px-4 text-gray-800 outline-none placeholder:text-left"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e)=>[setEmail(e.target.value)]}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                className=" h-10 rounded-lg px-4 text-gray-800 outline-none placeholder:text-left"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e)=>[setPassword(e.target.value)]}
              />
            </div>
            <div className="mx-auto">
              <button
              disabled={name === '' || email === '' || password === ''}
                className="mt-8 w-fit rounded-lg bg-greenBgButtonLogin p-1 px-14 text-center font-bold text-greenTextLogin disabled:bg-slate-700 disabled:cursor-not-allowed"
                type="submit"
              >
                Criar sua conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
