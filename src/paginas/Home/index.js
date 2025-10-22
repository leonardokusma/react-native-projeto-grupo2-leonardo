import {View,StyleSheet,ScrollView} from 'react-native';
import  {SafeAreaView}  from 'react-native-safe-area-context';
import user from '../../assets/Ícones/PNG/Usuário (1).png';
import Header from '../header';
import Lista from '../ListaPets/index'
import Tabbar from '../tabbar';


export default function Home(){

  const title = 'Olá!Veja os amigos\ndisponíveis para a adoção!'

    return(
      <SafeAreaView style={styles.conteiner}>
        <ScrollView style={styles.scroll}>
        <Header user={user} title={title} ></Header>
            <Lista style={styles.lista}/>
            <Tabbar/>
        </ScrollView>
        
      </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  conteiner:{
    flex:1,
    height:'100%'
  },
  scroll:{
    flex:1
  },
  lista:{
    paddingBottom:'10%',
    marginBlockStart:'10%'
  },
});
