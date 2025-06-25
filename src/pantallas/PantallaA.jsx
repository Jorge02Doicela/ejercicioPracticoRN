import { View, Text, Image, ScrollView, Button, Alert } from 'react-native';

import styles from '../estilos/PantallaA.styles';

const PantallaA = () => {

  const mostrarAlerta = () => {
    Alert.alert(
      'Alerta',
      '¡Has presionado el botón!',
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.titulo}>Bienvenido a la Pantalla A</Text>

      <Image
        source={{ uri: 'https://evainstitutotraversari.edu.ec/pluginfile.php/72075/block_html/content/LOGO-2.png' }}
        style={styles.imagen}
        resizeMode="cover"
      />

      <Text style={styles.subtitulo}>
        Esta pantalla está diseñada usando exclusivamente componentes nativos de React Native.
      </Text>

      <Text style={styles.parrafo}>
        Aquí puedes encontrar:
      </Text>

      <View style={styles.lista}>
        <Text style={styles.item}>• Texto estilizado con el componente Text</Text>
        <Text style={styles.item}>• Imagen cargada desde una URL remota</Text>
        <Text style={styles.item}>• Contenedor con View para agrupar elementos</Text>
        <Text style={styles.item}>• ScrollView para desplazamiento vertical</Text>
        <Text style={styles.item}>• Botón con funcionalidad interactiva</Text>
      </View>

      <View style={styles.botonContainer}>
        <Button
          title="Presióname"
          onPress={mostrarAlerta}
          color="#3B82F6"
        />
      </View>

    </ScrollView>
  );
};

export default PantallaA;
