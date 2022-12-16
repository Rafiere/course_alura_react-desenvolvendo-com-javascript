import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  const onRegisterCollaborator = (collaborator) => {
    console.log(collaborator);
    /* Estou espalhando os colaboradores antigos e adicionando o novo colaborador, que acabou de ser criado, ao final do array. */
    setCollaborators([...collaborators, collaborator]);
  };

  return (
    <div className="App">
      {/* Estamos chamando o componente "Banner". */}
      <Banner />
      {/* Estamos passando a prop "onRegisterCollaborator", que será uma função que */}
      <Form
        onRegisterCollaborator={(collaborator) =>
          onRegisterCollaborator(collaborator)
        }
      />
    </div>
  );
}

export default App;
