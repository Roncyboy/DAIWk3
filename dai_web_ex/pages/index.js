// import { Button, Loader } from 'semantic-ui-react'
import LoginForm from '../comps/LoginForm';

import {useRouter} from 'next/router';
import { useState } from 'react';
 
export default function Home() {
  const r = useRouter();

  const [loginState, setLoginState] = useState('before')

  // var buttonText = 'click me';
  // var c = "blue";  

  // if(loginState === 'before'){
  //   c = 'blue';
  //   buttonText = 'click me '
  // }

  // if(loginState === 'during'){
  //   c = "green";
  //   buttonText = 'Logging in'
  // }

  // if(loginState === 'after'){
  //   c = "grey";
  //   buttonText = 'Signed in'
  // }

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

  return (
    <div>
      {/* <Button color={c} onClick={()=>Login()}>
        {buttonText} 
      {loginState === 'during' && <Loader active ></Loader>}
      </Button> */}
      <LoginForm 
      loginState={loginState}
      onLoginClick={()=>Login()}
      />
    </div>
  )
}
