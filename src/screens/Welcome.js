import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

const Welcome  = ({navigation}) => {
    return(
        
        <SafeAreaView style={{height:"100%"}}> 

            <LinearGradient
        colors={['#98FB98', '#DCDCDC', ]}
        style={styles.linearGradient}
        
      />

            <View style={styles.logo}>
            <Image
            source={require('../../assets/img/sesi_libras.png')}
            style={{height: 250, width: 260}}
          />
            </View>

            <Text style={styles.titulo}>INFOLIBRAS</Text>

            <View style={styles.linha}>
            <TouchableOpacity style={styles.button}
                onPress={()=>{navigation.navigate('RouteTopTap')}}
            >
                <Text style={styles.btletra}>Iniciar</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 35,
        textAlign: 'center',
        paddingTop: 50,
        fontWeight: 'bold',
    },
    logo: {
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '10%',
        paddingLeft: 8
    },
    linha:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150,
        width: "100%"
    },
    button:{
        backgroundColor: '#2E8B57',
        width: 180,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    btletra:{
        color: '#fff',
        fontSize: 20
    },
    linearGradient:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left:0 ,

    }
    
})

export default Welcome;