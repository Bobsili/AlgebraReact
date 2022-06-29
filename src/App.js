import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";
import FormError from "./components/FormError";
import FormMessage from "./components/FormMessage";
import { User } from "./components/User";
import Avatar from "./avatar.jpg"
import { Counter } from "./components/Counter";


function App() {
  const isSignedIn = true;
  // let formMessageComponent = null;
  // if (isSignedIn) {
  //   formMessageComponent = (<div className="form-message">
  //       Successful sign in!
  //     </div>)
  // }

  return (
    <>
      
      <Counter initialValue={0} />
      <Counter initialValue={100} />

      <form className="form">
      <div className="form-field">
       {isSignedIn && <User src={Avatar} alt="avatarPicture" username="Aang"/>} 
      <InputElement label="Username" type="text" />     
      </div>
      <div className="form-field">
      <InputElement label="Password" type="password" />
      </div>
      <div className="form-field">
        <Button type="button">Sign in</Button>
        <Button type="reset">Reset</Button>
      
        <FormError visible={!isSignedIn} />
        <FormMessage visible={isSignedIn} />
      </div>
      </form>
    </>
  );
}
export default App;