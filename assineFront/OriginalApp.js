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

import Login from "./src/view/Login";
import Cadastro from "./src/view/Cadastro";
import Mapa from "./src/view/Mapa";
import Inicial from "./src/view/TelaInicial";
import Abaixo10 from "./src/view/abaixoAssTela1";
import Abaixo2 from "./src/view/abaixoAssTela2_tela _antiga";
import PerfilRead from "./src/view/PerfilRead";
import PerfilDelete from "./src/view/PerfilDelete";
import PerfilUpdate from "./src/view/PerfilUpdate";
import Telainicial from "./src/view/Telaimicial_2,0";
//import Criacao_abaixoAssinado from "./src/view/criacao_de_abaixoAssinado"


const Tab = createMaterialBottomTabNavigator();

function Tabs()
{
  return(
<Tab.Navigator  labelStyle={{ fontSize: 12 }} initialRouteName="Criar" history  activeColor="black" inactiveColor="#FCE8CF" barStyle={{ backgroundColor: '#004361' }} >
        
        <Tab.Screen name="home" component={Telainicial}  options={{
          tabBarLabel: 'home',
    
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
        
        <Tab.Screen name="incial" component={Mapa}  options={{
          tabBarLabel: 'Maps',
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="google-maps" color={color} size={26} />
          ),
        }} />

       

        <Tab.Screen name="perfil" component={PerfilRead}  options={{
          tabBarLabel: 'Perfil',
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="face-agent" color={color} size={26} />
          ),
        }} />

      </Tab.Navigator>
  );
};

export default function App() {
  return (

    
    <NavigationContainer>
      <Tabs></Tabs>
  </NavigationContainer>

    
    );
  }
  
  




/* <Tab.Screen name="Criar" component={ Criacao_abaixoAssinado}  options={{
          tabBarLabel: 'Criar',
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="comment-plus" color={color} size={26} />
          ),
        }} />*/