import { useEffect } from "react";
import { useState } from "react";
import NewStudent from "../NewStudent";
import NewTest from "../NewTest";
import ListStudents from "../ListStudents";
import ListTests from "../ListTests";

const Dashboard = () => {

    const [key, setKey] = useState("")

    const mainContent = () => {
        
        if(key === "New Student") {

            return (

                <NewStudent setKey={setKey}/>

            )
        }else if(key === "List Students"){
            
            return(

                <ListStudents/>
            )
        }else if(key === "New Test"){

            return(
                
                <NewTest/>
            )
        }else if(key === "List Tests"){
            
            return(
                
                <ListTests/>
            )
        }

        return <></>
    }

    useEffect(() => {

        mainContent()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[key])


    return(
        
        <div>
                <nav>  
                    <h1 onClick={() => setKey("")}>início</h1>
                    <ul>
                        <li onClick={() => setKey("New Student")}>Cadastro novo aluno</li>
                        <li onClick={() => setKey("List Students")}>Lista de alunos</li>
                    </ul>
                    <ul>
                        <li onClick={() => setKey("New Test")}>Adicionar nova prova</li>
                        <li onClick={() => setKey("List Tests")}>Lista de provas</li>
                    </ul>
                </nav>
                
            <div className="corpo">
                    <section>
                        {mainContent()}
                    </section>
            </div>
        </div>

    )
}

export default Dashboard;