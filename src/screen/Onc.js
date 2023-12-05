import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

const Once = () => {
  const [open, setOpen] = useState(false);
  const scaleAnimation = useRef(new Animated.Value(0)).current;

  const toggleDrawer = () => {
    const toValue = open ? 0 : 1;

    Animated.timing(scaleAnimation, {
      toValue,
      duration: 500,
      useNativeDriver: true
    }).start();

    setOpen(!open);
  };

  const drawerStyle = {
    transform: [{ scale: scaleAnimation }]
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.openDrawerButton} onPress={toggleDrawer}>
        <Text>Open Drawer</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.drawer, drawerStyle]}>
        <TouchableOpacity style={styles.closeDrawerButton} onPress={toggleDrawer}>
          <Text>Close Drawer</Text>
        </TouchableOpacity>

        {/* Other drawer content here */}
        <Text>Drawer Content</Text>
      </Animated.View>
    </View>
  );
};

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  openDrawerButton: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#0070B8',
    borderRadius: 5,
  },
  closeDrawerButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#0070B8',
    borderRadius: 5,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.8,
    height: height,
    backgroundColor: '#ffffff',
    zIndex: 100,
    elevation: 5,
    padding: 20,
  },
});

export default Once;
