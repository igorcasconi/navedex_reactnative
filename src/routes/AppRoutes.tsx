import React, {useContext} from 'react';
import { Image, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import UserList from '../pages/UserList';
import Profile from '../pages/Profile';
import FormNaver from '../pages/FormNaver';
import ContextData from '../contexts/ContextData';

import logoImg from '../assets/logo.png';
import menuImg from '../assets/menu.svg';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


//Menu Drawer ------------------------------------------------------------------------------------
const ItemLogout = (props) => {

    const {signOut} = useContext(ContextData);

    return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem 
            label="Sair" 
            labelStyle={{fontSize: 24, color: '#000', fontFamily: 'Montserrat_600SemiBold'}}
            style={{ alignItems: 'center' }}
            onPress={() => { signOut(); }} />
        </DrawerContentScrollView>
      );
}

const DrawerUser = () => {
    
    return(
        <Drawer.Navigator initialRouteName="Navers" 
            drawerContent={props => <ItemLogout {...props} />}
            drawerContentOptions={{
                activeTintColor: '#FFF',
                itemStyle: { marginVertical: 5, alignItems: 'center' },
                labelStyle: { fontSize: 24, color: '#000', fontFamily: 'Montserrat_600SemiBold',},
                style: { marginTop: 350} }}
        >
            <Drawer.Screen name="Navers" component={AppRoutes}  />
            
        </Drawer.Navigator>
    );
}
// ---------------------------------------------------------------------------------------------------


const AppRoutes: React.FC = ({navigation}) => {

    const navigationOptionsBack = {
        headerTitle: () => ( <Image source={logoImg} resizeMode="contain" style={{ height: 40, width: 190, }} /> ), 
        headerTintColor: "#000",
        headerStyle: { backgroundColor: "#FFF" }, 
        headerTitleAlign: "center"
    }

    return(
        <Stack.Navigator>
            <Stack.Screen name="UserList" component={UserList} 
            options={{
                headerTitle: () => ( <Image source={logoImg} resizeMode="contain" style={{ height: 40, width: 190, }} /> ), 
                headerTintColor: "#000",
                headerStyle: { backgroundColor: "#FFF" }, 
                headerTitleAlign: "center",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => { navigation.openDrawer(); }} style={{marginLeft: 15}}>
                        <SvgUri width="25" height="25" source={menuImg}/> 
                    </TouchableOpacity>
                ),}} />

            <Stack.Screen name="Profile" component={Profile} options={navigationOptionsBack} />
            <Stack.Screen name="AddNaver" component={FormNaver} options={navigationOptionsBack} />
            <Stack.Screen name="EditNaver" component={FormNaver} options={navigationOptionsBack} />
            
        </Stack.Navigator>
    );
}

export default DrawerUser;