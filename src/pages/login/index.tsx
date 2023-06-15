import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  return (
    <main className="mx-auto flex h-screen max-w-[750px] items-center justify-center ">
      <div className="flex rounded-lg">
        <div
          dir="ltr "
          className="flex w-full flex-col gap-4 rounded-s-lg bg-greenBgLogin p-4"
        >
          <div>
            <span className=" text-4xl font-bold text-white ">Faça login</span>
            <p className="mt-1 text-white">
              Novo no site?{' '}
              <Link href="/signUp" className="text-greenSignUp underline ">
                Crie sua conta de graça
              </Link>
            </p>
          </div>
          <form action="" className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                className=" h-10 rounded-lg px-4 text-gray-800 outline-none"
                placeholder="Digite seu e-mail"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                className=" h-10 rounded-lg px-4 text-gray-800 outline-none"
                placeholder="Digite sua senha"
              />
            </div>
            <div className="mx-auto">
              <button
                className="mt-8 w-fit rounded-lg bg-greenBgButtonLogin p-1 px-20 text-center font-bold text-greenTextLogin"
                type="submit"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
        <div dir="rtl" className="w-full ">
          <Image
            src="/food.png"
            className="4 h-full w-full object-cover"
            alt="food"
            width={371}
            height={360}
          />
        </div>
      </div>
    </main>
  )
}
