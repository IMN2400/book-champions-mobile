import { useState } from "react";
import { Image, Pressable, View, Text, Alert } from "react-native"
import { StyleSheet } from "react-native"


export const BookItem = ({ bookProp }) => {
    
    const { id, title, author, rating, pageCount, imageUrl, available, summary } = bookProp;
    const details = `${rating}⭐, ${pageCount}📄`
    const texto = available ? "Reservar" : "No disponible"
    const coloration = available ? "#4c4" : "#c00"
    const styles = StyleSheet.create(
        {
            title: {
                fontFamily: 'serif',
                fontSize: 24,
                color: '#100800',
                fontWeight: 900,
            },
            subtitle: {
                fontSize: 18,
                color: '#753',
                textAlign: 'right',
                fontWeight: 900,
            },
            card: {
                flex: 0,
                borderRadius: 25,
                borderColor: 'black',
                borderWidth: 3,
                marginBlock: 20,
                width: 420,
                backgroundColor: '#f0e0d0',
            },
            description: {
                fontSize: 18,
                fontFamily: 'serif',
                color: '#100800',
                padding: 10,
                lineHeight: 22,
            },
            descriptionBox: {
                borderBottomColor: '#000',
                borderBottomWidth: 3,

            },
            image: {
                borderWidth: 4,
                borderColor: '#753',
                borderRadius: 25,
                padding: 10,
                margin: 10,
                minWidth: 300,
                height: 450,
                alignSelf: 'center',
            },
            footer: {
                fontSize: 16,
                color: '#b85',
                textAlign: 'right',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
                textShadowColor: '#000',
            },
            buttonStyle: {
                borderRadius: 25,
                borderColor: 'black',
                borderWidth: 1,
                margin: 5,
                backgroundColor: `${coloration}`,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '-3px 3px #110',
            },
            buttonText: {
                fontSize: 18,
                color: '#fec',
                textAlign: 'right',
                fontWeight: 600,
                textShadowOffset: { width: 2, height: 1 },
                textShadowRadius: 1,
                textShadowColor: '#060300',
            },
            readMore: {
                borderRadius: 25,
                borderColor: 'black',
                borderWidth: 1,
                margin: 5,
                backgroundColor: '#853',
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '-3px 3px #110',
            },
        }
    );

    const handlePress = () => {
        available ? Alert.alert(`Has reservado el libro "${title}" de ${author}.`) : Alert.alert('Este libro no se encuentra disponible.')
    }
    const handleRead = () => {
        setSummaryStatus(!summaryStatus)
        setReadMore(!readMore)
    }
    const shortText = summary.slice(0, 40)+'...'
    const [summaryStatus, setSummaryStatus] = useState(false)
    const [readMore, setReadMore] = useState(true)
    return <View style={styles.card}>
        <Image source={{ uri: `${imageUrl}`, }} style={styles.image} />
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.footer}> {details} </Text>
        <Text style={styles.subtitle}> {author} </Text>

        <View style={styles.descriptionBox} >
            <Text style={styles.description}> {summaryStatus ? summary : shortText} </Text>
        </View>
        <View style={{flexDirection:'row-reverse'}}>
        <Pressable onPress={handlePress}><View style={styles.buttonStyle} >
            
                <Text style={styles.buttonText}>{texto}</Text>
            
        </View></Pressable>
        <Pressable onPress={handleRead}><View style={styles.readMore} >
            
                <Text style={styles.buttonText}>{readMore ? "Leer más." : "Leer menos"}</Text>
            
        </View></Pressable>
        </View>
    </View>
}

