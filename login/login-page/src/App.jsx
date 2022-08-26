import './App.css'

export function App() {
  return (
    <div className="App"> 
        <form>
            <h3>Login</h3>
            <input id="email" type="text" name="email" placeholder= "Digite seu E-mail..."/>
            <input id="password" type="password" name="senha" placeholder="Digite sua Senha..."/>
            <input type="submit" name="action" value="Enviar"/>
            <span>Esqueci a senha</span>
      </form>
      
    </div>
  );
}



