
import './App.css'
import Botao from './components/botao'
import Botao2 from './components/botao2'
import Card from './components/Card'

function App() {
  
function mostrarMensagem(){
  alert("terceito botao")
}
  return (
    <>
     <div>Hello world</div>
      <Botao func={() => alert("Primeiro botao")} text={"Clique aqui"} background={"btn-primario"}/>
      <Botao text={"clique tambem"} background={"btn-secundario"}/>
      <Botao func={mostrarMensagem} text={"clique denovo "} background={"btn-desativado"}/>
      
      <div className='cards'>
     <Card background={"react"} foto={"https://devsagaz.com.br/content/images/2023/05/Ekran-Resmi-2019-11-18-18.08.13.png"} titulo={"Amo react"} paragrafo={"Muito bom de usar react, pq tu nunca falou disso?"} texto={"Saiba Mais"}/>
     <Card background={"mac"} foto={"https://www.notebookcheck.info/fileadmin/Notebooks/Apple/MacBook_Pro_14_2025_M5/macbook_pro_14_m5_case_10.jpg"} titulo={"Preços altos"} paragrafo={"Publico se assusta com novos preços de macbooks"} texto={"Clque Aqui"}/>
     <Card background={"carro"} foto={"https://s2-autoesporte.glbimg.com/yL2mww_fODdD-ZrDWZSBzdwHGgE=/0x0:3949x2222/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2024/L/i/fi2yVNSOqSGHtYcWABTA/s24-0348-fine.jpg"} titulo={"Nova Porsche"} paragrafo={"Porsche 911 a mais nova atualmente no brasil"} texto={"Proximo"}/>
      </div>
      <Botao2 text={"clique"}/>
    </>
  )
}

export default App
