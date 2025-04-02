import { StyleSheet, Text, View, Button,Image, FlatList, ScrollView} from 'react-native';
import React from 'react';
import profile from '../assets/profile.png'
import search from '../assets/search.png'
import card from '../assets/Card.png'

const Actions = [
  {id: '1', title: 'Send', image: require("../assets/send.png") },
  {id: '2', title: 'Receive', image: require("../assets/recieve.png") },
  {id: '3', title: 'Loan', image: require("../assets/loan.png") },
  {id: '4', title: 'Topup', image: require("../assets/topUp.png") },
]

const Transactions =[
  {id: '1', image: require('../assets/apple.png'), Label: 'Apple Store', Description: 'Entertainment', Amount: '-$5,99'},
  {id: '2', image: require('../assets/spotify.png'), Label: 'Spotify', Description: 'Music', Amount: '-$12,99'},
  {id: '3', image: require('../assets/moneyTransfer.png'), Label: 'Money Transfer', Description: 'Transaction', Amount: '$300'},
  {id: '4', image: require('../assets/grocery.png'), Label: 'Grocery', Description: 'Food', Amount: '-$88'},
]

const ActionItem = ({image,title})=>(
  <View style={styles.actionContainer}>
    <View style={styles.imageContainer}><Image source={image} style={styles.actionImage}/></View>
    <Text style={styles.actionText}>{title}</Text>
  </View>
)

const TransactionItem =({image, Label, Description, Amount})=>(
  <View style={styles.transactionContainer}>
    <View style={styles.transactionImageContainer}><Image source={image} style={styles.transactionImage}/></View>
    <View style={styles.transactionText}>
      <Text style={styles.label}>{Label}</Text>
      <Text style={styles.description}>{Description}</Text>
    </View>
    <Text style={[styles.amount, Label == 'Money Transfer' && styles.blueAmount]}>{Amount}</Text>
  </View>
)

 const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileBlock}>
        <View style={styles.profileImage}>
          <Image source={profile}/>
        </View>
        <View style={styles.profileText}>
          <Text style={styles.welcome}>Welcome back</Text>
          <Text style={styles.profileName}>Eric Atsu</Text>
        </View>
        <View style={styles.searchIconContainer}>
          <Image source={search}
          style={styles.searchIcon}/>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <Image source={card}/>
      </View>

      <View style={styles.Actionflatlist}>
        <FlatList
        data={Actions}
        keyExtractor={(item)=> item.id}
        horizontal
        renderItem={({item})=> <ActionItem{...item}/>}
        showsHorizontalScrollIndicator= {false}/>
      </View>

      <View style={styles.transactionHeader}>
        <Text style={styles.transaction}>Transaction</Text>
        <Text style={styles.sellAll}>Sell All</Text>
      </View>

      <View style={styles.transactionFlatlist}>
        <FlatList
        data={Transactions}
        keyExtractor={(item) => item.id}
        renderItem={({item})=> <TransactionItem{...item}/>}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  profileBlock: {
    marginTop:70,
    marginLeft: 25,
    flexDirection: 'row'
  },
  profileText: {
    paddingLeft: 17,
    justifyContent: 'space-evenly',
  },
  
  welcome: {
    color: 'gray',
  },

  profileName: {
    fontSize: 20,
  }, 

  searchIconContainer: {
    marginLeft: 125,
    backgroundColor: '#f4f4f4',
    alignContent: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchIcon: {
    marginLeft:12,
    width:24,
    height: 24,
  },

  cardContainer: {
    paddingTop: 35,
    marginLeft: 25,
  },
  actionContainer: {
    marginLeft: 25,
    marginRight:20,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer:{
    backgroundColor: "#f4f4f4",
    height:50,
    width: 50,
    borderRadius:25,
    justifyContent: 'center',
    alignItems:'center',
  },
  actionImage:{
    height:20,
    width: 19,
  },
  actionText:{
    marginTop: 10,
    fontWeight: 300,
  },

  transactionHeader: {
    flexDirection: 'row',
    marginLeft:25,
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  transaction:{
    fontWeight: 300,
    fontSize: 22,
  },
  sellAll:{
    marginRight: 35,
    color: '#1E90ff',
    fontSize: 15,    
  },


  transactionContainer:{
    paddingLeft: 25,
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  transactionImageContainer:{
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  transactionText:{
    marginRight: 90,
  },
  label: {
    fontSize: 18,
  },
  description:{
    fontWeight: 300,
    color: 'gray'
  },
  amount:{
    marginRight: 35,
    fontSize: 18,
  },
  blueAmount:{
    color: '#1E90ff'
  }
});
export default HomeScreen
