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



export default function App() {
  return (

    
    <Criacao_abaixoAssinado></Criacao_abaixoAssinado>

    
    );
  }
  
  



