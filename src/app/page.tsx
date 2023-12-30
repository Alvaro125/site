import Phone3D from "@/components/Phone3D";
import Image from "next/image";

export default function Home() {
    return (
        <main className="relative w-full flex sm:flex-row flex-col">
            <div className="flex-1 flex sm:items-end items-center justify-center flex-col">
                <div className="flex items-center sm:justify-end flex-col">
                    <h2 className="font-semibold text-4xl sm:ml-24 -mt-1">
                    Bem-vindo ao 
                    </h2>
                    <h1 className="font-bold sm:text-9xl text-8xl sm:mt-0 mt-4 tracking-wider mr-0">
                        P<span className="inline-block animation-logo">
                            <Image
                            className="sm:block hidden"
                                src="/logo_black.png"
                                width={90}
                                height={90}
                                alt="o"
                            />
                            <Image
                            className="sm:hidden block"
                                src="/logo_black.png"
                                width={60}
                                height={60}
                                alt="o"
                            />
                        </span>
                        int
                    </h1>
                    <h3 className="font-black text-2xl text-[#EB5E28] sm:w-[28rem] sm:text-right text-center">Sua Solução para Gerenciamento Eficiente de Listas de Presença e Organização de Salas de Aula!</h3>
                </div>
                    <p className="font-medium sm:text-right sm:px-0 sm:pl-10 mt-10 px-10">Estamos entusiasmados em apresentar o Point, uma aplicação progressiva projetada para atender às demandas da comunidade acadêmica da UFGD. O Point simplifica o gerenciamento de listas de presença e organizações gerais de salas de aula, proporcionando uma experiência rápida e eficaz.</p>
            </div>
            <div className="overflow-hidden relative sm:w-80 md:flex-1 sm:h-screen h-[40rem]">
              <div className="absolute left-[calc(50%_-_2.25rem)] top-[calc(50%_-_11.5rem)] flex flex-col items-center">
                <h1 className="font-black text-3xl">Nos</h1>
                <h1 className="font-black text-3xl">Vamos</h1>
                <h1 className="font-black text-2xl text-[#EB5E28]">em breve</h1>
              </div>
              <Phone3D/>
            </div>
        </main>
    );
}
