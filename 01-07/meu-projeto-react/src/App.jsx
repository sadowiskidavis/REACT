
import './App.css'
import BotaoDoDavis from './components/BotaoDoDavis'
import Header from './components/Header'
import Hero from './components/Hero'
import { linksNav } from './data/conteudo'




function App() {
 

  return (
    <>
    
      <BotaoDoDavis texto="Clique aqui" href="https://tailwindcss.com/docs/installation/using-vite"/>

    <Header links={linksNav}/>
    <Hero titulo = "Café especial, grãos selecionados" subtitulo={"Bem-vindo à nossa cafeteria, um lugar onde cada xícara é preparada com cuidado e cada detalhe foi pensado para proporcionar momentos especiais. Aqui você encontra cafés selecionados, bebidas artesanais e acompanhamentos deliciosos em um ambiente acolhedor, perfeito para uma pausa, uma boa conversa ou um momento de tranquilidade."} imagem={"https://images.pexels.com/photos/34287070/pexels-photo-34287070.jpeg"} />

    </>
  )
}

export default App
