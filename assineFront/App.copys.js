import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Animated,
} from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from "./src/view/Cadastro";
import Login from "./src/view/Login";
import VisualizarMapa from "./src/view/Mapa";
import Perfil from "./src/view/perfil";
import PerfilContato from "./src/view/perfilcontato";
import PerfilSenha from "./src/view/pefilsenha";
import PerfilAbaixoAssinado from "./src/view/perfilabaixoassinado";
import Assinar from "./src/view/abaixoAssTela1";
import AssinarConfirma from "./src/view/abaixoAssTela2"
import Criacao_abaixoAssinado from "./src/view/criacao_de_abaixoAssinado";
import Reclamacao from "./src/view/reclamacao";
import Telainicial from "./src/view/Telaimicial";
import Mapa from "./src/components/mapa";


const Tab = createMaterialBottomTabNavigator();


function Tabs() {
  return (
    <Tab.Navigator
      labelStyle={{ fontSize: 12 }}
      initialRouteName="Home"
      history
      activeColor="black"
      inactiveColor="#FCE8CF"
      barStyle={{ backgroundColor: "#004361" }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={AssinarConfirma}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Mapa"
        component={VisualizarMapa}
        options={{
          tabBarLabel: "Maps",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="google-maps"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Criar"
        component={Criacao_abaixoAssinado}
        options={{
          tabBarLabel: "Criar",

          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="comment-plus"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



export default function App() {
  return (

    
   <NavigationContainer>
    <Tabs/>
   </NavigationContainer>

    
    );
  }
  
  



