import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';

export default function HomeScreen() {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.bgImage}
        resizeMode="cover"
      >
        <View style={styles.section}>
          <Text size={20} white>
            Home
          </Text>
        </View>
        <View style={styles.section}>
            <Image
              style={styles.mainImage}
              source={require('../../../assets/images/cheeze-duck.png')}
            />
        </View>
        <View style={[styles.section, styles.sectionLarge]}>
          <Text color="#19e7f7" hCenter size={15} style={styles.description}>


          </Text>
          <View style={styles.priceContainer}>
              <Text white size={14}>
                 version 1.0
              </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
    marginHorizontal: -20,
  },
  mainImage: {
    flex: 1,
    marginHorizontal: 110,
    transform: [{ scale: 2 }]
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  title: {
    marginTop: 30,
  },
});
