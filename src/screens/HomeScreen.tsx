import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { getAdvice } from '../api/Api';

export default function HomeScreen() {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    try {
      const newAdvice = await getAdvice();
      setAdvice(newAdvice);
    } catch (error) {
      alert('Erro ao buscar conselho');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Text>App de Conselhos</Text>
      <Button title="Ver conselho" onPress={handlePress} />
      {loading && <ActivityIndicator/>}
      {advice !== '' && <Text>{advice}</Text>}
    </View>
  );

};
