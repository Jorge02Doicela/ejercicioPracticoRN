import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../estilos/PantallaB.styles';

const PantallaB = () => {
  const [colorFondo, setColorFondo] = useState('#FFFFFF');

  return (
    <View style={[styles.contenedor, { backgroundColor: colorFondo }]}>
      <Text style={styles.titulo}>Pantalla B</Text>
      <Text style={styles.subtitulo}>Presiona un botón para cambiar el color de fondo:</Text>

      <TouchableOpacity
        style={[styles.boton, { backgroundColor: '#F87171' }]}
        onPress={() => setColorFondo('#F87171')}
      >
        <Text style={styles.textoBoton}>Rojo Claro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton, { backgroundColor: '#34D399' }]}
        onPress={() => setColorFondo('#34D399')}
      >
        <Text style={styles.textoBoton}>Verde</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.boton, { backgroundColor: '#60A5FA' }]}
        onPress={() => setColorFondo('#60A5FA')}
      >
        <Text style={styles.textoBoton}>Azul</Text>
      </TouchableOpacity>

      {/* Nuevo botón para volver al color blanco */}
      <TouchableOpacity
        style={[styles.boton, { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#374151' }]}
        onPress={() => setColorFondo('#FFFFFF')}
      >
        <Text style={[styles.textoBoton, { color: '#374151' }]}>Blanco</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PantallaB;
