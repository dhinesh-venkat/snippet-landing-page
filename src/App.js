import GetStarted from './components/GetStarted'
import Header from './components/Header'
import Footer from './components/Footer'
import snippet from './assets/snippet.png'
import bottom from './assets/bottom-image.png'
import logo from './assets/Logo.svg'

function App() {
  return (
    <div className="App">
      <div className="bg-gradient h-screen bg-cover bg-no-repeat relative">
        <Header></Header>
        <div className="flex flex-col items-center relative">
          <h1 className="mt-16 text-6xl font-bold">Gorgeous Code Snippets</h1>
          <p className="m-6 text-xl font-light text-center antialiased">With Snipper, create fully customizable code snippets in a matter of seconds<br></br> right from your browser.</p>
          <GetStarted />
          <p className="m-6 text-xl font-light antialiased"> No credit card required.</p>
        </div>
        <img className="h-auto px-32 m-auto absolute bottom-0 pt-16" src={snippet} alt="..."></img>
      </div>
      <div className="flex justify-between m-auto px-32 pt-16 items-center">
        <div className="flex flex-col items-start my-16">
          <p className="text-4xl font-bold pb-5">
            A fully customizable code snippet<br/>editor
          </p>
          <p className="pb-5 font-light text-xl antialiased">
            Fully customize the color scheme of your code snippet, or use our<br/>
            own premade color schemes. Export your code snippets in JPG, PDF,<br/>
            PNG, or any of the other 10+ common extensions.
          </p>
          <GetStarted />
        </div>
        <div className="w-2/6">
          <img className="object-contain" src={bottom} alt="..."></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
