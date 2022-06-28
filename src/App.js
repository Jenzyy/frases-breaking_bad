import styled from "@emotion/styled";
import { useState } from "react";
import queryApi from "./helpers/queryAp";
import ContainerFrase from "./components/Frase";
const Containerbutton = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;

`
const Boton = styled.button`
  background: -webkit-linear-gradient(top left,#007d35 0%,#007d35 40%,#0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
`;
function App() {
  const [frase, setFrase] = useState({});

  const getApi = async () => {
    const  frase  = await queryApi()
    setFrase(frase);
  }

  return (
    <>
      <Containerbutton>
        <ContainerFrase
          frase={frase}
        />
        <Boton onClick={getApi}
        >
          Obtener Frase
        </Boton>
      </Containerbutton>
    </>
  );
}

export default App;
