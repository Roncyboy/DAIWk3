import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Layout, Button } from '@ui-kitten/components';
import { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export const InputStatesShowcase = () => {
  const r = createNativeStackNavigator();
  const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );
  
  const LoadingIndicator = (props) => (
    <View style={[props.style, styles.indicator]}>
      <Spinner size='small'/>
    </View>
  );

  const [loginState, setLoginState] = useState('before')

  var buttonText = 'click me';
  var icon = {StarIcon};  

  if(loginState === 'before'){
    icon = {StarIcon};
    buttonText = 'click me '
  }

  if(loginState === 'during'){
    icon = {LoadingIndicator};
    buttonText = 'Logging in'
  }

  if(loginState === 'after'){
    icon = "StarIcon";
    buttonText = 'Signed in'
  }

  const HandleButton = () =>{
    if(loginState === 'before'){
    setLoginState ("during");
    }
    if(loginState === 'during'){
      setLoginState ('after')
    }
    if(loginState === "after"){
      r.push('/dashboard');
    }
  }

  const Login = async () => {
    setLoginState('during');
    //take time, mock code **dont use**
    await new Promise (resolve=>setTimeout(resolve, 2000));
    setLoginState('after');

    //it stalls for 1-2 secs
    await new Promise (resolve=>setTimeout(resolve, 2000));

    r.push('/dashboard');
  }

  const [value, setValue] = React.useState('');

  return (
    <Layout style={styles.container} level='1'>

      <Input
        style={styles.input}
        value={value}
        disabled={false}
        placeholder='Username'
        onChangeText={nextValue => setValue(nextValue)}
      />

      <Input
        style={styles.input}
        value={value}
        disabled={false}
        placeholder='Password'
        onChangeText={nextValue => setValue(nextValue)}
      />

<Button loading={loginState != 'before'} disabled={loginState != 'before'} style={styles.button} appearance='outline' accessoryLeft={icon}>
      {buttonText}
    </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    margin: 2,
  },
});