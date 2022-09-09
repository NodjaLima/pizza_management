import { useState} from "react"
import { postFornecedores } from "../../../pages/fornecedores/fornecedores_api"
import './forms_fornecedores.css'

export default function FormsFornecedores() {
    const [user, setUser] = useState({
        nome: "" ,
        cnpj: "",
        endereço: "",
        ramo: "",
        email: "",
        telefone: ""
    })

	const NovoFornecedor = (userFornecedor) => {
		postFornecedores(userFornecedor).then((response) => {
			alert('cadastro realizado')
		})
	}
        return(
					<div className="box">
						<section className="section">
						<form className="forms">
						<h2 className="inserir">INSERIR NOVO FORNECEDOR:</h2>
							<input type="text" placeholder="Inserir nome completo" onChange={(event) => {setUser({...user, nome: event.target.value})}} />
							<input type="number" placeholder="Inserir o CNPJ" onChange={(event) => {setUser({...user, cnpj: event.target.value})}}/>
							<input type="text/number" placeholder="Inserir endereço" onChange={(event) => {setUser({...user,endereço: event.target.value})}}/>
							<input type="text" placeholder="Inserir ramo" onChange={(event) => {setUser({...user, ramo: event.target.value})}}/>
							<input type="text" placeholder="Inserir email" onChange={(event) => {setUser({...user, email: event.target.value})}}/>
							<input type="number" placeholder="Inserir telefone" onChange={(event) => {setUser({...user, telefone: event.target.value})}}/>
						<div className="botoes"	>
              <button onClick={(e) => {e.preventDefault(); NovoFornecedor(user)}}>CADASTRAR</button>
							<button type='reset'>APAGAR</button>
            </div>
						</form>
						</section>
					</div>
        );

        }
