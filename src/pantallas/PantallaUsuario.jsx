import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../estilos/PantallaUsuario.styles';

const PantallaUsuario = ({ navigation }) => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Pantalla de Usuario</Text>

      <TouchableOpacity
        style={styles.apartado}
        onPress={() => navigation.navigate('PantallaA')}
      >
        <Text style={styles.textoApartado}>Ir al Apartado A</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.apartado}
        onPress={() => navigation.navigate('PantallaB')}
      >
        <Text style={styles.textoApartado}>Ir al Apartado B</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PantallaUsuario;
