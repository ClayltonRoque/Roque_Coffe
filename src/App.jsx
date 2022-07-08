import './App.css'
import logo from '../assets/logo-desktop.svg'
import blur1 from '../assets/blur-1.png'
import blur2 from '../assets/blur-2.png'
import coffeImg from '../assets/Cups.svg'

export function App () {
  return (
    <div>
      <header>
          <img src={logo} />
          <div id="HeaderSpan">
              <span>Home</span>
              <span>Menu</span>
              <span>Recompensas</span>
              <span>Gift Cards</span>
              <span>Lojas</span>
          </div>
          <button>PEGAR MEU CAFÉ</button>    
      </header>
      <div id="title">
          <h1>
           Great Coffee
          <h1 id="greatCode">&lt;Great Code/&gt;</h1>
          </h1>
      </div>
      <div id="allBlur">
      <img className="blur1" src={blur1} />
      <img className="blur2" src={blur2} />
      </div>
      <div id="divCoffe">
          <img id="coffe" src={coffeImg} />
      </div>
    </div> 
  )
} 
