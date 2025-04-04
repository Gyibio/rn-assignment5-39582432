import { StyleSheet, Text, View, FlatList, Switch} from 'react-native';
import React, {useContext, useState} from 'react';
import {EventRegister} from 'react-native-event-listeners';
import themeContext from '../theme/ThemeContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SettingsOptions = [
    {id: '1', title: 'Language'},
    {id: '2', title: 'My Profile'},
    {id: '3', title: 'Contact Us'},
    {id: '4', title: 'Change Password'},
    {id: '5', title: 'Privacy Policy'},
]
const SettingsScreen = () => {
  const theme = useContext(themeContext)
  const [darkMode, setDarkMode] = useState(false);


const OptionsItem=({item})=> (
    <View style={styles.item}>
        <Text style={[styles.title, {color: theme.color}]}>{item.title}</Text>
        <MaterialIcons name="navigate-next" size={24} color="gray" />
    </View>        
);

  return (
    <View styles={[styles.container, {backgroundColor:theme.backgroundColor}]}>
        <Text style={[styles.header, {color: theme.color}]}>Settings</Text>
        <View style={styles.optionsContainer}>
            <FlatList
            data={SettingsOptions}
            keyExtractor={(item)=> item.id}
            renderItem={OptionsItem}
            />
        </View>

        <View style={styles.themeContainer}>
            <Text style={[styles.text, {color:theme.color}]}>Theme</Text>
            <Switch value={darkMode} onValueChange={(value)=> {setDarkMode(value);
                EventRegister.emit('ChangeTheme', value)
            }} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColo: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  header:{
    marginTop: 100,
    marginLeft: 150,
    fontWeight: 400,
    fontSize: 20,
  },
  item:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionsContainer: {
     paddingVertical: 80,
     
  },

  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  text: {
    fontWeight: 350,
    fontSize: 23,
  },

});
export default SettingsScreen
