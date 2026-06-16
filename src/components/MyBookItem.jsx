// import { useState } from "react";
// import { Image, Pressable, View, Text } from "react-native"
// import { StyleSheet } from "react-native"
// import Collapsible from "react-native-collapsible"
// import { removeFromMyBooks } from "./MyBookServices";


// export const MyBookItem = ({bookProp}) => {
//     const {id, title, author, rating, pageCount, imageUrl, available, summary} = bookProp;
//     const details = `${rating}⭐, ${pageCount}📄`
//     const [isCollapsed, setCollapsed] = useState(true)
//     const toggleCollapsible = () => setCollapsed(!isCollapsed)
//     const handlePress = () => removeFromMyBooks(id)
//     return <View style={styles.card}>
//         <Image source={{uri: `${imageUrl}`,}} style={styles.image} />
//         <Text style={styles.title}> {title} </Text>
//         <Text style={styles.footer}> {details} </Text>
//         <Text style={styles.subtitle}> {author} </Text>

//         <Pressable onPress={toggleCollapsible}>
//             <Collapsible collapsed={isCollapsed} collapsedHeight={35}>
//                 <View style={styles.descriptionBox} >
//                     <Text style={styles.description}> {summary} </Text> 
//                 </View>
//             </Collapsible>
//         </Pressable>
//         <View style={styles.buttonStyle} >
//             <Pressable onPress={handlePress}>
//                 <Text style={styles.buttonText}>Remove from My Books</Text>
//             </Pressable>
//         </View>
//     </View>
// }

// const styles = StyleSheet.create(
//     {
//         title: {
//             fontFamily:'serif',
//             fontSize: 24,
//             color: '#100800',
//             fontWeight: 900,
//         },
//         subtitle: {
//             fontSize: 18,
//             color: '#753',
//             textAlign: 'right',
//             fontWeight: 900,
//         },
//         card: {
//             flex: 0,
//             borderRadius: 25,
//             borderColor: 'black',
//             borderWidth: 3,
//             marginBlock: 20,
//             width: 420,
//             backgroundColor: '#f0e0d0',
//         },
//         description: {
//             fontSize: 18,
//             fontFamily: 'serif',
//             color: '#100800',
//             paddingHorizontal: 20,
//             lineHeight:22,
//             paddingBottom: 0,
//         },
//         descriptionBox: {
//             borderBottomColor:'#000',
//             borderBottomWidth: 3,
            
//         },
//         image: {
//             borderWidth: 4,
//             borderColor:'#753',
//             borderRadius: 25,
//             padding: 10,
//             margin: 10,
//             minWidth:300,
//             height:450,
//             alignSelf:'center',
//         },
//         footer: {
//             fontSize: 16,
//             color: '#b85',
//             textAlign: 'right',
//             textShadowOffset: { width: 1, height: 1 },
//             textShadowRadius: 1,
//             textShadowColor: '#000',
//         },
//         buttonStyle: {
//             borderRadius: 25,
//             borderColor: 'black',
//             borderWidth: 1,
//             margin: 25,
//             padding: 25,
//             backgroundColor: '#753',
//             alignItems: 'center',
//             justifyContent: 'center',
//             boxShadow: '-3px 3px #110',
//         },
//         buttonText: {
//             fontSize: 18,
//             color: '#fec',
//             textAlign: 'right',
//             fontWeight: 600,
//             textShadowOffset: { width: 2, height: 1 },
//             textShadowRadius: 1,
//             textShadowColor: '#060300',
//         },
//     }
// );