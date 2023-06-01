import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  PanResponder,
  Animated,
  TouchableOpacity,
  Text,
  
} from "react-native";

import * as ImagePicker from 'expo-image-picker';
import Input from "../components/input";











export default function Criacao_abaixoAssinado() {
    const [selectedImage, setSelectedImage] = useState(null);

    const selectImage = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status === 'granted') {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
          setSelectedImage(result.uri);
        }
      }
    };
  
    return(
        <View style={styles.container}>
            <View style={styles.cima}>
                <Text style={{ fontSize: 42,color: "#FCE8CF",}}>ASS</Text>
            </View>
            <View   style={styles.centro}>
                <View style={styles.Relate_titulo}>
                    <Text style={{fontSize: 20}}>RELATE SUA RECLAMAÇÃO</Text>
                </View>
                <View style={styles.titulo}>
                    <Input largura={300} altura={40} placeholder="titulo"></Input>
                </View>
                <View style={styles.anexarImagem}>
                    <TouchableOpacity onPress={selectImage} style={[styles.procurarImagem,{ marginTop: 10 }]}>
                    {selectedImage ? (
                        <Image source={{ uri: selectedImage }} style={{ flex: 1, width: undefined, height: undefined }}
                        resizeMode="cover" />
                     ) : (
                         <Image style={{ flex: 1, width:200, height:200 }}source={require("../image/icons/camera.png")}></Image>
                    )}
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    cima:{
        flex:0.13,
        backgroundColor:"#004361",
        justifyContent:"center",
        alignItems:"center"
    },
    centro:{
        flex:0.87,
        backgroundColor:"#BDD2DC",
       
    },
    
    titulo:{
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        backgroundColor:"#fff"
    },
    
    Relate_titulo:{
        alignItems:"center",
        justifyContent:"center",
        flex:0.13,
        width:"100%",
        backgroundColor:"#fff"
    },
    
    anexarImagem:{
        alignItems:"center",
        justifyC0ontent:"center",
        width:"100%",
        backgroundColor:"black",
        flex:0.4
    },
    procurarImagem:{
        flex:0.9,
        width:"85%",
        backgroundColor:"#FCE8CF",
        borderRadius: 20,
        alignItems:"center"
    }
    
},)