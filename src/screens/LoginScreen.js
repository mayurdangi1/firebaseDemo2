import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import externalStyles from '../assets/stylesheets/externalStyle';

function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={externalStyles.loginContainer}>
      <ScrollView style={externalStyles.scrollView}>
        <Image
          source={require('../assets/icons/home1.png')}
          style={{width: '100%'}}
        />
        <View style={externalStyles.loginBody}>
          <View style={externalStyles.loginMewurkLogo}>
            <Image source={require('../assets/icons/mewurk_name.png')} />
          </View>
          <View style={externalStyles.inputContainer}>
            <Text style={externalStyles.labels}>Email ID / Mobile Number</Text>
            <TextInput
              style={externalStyles.inputStyle}
              placeholder="Enter Email / Mobile Number"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={externalStyles.inputContainer}>
            <Text style={externalStyles.labels}>Password</Text>
            <TextInput
              style={externalStyles.inputStyle}
              placeholder="Enter Password"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <TouchableOpacity>
            <Text style={externalStyles.primaryButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={externalStyles.primaryTextButton}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LoginScreen;
