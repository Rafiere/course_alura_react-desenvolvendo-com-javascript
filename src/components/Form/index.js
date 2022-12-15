import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./style.css";

const Form = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "DevOps",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const onSave = (evento) => {
    /* Estamos impedindo que o comportamento padrão seja realizado, ou seja, que, ao submetermos o formulário, que a página seja atualizada. */
    evento.preventDefault();
    console.log("O formulário foi submetido!");
  };

  return (
    <section className="form">
      {/* O "onSubmit" é uma forma do React para escutarmos eventos. Quando esse formulário for submetido, essa função será ativada. */}

      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
        />
        <TextField
          required={false}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <Dropdown required={true} label="Time" itens={times} />
        <Button text="Criar Card">
          {/* Tudo o que estiver dentro do botão serão os "children", que serão passados para o componente "Button". */}
          Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Form;
