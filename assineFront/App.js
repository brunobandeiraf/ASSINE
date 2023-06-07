import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Animated } from "react-native";
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabBar,
} from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./src/view/Cadastro";
import Login from "./src/view/Login";
import VisualizarMapa from "./src/view/Mapa";
import Perfil from "./src/view/perfil";
import PerfilContato from "./src/view/perfilcontato";
import PerfilSenha from "./src/view/pefilsenha";
import PerfilAbaixoAssinado from "./src/view/perfilabaixoassinado";
import Assinar from "./src/view/abaixoAssTela1";
import AssinarConfirma from "./src/view/abaixoAssTela2";
import Criacao_abaixoAssinado from "./src/view/criacao_de_abaixoAssinado";
import Reclamacao from "./src/view/reclamacao";
import Telainicial from "./src/view/Telaimicial";
import Mapa from "./src/components/mapa";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="perfil"
        component={Perfil}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="perfilcontato"
        component={PerfilContato}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="perfilsenha"
        component={PerfilSenha}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="perfilabaixoassinado"
        component={PerfilAbaixoAssinado}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TabBar(props) {
  const { state } = props.navigation;

  const [showTabBar, setShowTabBar] = useState(false);

  useEffect(() => {
    if (state.index === 0) {
      setShowTabBar(true);
    } else {
      setShowTabBar(false);
    }
  }, [state.index]);

  if (!showTabBar) {
    return null;
  }

  return <MaterialBottomTabBar {...props} />;
}

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
        component={Telainicial}
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
  const [loading, setloading] = useState(true);
  const [altura] = useState(new Animated.Value(1000));
  const [expandir] = useState(new Animated.Value(160));
  const [assaqui] = useState(new Animated.Value(13));
  const [palavradescida] = useState(new Animated.Value(-515));

  Animated.sequence([
    Animated.parallel([
      Animated.timing(altura, {
        toValue: 0,
        duration: 1300,
        useNativeDriver: false,
      }),
      Animated.timing(palavradescida, {
        toValue: 0,
        duration: 1300,
        useNativeDriver: false,
      }),
    ]),
    Animated.parallel([
      Animated.timing(assaqui, {
        toValue: 50,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(expandir, {
        toValue: 2000,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]),
  ]).start();

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2500);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View
          style={{
            flex: 1,
            backgroundColor: "#FCE8CF",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            opacity: 1,
          }}
        >
          <Animated.Text
            style={{
              position: "absolute",
              top: "49%",
              zIndex: 2,
              fontSize: assaqui,
              transform: [{ translateY: palavradescida }],
            }}
          >
            Assine
          </Animated.Text>
          <Animated.Image
            source={require("./assets/hexagono.png")}
            style={{ height: expandir, width: expandir }}
          ></Animated.Image>
          <Animated.View
            style={{ width: "100%", height: altura }}
          ></Animated.View>
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Stack"
          component={MyStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE8CF",
  },
});
