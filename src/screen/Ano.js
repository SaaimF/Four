import React, {useState,useRef} from 'react';
import {
  View,
  Image,
  Dimensions,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerAnimation] = useState(new Animated.Value(0));

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

  const rotateElement = (index, totalElements) => {
    const angle = (360 / totalElements) * index;
    return {
      transform: [{ rotate: `${angle}deg` }],
    };
  };
  const drawerStyle = {
    transform: [{ scale: scaleAnimation }]
  };

  const translateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-270, 0],
  });
  const translateX1 = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 270],
  });

  const translateX2 = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0,90], 
  });
  // const translateX3 = drawerAnimation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0,150], 
  // });

  // const translateYellowScreen = drawerAnimation.interpolate({
  //   inputRange: [0, height],
  //   outputRange: [height, height - 50], 
  // });
  
  const closeDrawer = () => {
    if (drawerOpen) {
      toggleDrawer();
    }
  };

  return (
    <View style={styles.container} onStartShouldSetResponder={closeDrawer}>
      <Animated.View
        style={[
          {
            
            backgroundColor: '#fff',
            height:
            //  drawerOpen ? height/1.3 : 
            height,
            borderRadius: drawerOpen ? 30 : 0,
           
         
          },
          {
            transform: [{ translateX: translateX1 },
              // {translateY:translateX2},
              // {translateY:translateX3}
            ],
          },
        ]}
      >
        <View
          style={{
            marginLeft: 10,
            width: width / 6,
            justifyContent: 'space-around',
            height: height / 2,
          }}>
          {!drawerOpen && (
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={toggleDrawer}>
              <Image
                source={require('../assets/pics/R.png')}
                style={styles.pic}
              />
            </TouchableOpacity>
          )}

          <Image
            source={require('../assets/pics/Prof.png')}
            style={styles.pic2}
          />
          <Image
            source={require('../assets/pics/inb.png')}
            style={styles.pic3}
          />
          <Image
            source={require('../assets/pics/Sta.png')}
            style={styles.pic4}
          />
          <Image
            source={require('../assets/pics/Sen.png')}
            style={styles.pic4}
          />
        </View>
      </Animated.View>
     <Animated.View style={[styles.drawer, drawerStyle]}>
        <View
          // style={{
          //   flexDirection: 'row',
          //   alignItems: 'center',
          //   height: height / 15,
          //   width: width / 1.9,
          //   borderBottomRightRadius: 20,
          //   backgroundColor: '#0070B8',
          //   justifyContent: 'space-around',marginLeft:10
          // }}
          >
          <TouchableOpacity style={styles.closeButton} onPress={toggleDrawer}>
            <Image
              source={require('../assets/pics/R.png')}
              style={styles.closeIcon}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: '#fff',
              marginLeft: -200,
            }}>
            Inbox
          </Text>
        </View>
        <View style={{height: height / 2, justifyContent: 'space-around'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 20,
              marginLeft: -80,
            }}>
            <Image
              source={require('../assets/pics/Prof.png')}
              style={styles.pic2}
            />
            <Text style={styles.drawerContent}>Saaim Fasih</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 20,
              marginLeft: -145,
            }}>
            <Image
              source={require('../assets/pics/inb.png')}
              style={styles.pic3}
            />
            <Text style={styles.drawerContent1}>Inbox</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 20,
              marginLeft: -145,
            }}>
            <Image
              source={require('../assets/pics/Sta.png')}
              style={styles.pic4}
            />
            <Text style={styles.drawerContent1}>Stard</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 20,
              marginLeft: -140,
            }}>
            <Image
              source={require('../assets/pics/Sen.png')}
              style={styles.pic4}
            />
            <Text style={styles.drawerContent1}>Sentt</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      backgroundColor: '#0070B8', // Change this to your desired background color
    },
    drawer: {
        top:-500,
        width: 600,
        height: 600,
        borderRadius: 400,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
      
  // This ensures contents don't overflow outside the circle
    
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  drawerContent: {
    marginLeft: -150,
    fontSize: 25,
  },
  drawerContent1: {
    marginLeft: -280,
    fontSize: 25,
  },
  closeIcon: {
    height: height / 16,
    width: width / 7,
    tintColor: '#fff',
    marginLeft: -90,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  pic: {
    height: height / 16,
    width: width / 7,
  },
  pic2: {
    height: height / 16,
    width: width / 7,
    borderRadius: 30,
  },
  pic3: {
    height: height / 18,
    width: width / 8,
    tintColor: '#FE0062',
  },
  pic4: {
    height: height / 17.7,
    width: width / 8,
    tintColor: '#8e8e8e',
  },
});

export default Drawer;


