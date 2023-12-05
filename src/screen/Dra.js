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
  const [drawerOpen, setDrawerOpen] = useState();
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

  //  const rotateElement = (index, totalElements) => {
  //   const angle = (360 / totalElements) * index;
  //   return {
  //     transform: [{ rotate: `${angle}deg` }],
  //   };
  // };
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
        {/* <Animated.View
          style={{
            marginLeft: 10,
            width: width / 6,
            justifyContent: 'space-around',
            height: height / 2,
          }}> */}
          {!drawerOpen && (
            <View style={{margin:20}}  >
            <TouchableOpacity
            
              onPress={toggleDrawer}>
              <Image
                source={require('../assets/pics/R.png')}
                style={styles.pic}
              />
            </TouchableOpacity></View>
          )}
<View >
          <Image
            source={require('../assets/pics/Prof.png')}
            style={styles.pic2}
          /></View>
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
        </Animated.View>
      {/* </Animated.View> */}
     <Animated.View style={[{    top: -400 ,
      width: 600,
      height: 600,
      borderRadius: 400,
      backgroundColor: 'lightblue',
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginLeft: -250,
    }, drawerStyle]}>
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
            marginLeft:-260,top:-95
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
              marginTop: -99,
              marginLeft: -150,
            }}>
            <Image
              source={require('../assets/pics/Prof.png')}
              style={{   height: height / 16,
              width: width / 7,
              borderRadius: 30,marginLeft:-200}}
            />
            <Text style={styles.drawerContent} numberOfLines={1} >Saaim Fasih</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 10,
              marginLeft: -145,
            }}>
            <Image
              source={require('../assets/pics/inb.png')}
              style={{height: height / 18,
              width: width / 8,
              tintColor: '#FE0062',}}
            />
            <Text style={{   marginLeft: -8,
    fontSize: 25,}}>Inbox</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 10,
              marginLeft: -145,
            }}>
            <Image
              source={require('../assets/pics/Sta.png')}
              style={{  height: height / 17.7,
              width: width / 8,
              tintColor: '#8e8e8e',marginLeft:-30}}
            />
            <Text style={{  marginLeft: -60,
    fontSize: 25,}}>Stard</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
          
              marginLeft: -140,
            }}>
            <Image
              source={require('../assets/pics/Sen.png')}
              style={{height: height / 17.7,
              width: width / 8,
              tintColor: '#8e8e8e',marginLeft:-150
            }}
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
  
  

  drawerContent: {
marginLeft:-120,
    fontSize: 25,
  },
  drawerContent1: {
    marginLeft: -180,
    fontSize: 25,
  },
  closeIcon: {
    height: height / 16,
    width: width / 7,
    tintColor: '#fff',
    marginLeft: -330,
    top:-50
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
    borderRadius: 30,margin:20
  },
  pic3: {
    height: height / 18,
    width: width / 8,
    tintColor: '#FE0062',margin:20
  },
  pic4: {
    height: height / 17.7,
    width: width / 8,
    tintColor: '#8e8e8e',margin:20
  },
});

export default Drawer;


