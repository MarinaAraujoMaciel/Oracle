import "react-native-gesture-handler";
import {FontAwesome} from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Relatorio from "../pages/Relatorio";
import Editar from "../pages/Editar";
import Excluir from "../pages/Excluir";
import Expertises from "../pages/Expertises";
import Informacoes from "../pages/Informacoes";

const Drawer = createDrawerNavigator();

export default function Sidebar() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#B90E1E",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#B90E1E",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
          
          drawerLabelStyle: {
            color: "#FFF"
          },
        }}
      >
      <Drawer.Screen
        name="Relatorio"
        component={Relatorio}
        options={{
          drawerLabel: "Relatorio",
          title: "Oracle",
          // drawerActiveTintColor: '#fff', 
          // drawerActiveBackgroundColor: '#68f', 
          drawerIcon: () => (
            <FontAwesome name="pencil-square" size={20} color="#fff" />
          )
        }}
      />
      <Drawer.Screen
        name="Informacoes"
        component={Informacoes}
        options={{
          drawerLabel: "Informacoes",
          title: "Oracle",
          drawerIcon: () => (
            <FontAwesome name="user" size={20} color="#fff" />
          )
        }}
      />
      <Drawer.Screen
        name="Expertises"
        component={Expertises}
        options={{
          drawerLabel: "Expertises",
          title: "Oracle",
          drawerIcon: () => (
            <FontAwesome name="newspaper-o" size={20} color="#fff" />
          )
        }}
      />
      <Drawer.Screen
        name="Excluir"
        component={Excluir}
        options={{
          drawerLabel: "Excluir",
          title: "Oracle",
          drawerIcon: () => (
            <FontAwesome name="trash-o" size={20} color="#fff" />
          )
        }}
      />
      <Drawer.Screen
        name="Editar"
        component={Editar}
        options={{
          drawerLabel: "Editar",
          title: "Oracle",
          drawerIcon: () => (
            <FontAwesome name="pencil" size={20} color="#fff" />
          )
        }}
      />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}