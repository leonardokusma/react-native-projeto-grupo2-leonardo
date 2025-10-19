import React from 'react';
import {View, Text,StyleSheet, ImageBackground,Image,ScrollView} from 'react-native';
import user from '../../assets/Ícones/PNG/Usuário (1).png';
import hamburger from '../../assets/Ícones/PNG/Hamburguer.png';
import Header from '../header';
import Card from '../ListaPets/Cards';
import pets from '../../mocks/pets'
import Lista from '../ListaPets/index'

export default function Home(){

  const title = 'Olá!Veja os amigos\ndisponíveis para a adoção!'

    return(
      <View style={styles.conteiner}>
        <ScrollView style={styles.scroll}>
        <Header user={user} title={title} ></Header>
            <Lista/>
        </ScrollView>
        
      </View>
    )
}


const styles = StyleSheet.create({
  conteiner:{
    flex:1
  },
  scroll:{
    flex:1
  },

})

/*<Card image={pets.lista[0].image} age={pets.lista[0].age} caract={pets.lista[0].characteristics}
          size={pets.lista[0].size}local={pets.lista[0].from} name={pets.lista[0].name}
          />
          */