import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

function Checkbox({ label, onChange }) {
  const [checked, setChecked] = useState(false); // verificar se apliquei ou nao no checkbox e inicia como falso
  const [selectedDate, setSelectedDate] = useState(null); //verificar a data que foi realizada a função
// moment realiza essa função da data, como??? 

  const handleCheckboxChange = () => { // vai mudar o estado do checkbox
    const newChecked = !checked;
    setChecked(newChecked);
    if (newChecked) {
      setSelectedDate(moment().format('DD/MM/YYYY')); // vai setar a data atual se for ativo
    } else {
      setSelectedDate(null); // se nao fica nulo
    }
    if (onChange) {
      onChange(newChecked);
    }
  };

  return ( 
    <View style={styles.checkboxContainer}> 
      <Pressable /* botao apertavel */style={styles.checkbox} onPress={handleCheckboxChange}> 
        {checked ? (
          <Ionicons name="checkbox-outline" size={24} color="coral" /> // se estiver ativo check ele vai renderizar o icone
        ) : (
          <Ionicons name="square-outline" size={24} color="coral" /> // se nao estiver ativo fica caixa vazia
        )}
        <Text style={styles.checkboxLabel}>{label}</Text> 
      </Pressable>
      {checked && selectedDate && (
        <Text style={styles.dateText}>{selectedDate}</Text> /* se ativo mostra a data atual com o texto de completo expertise */
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
  dateText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default Checkbox;
