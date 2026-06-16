import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import { FlatList } from "react-native"
// import { MyBookItem } from "./MyBookItem"


export const MyBooks = () => <SafeAreaProvider><SafeAreaView /></SafeAreaProvider> 
    // const books = JSON.parse(localStorage.getItem("MyBooks"))
    // return <SafeAreaProvider>
    //         <SafeAreaView style={styles.bookList}>
    //             <FlatList 
    //             data={books}
    //             renderItem={({item})=> <MyBookItem bookProp={item} /> }
    //             keyExtractor={item=>item.id.toString()} />
    //         </SafeAreaView>
    //     </SafeAreaProvider>