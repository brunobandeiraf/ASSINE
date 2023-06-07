import React, { useState } from 'react';
import { TextInput, Text, View } from 'react-native';

const DescricaoComponent = () => {
  const [descricao, setDescricao] = useState('');

  const handleDescricaoChange = (text) => {
    if (text.length <= 255) {
      setDescricao(text);
    }
  };

  return (
   
      <TextInput
        style={{ fontSize:18 }}
        multiline
        maxLength={255}
        value={descricao}
        onChangeText={handleDescricaoChange}
      />
   
  );
  
};

export default DescricaoComponent;