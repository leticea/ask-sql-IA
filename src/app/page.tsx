"use client";

import { useState } from "react";
import Image from "next/image";
import logoImage from "../assets/logo.svg";
import { Trash2, Stars } from "lucide-react";
import Editor from "react-simple-code-editor";

import { highlight, languages } from "prismjs";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism-dark.css";
import { inherits } from "util";

export default function Home() {
  const [code, setCode] = useState("");

  return (
    <div className="max-w-[430px] mx-auto px-4 pt-12 pb-4">
      <header className="flex items-center justify-between">
        <Image src={logoImage} alt="" />

        <button>
          <Trash2 className="h-8 w-8 text-snow" strokeWidth={0.8} />
        </button>
      </header>

      <form className="py-8 w-full flex flex-col text-foam">
        <label htmlFor="schema" className="text-lg font-light">
          Cole o seu código SQL aqui:
        </label>

        <Editor
          textareaId="schema"
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.sql, "sql")}
          padding={16}
          textareaClassName="outline-none "
          className="my-4 h-40 font-mono bg-blueberry-600 border border-blueberry-300 rounded-md focus-within:ring-1 focus-within:ring-lime-600"
          style={{ overflowY: "scroll"}}
        />

        <label htmlFor="question" className="text-lg font-light">
          Faça uma pergunta sobre o código:
        </label>
        <textarea
          name="question"
          id="question"
          className="my-4 bg-blueberry-600 border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lime-600"
        />

        <button
          type="submit"
          className="text-pistachio flex items-center justify-center rounded-lg border boder-pistachio h-14 gap-2"
        >
          <Stars className="w-6 h-6" />
          Perguntar à inteligência artificial
        </button>
      </form>

      <div className="mt-6">
        <span className="text-lg font-light text-foam">Resposta:</span>
        <textarea
          readOnly
          className="my-4 w-full bg-transparent border border-blueberry-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lime-600"
        />
      </div>
    </div>
  );
}
