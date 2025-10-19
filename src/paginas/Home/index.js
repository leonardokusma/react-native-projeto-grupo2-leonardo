import React from 'react';
import {View, Text,StyleSheet, ImageBackground,Image,ScrollView} from 'react-native';
import user from '../../assets/Ícones/PNG/Usuário (1).png';
import hamburger from '../../assets/Ícones/PNG/Hamburguer.png';
import Header from '../header';
import Card from '../ListaPets/Cards';
import pets from '../../mocks/pets'


export default function Home(){

  const title = 'Olá!Veja os amigos\ndisponíveis para a adoção!'

    return(
      <View style={styles.conteiner}>
        <Header user={user} title={title} style={styles.header} contentContainerStyle={styles.scrollContent}></Header>
        <ScrollView style={styles.ScrollView}>
          <Card image={pets.lista[0].image} age={pets.lista[0].age} caract={pets.lista[0].characteristics}
          size={pets.lista[0].size}local={pets.lista[0].from} name={pets.lista[0].name}
          />
        </ScrollView>
        
      </View>
    )
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1
  },
  header:{
    position:'absolute',
  },
  scroll:{
    flex:1
  },
  scrollContent: {
    paddingTop: 210, 
    paddingHorizontal: 16, 
    paddingBottom: 20, 
  },
})

