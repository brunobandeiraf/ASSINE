import React from "react";
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,SafeAreaView,ScrollView} from 'react-native';



export default function PerfilAbaixoAssinado({navigation}){
    
  return (
    <View style={styles.container}>
      
        <View style={styles.titulo}>
            <Text style={styles.t1}>PERFIL</Text>
        </View>

        <View style={styles.meio}>

                <ScrollView>

                    <View style={styles.espacamento}> 
                    </View>

                    <View style={styles.parte1}>
                            <TouchableOpacity onPress={() => navigation.navigate("perfil")} style={styles.btn1}> 
                                <Text style={styles.t2}>DADOS GERAIS</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.parte2}>
                            <TouchableOpacity onPress={() => navigation.navigate("perfilcontato")} style={styles.btn2}> 
                                <Text style={styles.t3} >CONTATO</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.parte3}>
                            <TouchableOpacity onPress={() => navigation.navigate('perfilsenha')} style={styles.btn3}> 
                                <Text style={styles.t4}>SENHA E EMAIL</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.parte4}>
                            <TouchableOpacity  style={styles.btn4}> 
                                <Text style={styles.t5}>ABAIXO-ASSINADOS</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.parte5}>
                            <TouchableOpacity  style={styles.btn3}> 
                                <Text style={styles.t6}>SAIR</Text>
                            </TouchableOpacity>
                    </View>
               
                    {/* Termina aqui os botões */}

                    <View style={styles.detalhe}> 
                        <Text style={styles.t7}>__________________</Text>
                    </View>

                    <View style={styles.espacamento1}> 
                    </View>

                    {/* Começa os INPUTS */}


                    <View style={styles.Tela1}>
                      <View style={styles.titulo_problema}>
                          <Text style={styles.Titulo2}>Buraco Gigante</Text>
                      </View>

                
                      <ScrollView>

                        <View style={styles.teste}>
                              <View style={styles.Tela_Um_Meio_Cima}>
                                  <Image style={styles.logo1}source={{uri: "https://www.jornalcruzeiro.com.br/_midias/jpg/2021/12/23/buraco_na_rua-831589.jpg",}}/>
                              </View>
                                <Text style={styles.Tela_Um_Meio_abaixo}>
                                    Diluvio destruiu a rua com buraco gigante impossibilitando passagem de carro e ocasionamdo filas.
                                    Diluvio destruiu a rua com buraco gigante impossibilitando passagem de carro e ocasionamdo filas.
                                    Diluvio destruiu a rua com buraco gigante impossibilitando passagem de carro e ocasionamdo filas.
                                    Diluvio destruiu a rua com buraco gigante impossibilitando passagem de carro e ocasionamdo filas.
                                    Diluvio destruiu a rua com buraco gigante impossibilitando passagem de carro e ocasionamdo filas.
                                    Diluvio destruiu a rua com buraco gigante impossibilitando passagem de carro e ocasionamdo filas.
                                </Text>
                        </View>

                        </ScrollView>

                        <View style={styles.Tela_Um_Baixo}>
                            <View style={styles.Tela_Um_Baixo_E}>
                                <View style={styles.prograss}>
                                    <View style={styles.prograss_dentro}><Text>78%</Text></View>
                                </View>
                            </View>
                            <View style={styles.Tela_Um_Baixo_D}>
                                <TouchableOpacity style={styles.botao}><Text>Assinar</Text></TouchableOpacity>
                            </View>
                        </View>
                        </View>



                    <View style={styles.parte7}>
                            <TouchableOpacity style={styles.btn6}> 
                                <Text style={styles.t8}>SAIR</Text>
                            </TouchableOpacity>
                    </View>

                    <View style={styles.espacamento}> 
                    </View>

                </ScrollView>

        </View>

        <View style={styles.fim}>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:'100%',
    width:'100%'
  },

  titulo:{
    flex:1,
    backgroundColor:'#004361',
    alignItems:'center',
    justifyContent:'center'
  },

  t1:{
    fontSize:42,
    color:'#FCE8CF'
  },

  meio:{
    flex:8,
    backgroundColor:'#BDD2DC'
  },

  espacamento:{
    height:30,
    width:'100%',
  },

  parte1:{

    height:70,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end',

  },

  btn1:{

    height:'75%',
    width:'90%',
    backgroundColor:'#06364A',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center',

  },

  t2:{
    fontSize:15,
    color:'#DDC7AB',
  },

  parte2:{
    height:70,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end'
  },

  btn2:{
    height:'75%',
    width:'90%',
    backgroundColor:'#06364A',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center',

  },

  t3:{

    fontSize:15,
    color:'#DDC7AB',
  },

  parte3:{
    height:70,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end',
  },

  btn3:{
    height:'75%',
    width:'90%',
    backgroundColor:'#06364A',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center'
  },

  t4:{

    fontSize:15,
    color:'#DDC7AB',
  },

  espacamento1:{
    height:50,
    width:'100%',

  },

  parte4:{

    height:70,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end',
  },

  btn4:{

    height:'75%',
    width:'90%',
    backgroundColor:'#15678B',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#ffff',
    borderWidth:2
  },

  t5:{
    fontSize:18,
    color:'#FCE8CF',
  },


  parte5:{

    height:70,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-end',
  },

  t6:{
    fontSize:15,
    color:'#DDC7AB',
  },

  detalhe:{

    height:50,
    width:'100%',
    alignItems:'center',
    justifyContent:'flex-start',

  },

  t7:{
    fontSize:32
  },

  espacamento1:{
    height:20,
    width:'100%',
  },




  Div_cima: {
    backgroundColor: "#004361",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  Titulo: {
    color: "#D2B38A",
    fontSize: 50,
  },
  Titulo2: {
    color: "#D2B38A",
    fontSize: 30,
    
  },
  titulo_problema: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  Div_meio: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Tela1: {
    backgroundColor: "#FCE8CF",
    borderRadius: 20,
    width: "90%",
    height: 410,
    margin:20,
  },
    Tela_Um_Meio_Cima: {
    width: 360,
    height: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  Tela_Um_Meio_abaixo: {
    width: "100%",
  },
  logo1: {
    width: "100%",
    height: 180,
    borderRadius: 20,
  },
  Tela_Um_Baixo: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    
  },
  Tela_Um_Baixo_E: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    
  },
  prograss: {
    width: "90%",
    height: "40%",
    backgroundColor: "white",
    borderRadius: 20,
  },
  prograss_dentro: {
    width: "78%",
    height: "100%",
    backgroundColor: "green",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  Tela_Um_Baixo_D: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    backgroundColor: '#E3BB87',
    alignItems: 'center', 
    justifyContent: 'center',   
    height: '50%',
    width: '80%',
    borderRadius: 10,
  },
  teste: {
    alignItems: 'center', 
    justifyContent: 'center',
  },







  input:{

    height:'75%',
    width:'88%',
    backgroundColor:'#FCE8CF',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    fontSize:16
  },

  parte7:{

    height:80,
    width:'100%',
    backgroundColor:'#BDD2DC',
    alignItems:'center',
    justifyContent:'center',
  },

  btn6:{

    height:'70%',
    width:'85%',
    backgroundColor:'#15678B',
    borderRadius:6,
    alignItems:'center',
    justifyContent:'center'
  },

  t8:{

    fontSize:18,
    color:'#FCE8CF',
  }


});