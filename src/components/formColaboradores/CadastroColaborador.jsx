import { useNavigate, useParams } from 'react-router-dom'
import { Form } from '../../components/Form/Form'
import { createUser } from '../../services/users-service'
import styles from './CreateUser.module.css'

export const CreateUser = () => {
  const navigate = useNavigate()
  const params = useParams()

  return (
    <div className={styles.createUser}>
      <h1>{params.id ? "Editar Usuário" : "Cadastrar Usuário"}</h1>
      <div className={styles.form}>
        <Form hasUser={params.id} onFinish={(user) => {
          createUser(user).then(response => {
            navigate('/')
          }).catch(error => {
            alert("CRIAÇÃO DO USUÁRIO DEU ERRO")
          })
        }}/>
      </div>
    </div>
  )
}