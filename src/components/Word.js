import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Word = ({ title, description, image, thisConst, thisModal}) => {
    const videoRef = React.useRef(null);
    
    return (
            <View style={{ flexDirection: 'row', margin: 10, gap: 15, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ backgroundColor: '#FFF', padding: 5, borderRadius: 4, elevation: 4, alignItems: 'center', justifyContent: 'center', width: 110, height:110}}>
                    <TouchableOpacity onPress={()=>{thisConst(image); thisModal(true)}}>
                        <Image
                            style ={{width: 100, height:100}}
                            source={image}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{width: '60%', backgroundColor: '#FFF', padding: 5, borderRadius: 4, elevation: 4, gap: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>{title}</Text>
                    <Text style={{textAlign: 'justify'}}>{description}</Text>
                </View>
            </View>
    )
}
export default Word;