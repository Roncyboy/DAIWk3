import { Button, Input, Loader } from 'semantic-ui-react'

export default function LoginForm({
loginState='before',
 onLoginClick=()=>{}
}){

    var buttonText = 'click me';
    var c = "blue";  
  
    if(loginState === 'before'){
      c = 'blue';
      buttonText = 'click me '
    }
  
    if(loginState === 'during'){
      c = "green";
      buttonText = 'Logging in'
    }
  
    if(loginState === 'after'){
      c = "grey";
      buttonText = 'Signed in'
    }

    return(
        <div>
            <h3>Login Form</h3>
            <Input loading={loginState != 'before'} disabled={loginState != 'before'} placeholder="email"/>
            <Input loading={loginState != 'before'} disabled={loginState != 'before'} placeholder="password"/>
            <hr />
            <Button color={c} onClick={onLoginClick}>
        {buttonText} 
      {loginState === 'during' && <Loader active ></Loader>}
      </Button>
        </div>
    )
}