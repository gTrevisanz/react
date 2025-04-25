import './App.css';
import Frase from './Frase'

function App() {

  const nome = 'Miguel'
  const idade = 82
  function soma (a,b){
    return a + b
  }
  const novoNome = nome.toUpperCase()

  return (
    <div className="App">
      <h1>Página de teste</h1>
      <h3>Nome: {novoNome}🔪🩸</h3>
      <h3>Idade: {idade}🐣</h3>
      <p>Soma: { soma(8,9) }</p>

      <Frase/>
    </div>
  );
}

export default App;
