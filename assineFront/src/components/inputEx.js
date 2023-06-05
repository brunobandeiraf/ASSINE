import React, { useState } from 'react';

function ExpansivelInput() {
  const [campos, setCampos] = useState([]);

  const adicionarCampo = () => {
    setCampos([...campos, '']);
  };

  const handleChange = (valor, indice) => {
    const novosCampos = [...campos];
    novosCampos[indice] = valor;
    setCampos(novosCampos);
  };

  return (
    <div>
      {campos.map((valor, indice) => (
        <input
          key={indice}
          value={valor}
          onChange={(e) => handleChange(e.target.value, indice)}
        />
      ))}
      <button onClick={adicionarCampo}>Adicionar campo</button>
    </div>
  );
}

export default ExpansivelInput;