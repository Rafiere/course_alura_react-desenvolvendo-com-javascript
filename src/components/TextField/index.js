/* Normalmente, ao invés de criarmos uma função "function TextField(){}", é recomendado criarmos uma constante, e, nessa constante, atribuirmos uma função anônima que terá o componente. Isso é utilizado para organizarmos o projeto de uma melhor forma. */

/* Quando o nome do arquivo do componente é apenas "index", não temos que, no import, utilizar, por exemplo, a estrutura "/components/TextField/TextField", dessa forma, podemos utilizar apenas "/components/TextField". */

import "./style.css";

/* Por padrão, o React entrega o parâmetro "props". Esse parâmetro contém as propriedades que o componente "TextField" recebeu. */

const TextField = (props) => {
  const changedPlaceholder = `${props.placeholder}...`;

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input placeholder={changedPlaceholder} />
    </div>
  );
};

export default TextField;
