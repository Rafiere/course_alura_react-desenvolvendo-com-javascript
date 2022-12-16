import "./style.css";

/* Esse componente não possui nenhum comportamento. Ele apenas recebe as "props" e exibe elas na tela. Esses componentes são chamados de "dumb components". Eles são mais fáceis de testar e de dar manutenção, pois a lógica de negócios está extraída em outro lugar. */

const Team = (props) => {
  return (
    <section className="time" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.nome}</h3>
    </section>
  );
};

export default Team;
