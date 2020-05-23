/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {Fragment} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  requireNativeComponent,
  TouchableHighlight,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const PointerInteractionView = requireNativeComponent('PointerInteraction');

//import { PointerInteractionView } from '@thefunbots/react-native-pointer-interactions';

const App = () => {

  const modes = [
    {
      title: "Lift",
      pointerMode: "lift"
    },
    {
      title: "Highlight",
      pointerMode: "highlight"
    },
    {
      title: "Hover",
      pointerMode: "hover"
    },
    {
      title: "Vertical Beam",
      pointerMode: "verticalBeam",
      beamLength: 50
    },
    {
      title: "Horizontal Beam",
      pointerMode: "horizontalBeam",
    },
    {
      title: "Automatic",
      pointerMode: "automatic"
    },
  ]

  const renderViewWithPointerMode = (pointerMode, beamLength) => {
    const imageSize = 128;
    beamLength = beamLength || 1;
    return (
      <View key={pointerMode} style={styles.exampleContainer}>
        <View style={styles.exampleRow}>
          <PointerInteractionView pointerMode={pointerMode} beamLength={beamLength} style={{padding: 44, borderWidth: 0, borderColor: '#eee'}}>
            <Text>Simple blank view without touch interaction</Text>
          </PointerInteractionView>
        </View>
        <View style={styles.exampleRow}>
          <PointerInteractionView pointerMode={pointerMode} beamLength={beamLength} style={{borderWidth: 0, borderColor: '#eee', width: imageSize * 2}}>
            <TouchableHighlight onPress={() => Alert.alert(pointerMode)}>
              <View style={{backgroundColor: 'blue', borderRadius: 4, height: 44}}>
              <Text style={{color: '#fff', textAlign: 'center', lineHeight: 44, fontWeight: 'bold' }}>Sample button. Click Me!</Text>
              </View>
            </TouchableHighlight>
          </PointerInteractionView> 
        </View>
        <View style={styles.exampleRow}>
          <PointerInteractionView pointerMode={pointerMode} beamLength={beamLength} style={{borderWidth: 0, borderColor: '#eee', width: imageSize, height: imageSize}}>
            <Image style={{width: imageSize,height: imageSize, resizeMode: 'contain', alignSelf: 'center'}} source={require('./assets/ipad.png')} />
          </PointerInteractionView>
        </View>
      </View>)
  }

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView>

      
          <View style={styles.body}>

          {modes.map((item) => {
            return <View key={item.title} style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{item.title} effect</Text>
              {/* <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text> */}

              <View>
                {renderViewWithPointerMode(item.pointerMode, item.beamLength)}
              </View>
            </View>
          })}

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  exampleContainer: {
    flex: 1, 
    flexDirection: 'row',
    borderBottomColor: '#eee',
    borderBottomWidth: 0.5
  },
  exampleRow: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33%',
    marginVertical: 8,
    paddingHorizontal: 12,
  }
});

export default App;
