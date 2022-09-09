import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import helder from "../../assets/img/helder.jpg";
import nodja from "../../assets/img/nodja.jpg";
import larrissa from "../../assets/img/larrissa.png";
import renato from "../../assets/img/renato.jfif";
import "./sobre.css";

const Sobre = () => {
  return (
    <div className="sobre-container">
      <div className="texto">
        <h1>Bem vindo ao Pizza Management</h1>
        <h3>
          Uma solução prática e intuitiva para o gerenciamento do seu negócio.
        </h3>
        <p>
          Com o objetivo de suprir a necessidade de gerenciamento de pequenos
          negócios, o Pizza Management permite que, de forma rápida e muito
          prática, a gestão de negócios alimentícios seja facilitada e
          organizada.
        </p>
        <p>
          A aplicação permite gerenciar o que o negócio oferece como produto,
          através de seu cardápio, que pode ser manipulado de acordo com a
          necessidade da loja. Permite também que sua carteira de clientes
          esteja sempre atualizada, facilitando a busca por detalhes dos
          clientes. Faz ainda a gestão de fornecedores e funcionários através de
          inclusão, edição, deleção e atualização dos itens.
        </p>
      </div>

      <h2>Equipe de Desenvolvimento</h2>
      <div className="container-cards-sobre">
        <div className="card-sobre">
          <h2>Helder Lucas</h2>
          <img src={helder}></img>
          <div className="div-icon-social">
            <h3>Desenvolvedor FullStack</h3>
            <div>
              <a target="_blank" href="https://github.com/devhelderlrs">
                <img src={github}></img>
              </a>
              <img src={linkedin}></img>
            </div>
          </div>
        </div>
        <div className="card-sobre">
          <h2>Larrissa Lira</h2>
          <img src={larrissa}></img>
          <div className="div-icon-social">
            <h3>Desenvolvedor FullStack</h3>
            <div>
              <a target="_blank" href="https://github.com/larrissalira">
                <img src={github}></img>
              </a>
              <img src={linkedin}></img>
            </div>
          </div>
        </div>
        <div className="card-sobre">
          <h2>Nodja Lima</h2>
          <img src={nodja}></img>
          <div className="div-icon-social">
            <h3>Desenvolvedor FullStack</h3>
            <div>
              <a target="_blank" href="https://github.com/NodjaLima">
                <img src={github}></img>
              </a>
              <img src={linkedin}></img>
            </div>
          </div>
        </div>
        <div className="card-sobre">
          <h2>Renato Negrelly</h2>
          <img src={renato}></img>
          <div className="div-icon-social">
            <h3>Desenvolvedor FullStack</h3>
            <div>
              <a target="_blank" href="https://github.com/rnegrelly">
                <img src={github}></img>
              </a>
              <img src={linkedin}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
