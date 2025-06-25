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

      <Text style={styles.titulo}>Pantalla A</Text>

      <Image
        source={{ uri: 'https://evainstitutotraversari.edu.ec/pluginfile.php/72075/block_html/content/LOGO-2.png' }}
        style={styles.imagen}
        resizeMode="cover"
      />

      <Text style={styles.subtitulo}>
        Esta pantalla ha sido construida utilizando exclusivamente componentes nativos proporcionados por la biblioteca React Native.
      </Text>

      <Text style={styles.parrafo}>
        En esta sección se puede observar el uso de los siguientes elementos:
      </Text>

      <View style={styles.lista}>
        <Text style={styles.item}>• Componente text para mostrar texto estilizado.</Text>
        <Text style={styles.item}>• Componente image para cargar una imagen desde una URL remota.</Text>
        <Text style={styles.item}>• Contenedores view para organizar y estructurar la interfaz.</Text>
        <Text style={styles.item}>• Componente scrollview para permitir el desplazamiento vertical del contenido.</Text>
        <Text style={styles.item}>• Botón interactivo mediante el componente button que ejecuta una alerta.</Text>
      </View>

      <View style={styles.botonContainer}>
        <Button
          title="Presionar botón"
          onPress={mostrarAlerta}
          color="#3B82F6"
        />
      </View>

    </ScrollView>
  );
};

export default PantallaA;
