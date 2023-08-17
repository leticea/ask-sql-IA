import Image from "next/image";
import logoImage from "../assets/logo.svg";
import { Trash2, Stars } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-[430px] mx-auto pt-12 pb-4">
      <header className="flex items-center justify-between">
        <Image src={logoImage} alt="" />

        <button>
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>

      <form className="py-8 w-full flex flex-col text-foam">
        <label htmlFor="schema">Cole o seu código SQL aqui:</label>
        <textarea
          name="schema"
          id="schema"
          className="my-4 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lime-600"
        />

        <label htmlFor="question">Faça uma pergunta sobre o código:</label>
        <textarea
          name="question"
          id="question"
          className="my-4 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lime-600"
        />

        <button type="submit" className="text-pistachio">
          <Stars className="w-6 h-6" />
          Perguntar à inteligência artificial
        </button>
      </form>

      <div>
        <span>Resposta:</span>
        <textarea className="my-4" />
      </div>
    </div>
  );
}
