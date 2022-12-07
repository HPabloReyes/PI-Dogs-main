import styled from "styled-components";

const colors = {
  borde: "#0075ff",
  error: "#bb2929",
  exito: "#1ed12d",
};

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px 0 10px 0;
  margin: 0px 10px 0px 10px;
  border-radius: 10px;

  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-size: 25px;
  min-height: 40px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #fff;
  border-radius: 3px;
  line-height: 45;
  padding: 0px 10px 0 10px;

  transition: 0.3s ease all;
  border: 3px solid transparent;
  cursor: pointer;

  &:focus {
    border: 3px solid ${colors.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;

const LeyendaError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colors.error};
`;

const ContenedorBoton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
`;

const Inputboton = styled.input`
  height: 45px;
  line-height: 45px;
  width: 30%;
  border-radius: 3px;
  cursor: pointer;
  transition: 1s ease all;
  background: #000;
  color: #ffff;
  font-weight: bold;
  border: none;
  border-radius: 10px;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
    background-color: #f7945b;
  }
`;

const Select = styled.select`
  width: 90%;
  height: 40px;
  background: #fff;
  border-radius: 3px;
  line-height: 45;
  padding: 0 15px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;
`;
const Option = styled.option`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Select,
  Formulario,
  Label,
  Input,
  LeyendaError,
  ContenedorBoton,
  Inputboton,
  Option,
};
