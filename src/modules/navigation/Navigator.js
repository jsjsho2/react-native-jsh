import * as React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import { 
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import NavigatorView from './RootNavigation';

const iconHome = require('../../../assets/images/drawer/home.png');
const iconCalendar = require('../../../assets/images/drawer/calendar.png');
const iconGrids = require('../../../assets/images/drawer/grids.png');
const iconPages = require('../../../assets/images/drawer/pages.png');
const iconComponents = require('../../../assets/images/drawer/components.png');
const iconSettings = require('../../../assets/images/drawer/settings.png');
const iconBlog = require('../../../assets/images/drawer/blog.png')

const drawerData = [
  {
    name: 'Home',
    icon: iconHome,
  },
    {
      name: 'Map',
      icon: iconGrids,
    },
  {
    name: 'Calendar',
    icon: iconCalendar,
  },
      {
        name: 'Image',
        icon: iconComponents,
      },
  {
    name: 'Pages',
    icon: iconPages,
  },
  {
    name: 'Components',
    icon: iconComponents,
  },
];

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{padding: 0}}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/images/yamyam.gif')}
        />
        <View style={{ paddingLeft: 15 }}>
          <Text style={styles.userName}>정승호</Text>
          <Text style={{ color: '#4BC1FD' }}>jsjsho2@gmail.com</Text>
        </View>
      </View>
      <View style={styles.divider} />
      {drawerData.map((item, idx) => (
        <DrawerItem
          key={`drawer_item-${idx+1}`}
          label={() => (
            <View
              style={styles.menuLabelFlex}>
              <Image
                style={{ width: 20, height: 20}}
                source={item.icon}
              />
              <Text style={styles.menuTitle}>{item.name}</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate(item.name)}
        />
      ))}
      <View style={styles.divider} />
      <DrawerItem
        label={() => (
          <View style={styles.menuLabelFlex}>
            <Image
              style={{ width: 20, height: 20}}
              source={iconBlog}
            />
            <Text style={styles.menuTitle}>Git</Text>
          </View>
        )}
        onPress={() => Linking.openURL("https://github.com/jsjsho2")}
      />
      <View style={styles.divider} />
      <DrawerItem
        label={() => (
          <View style={styles.menuLabelFlex}>
            <Image
              style={{ width: 20, height: 20}}
              source={iconSettings} 
            />
            <Text style={styles.menuTitle}>Settings</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Calendar')}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {

  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#3C38B1',
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Homes" component={NavigatorView} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  menuTitle: {
    marginLeft: 10,
    color: '#fff'
  },
  menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row'
  },
  userName: {
    color: '#fff',
    fontSize: 18
  },
  divider: {
    borderBottomColor: 'white',
    opacity: 0.2,
    borderBottomWidth: 1,
    margin: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginBottom: 10
  },
});
