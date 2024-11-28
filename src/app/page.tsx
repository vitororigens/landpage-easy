"use client";

import { Home } from "./Home";
import { About } from "./About";
import { Solutions } from "./Solutions";
import { Depoiments } from "./Depoiments";
import { Faq } from "./Faq";
import { Footer } from "./Footer";

export default function App() {


  return (
    <main>
      <Home/>
      <About/>
      <Solutions/>
      <Depoiments/>
      <Faq/>
      <Footer/>
    </main>
  );
}
