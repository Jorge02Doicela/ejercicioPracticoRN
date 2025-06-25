import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaUsuario from '../pantallas/PantallaUsuario';
import PantallaA from '../pantallas/PantallaA';
import PantallaB from '../pantallas/PantallaB';

const Stack = createNativeStackNavigator();

const NavegacionPrincipal = () => {
  return (
    <Stack.Navigator initialRouteName="PantallaUsuario">
      <Stack.Screen
        name="PantallaUsuario"
        component={PantallaUsuario}
        options={{ title: 'Inicio' }}
      />
      <Stack.Screen
        name="PantallaA"
        component={PantallaA}
        options={{ title: 'Apartado A' }}
      />
      <Stack.Screen
        name="PantallaB"
        component={PantallaB}
        options={{ title: 'Apartado B' }}
      />
    </Stack.Navigator>
  );
};

export default NavegacionPrincipal;
