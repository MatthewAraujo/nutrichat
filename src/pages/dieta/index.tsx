import { Aside } from '../../components/Aside'
import { Header } from '../../components/Header'

export default function Dieta() {
  return (
    <main className="flex h-screen">
      <Aside />
      <div className="flex w-full max-w-[calc(100vw-200px)] flex-col gap-4 ">
        <Header description="Vamos ver sua dieta" name="Matthew" />

        <div className=" grid h-full w-full grid-cols-2 bg-[#D9D9D9]">
          <div className=" flex h-full w-full flex-col items-center justify-center gap-4 p-8">
            <div className="mx-auto h-full w-full bg-[#E2E8F0] p-4">
              <h2 className="text-2xl font-bold text-black">
                Motivacao da dieta
              </h2>
              <p className="mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                obcaecati tempore, quaerat ex aperiam iste adipisci suscipit
                quas accusamus aspernatur error fugit quod illo voluptas. Illum
                et deleniti tenetur ab!
              </p>
            </div>
            <div className=" h-full w-full bg-[#E2E8F0] p-4">
              <h2 className="text-2xl font-bold text-black">
                Dados do usuario
              </h2>
              <p className="mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                obcaecati tempore, quaerat ex aperiam iste adipisci suscipit
                quas accusamus aspernatur error fugit quod illo voluptas. Illum
                et deleniti tenetur ab!
              </p>
            </div>
          </div>
          <div className=" py-8">
            <div className="h-full w-auto bg-[#E2E8F0] p-4 mr-4">
              <h2 className="text-2xl font-bold text-black">Sua dieta</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
