import { Link } from "react-router-dom";
import unaerp from "../../assets/logo-unaerp.png"
import "./style.css"

const Login = () => {

    return(

        <div>
            <section className="backgroundSection">
            </section>
            <section className="formSection">
                <form>
                    <img src={unaerp} alt="logo-unaerp"/>
                        <div className="spanText">
                        <span>Email ou número de inscrição</span>
                            <input/>
                        <span>Senha</span>
                            <input/>
                        </div>
                        <div className="buttons">
                            <Link to="/">Esqueci minha senha</Link>
                            <button>Entrar</button>
                        </div>
                </form>
            </section>
        </div>
    )
}

export default Login;