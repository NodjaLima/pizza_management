![GitHub language count](https://img.shields.io/github/languages/count/NodjaLima/pizza_management?color=blue&logoColor=blue&style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/NodjaLima?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/NodjaLima/pizza_management?style=flat-square)

# PROJETO DE ENCERRAMENTO DO MÓDULO 5 - DESENVOLVIMENTO DE SITE

Projeto realizado para o encerramento do último módulo do bootcamp Resilia Educação, em que nos foi proposto criar 
uma página web em ReactJs, usando os dados da [API REST](https://github.com/rnegrelly/Projeto-M4-API_REST.git) que criamos no módulo 4.

## <img src="https://emojis.slackmojis.com/emojis/images/1643515427/14464/pizza.gif?1643515427" width="26px"> PIZZA MANAGEMENT ©

<div align="center">
  
![image](https://user-images.githubusercontent.com/100171322/189219245-cabfee1b-6edf-4327-a53d-e10332ecb138.png)

</div>
  
 🔹 Com objetivo de suprir a necessidade de gerenciamento de pequenos negócios, Pizza Management permite que, de forma rápida e muito prática, 
a gestão de negócios alimentícios seja facilitada e organizada.

 🔹 A aplicação permite gerenciar o que o negócio oferece como produto, por seu cardápio, que pode ser manipulado de acordo com a necessidade da loja. 
Permite também que sua carteira de clientes esteja sempre atualizada, facilitando a busca por detalhes dos clientes. Faz ainda a gestão de fornecedores 
e funcionários através de inclusão, edição, deleção e atualização dos itens.

#
<details>
<summary> <img src="https://emojis.slackmojis.com/emojis/images/1643515222/12401/pizza_spin.gif?1643515222" width="26px"> Detalhes do projeto/instalações/contatos: </summary>
<br />

<br>
 
 ## Detalhes do projeto: 
  
✔ Implementar, utilizando a biblioteca React.js, um site que:

1. [x] Utilize endpoints da API que foi criada no M4 com Node.Js e Express;
2. [x] Utilizar o README.md do repositório para documentação do projeto;
3. [x] Utilizar a biblioteca react-router-dom para roteamento das páginas;
4. [x] Utilizar CSS Grid para definição do layout das páginas;
5. [x] Tenha uma animação CSS para carregamento inicial do site(sem biblioteca).
6. [x] Contenha as funcionalidades básicas do CRUD:
7. [x] Página para listar os cadastros com opção de busca;
8. [x] Página para incluir um novo registro;
9. [x] Página para editar os cadastros;
10. [x] Opção de excluir itens cadastrados.

  
## Para instalar o nosso projeto na sua máquina, siga as instruções a seguir:
  
 
 1. CLONAR ESSE REPOSITÓRIO: 
 ```
     git clone https://github.com/NodjaLima/pizza_management.git
 ```

2. ACESSAR A PASTA CRIADA ATRAVÉS DO CMD USANDO O COMANDO: 
 ```
      cd pizza_management
 ```      
3. INSTALAR DEPENDÊNCIAS:
 ```
      npm install
  ```     	    
4. INICIANDO O SERVIDOR:
 ```
      npm run dev
 ```
  
<div align='center'>  

## Login:

Para acessar o site e as funcionalidades das entidades, é preciso realizar o login em nossa aplicação. 
A base de cadastros que possuem acesso ao site é a base de Colaboradores, onde o id_colaborador é usado para preencher o campo "Usuário" e o cpf_colaborador deve ser usado no campo "Senha".
É possível ver no console de desenvolvimento os colaboradores cadastrados. Todos eles tem acesso as funcionalidades da aplicação.

Caso não haja nenhum cadastro devido ao reset da API, por favor, utilize o POSTMAN ou INSOMNIA para realizar uma requisição POST, passando o objeto abaixo:

```{
    "nome_colaborador": "Andressa Ricardo de Amorim",
    "cpf_colaborador": "12345",
    "endereco_colaborador": "Av. Edgard Romero nº 87, Madureira, Rio de Janeiro - RJ",
    "cargo_colaborador": "Administrador contábil",
    "email_colaborador": "homerolinspaiva81@oi.com.br",
    "telefone_colaborador": "(21)98416-2188",
    "turno_colaborador": "Noite",
    "salario_colaborador": "R$ 2.165,30",
    "admissao_colaborador": "13/07/2019",
    "demissao_colaborador": "null"
    }```

O campo usuário deverá ser preenchido com '1' e o campo senha com o cpf cadastrado, que no exemplo acima é '12345'.

Após o sucesso do login, as rotas estarão livres para navegação.


## CRUD de entidades

Essa aplicação trabalha com as entidades Cardapio, Clientes, Colaboradores e Fornecedores. 
Dentro das funcionalidades de cada entidade, é possível realizar cadastro, deletar, editar e listar os itens que estão no banco de dados.
Todas as requisições devem respeitas as exigencias da API que está sendo consumida. Para mais informações a respeito, visite o repositório da API em https://github.com/rnegrelly/Projeto-M4-API_REST.
  
 ## Status do Projeto
![Bagde](https://img.shields.io/badge/Status%20do%20Projeto-Concluído-blue)


## Time desenvolvedor ![image](https://user-images.githubusercontent.com/100171322/189221961-f345daf6-4da6-45c8-bc44-0b5832d6693b.png):
	

 **Larrissa Lira** - [larrissalira](https://github.com/larrissalira)
 **Nodja Lima** - [NodjaLima](https://github.com/NodjaLima)
 **Renato Negrelly** - [rnegrelly](https://github.com/rnegrelly/)
 **Helder Lucas** -  [devhelderlrs](https://github.com/devhelderlrs)

---
  
[⬆ Voltar ao Topo](#projeto-de-encerramento-do-módulo-5---desenvolvimento-de-site)
  
