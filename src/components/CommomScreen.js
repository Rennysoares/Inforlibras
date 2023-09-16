import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    FlatList,
    Image,
    Modal,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Word from '../components/Word';


const CommomScreen = ({ DATA }) => {

    const renderItem = ({ item }) => {
        return (
            <Word
                title={item.title}
                description={item.description}
                image={item.image}
                thisConst={setIsSetModal}
                thisModal={setModal}
            />
        )
    }
    const [flatSearch, setFlatSearch] = React.useState(DATA);

    const [modal, setModal] = React.useState(false);
    const [isSetModal, setIsSetModal] = React.useState();

    const handleSearch = (text) => {
        const filteredItems = DATA.filter((item) => {
            return item.title.toLowerCase().includes(text.toLowerCase());
        });
        setFlatSearch(filteredItems);
    };

    console.log(flatSearch)

    return (
        <View style={{ height: '100%' }}>
            <LinearGradient
                colors={['#98FB98', '#DCDCDC',]}
                style={styles.linearGradient}
            />
            <View
                style={styles.searchBar}
            >
                <TextInput
                    placeholder='Pesquisar'
                    placeholderTextColor='rgb(180, 180, 180)'
                    onChangeText={handleSearch}
                    style={{ width: '90%' }}
                />
                <Image
                    style={{ height: 20, width: 20 }}
                    source={require('../../assets/searchicon.png')}
                />
            </View>
            <FlatList
                data={flatSearch}
                extraData={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Modal
                visible={modal}
                transparent={true}
            >
                <View style={{backgroundColor: 'rgba(240, 240, 240, 0.6)', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{height: '40%', width: '85%'}}>
                        <TouchableOpacity onPress={() => {setModal(false)}}>
                            <Image source={require('../../assets/img/close.png')} style={{height: 25, width: 25, position: 'absolute', top: 0, right: 0, zIndex: 1}}/>
                        </TouchableOpacity>
                        <View style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                            {<Image source={isSetModal} style={{ width: '100%' }} />}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    linearGradient: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
    },
    searchBar: {
        backgroundColor: 'rgb(255, 255, 255)',
        margin: 5,
        padding: 7,
        borderRadius: 7,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default CommomScreen;