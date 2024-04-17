import { View, Text, StyleSheet } from 'react-native';
import Checkbox from '../components/checkboxList';


// exportando tudo da pagina do checkbox para a pagina de expertises

export default function Expertises() {
  const handleCheckboxChange = (isChecked) => { // mostra as expertises concluidas
    console.log('Checkbox marcado:', isChecked);
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.heading}>Cristiano Ronaldo</Text>
        <Text style={styles.subheading}>Parceiro nível - inciante</Text>
      </View>

      <View>
        <Checkbox label="Expertise 1" onChange={handleCheckboxChange} />
        <Checkbox label="Expertise 2" onChange={handleCheckboxChange} />
        <Checkbox label="Expertise 3" onChange={handleCheckboxChange} />
        <Checkbox label="Expertise 4" onChange={handleCheckboxChange} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop:20,
    backgroundColor: '#404040',
  },
  heading: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 8,
  },
  subheading: {
    color: '#fff',
    marginBottom: 16,
  },
});
