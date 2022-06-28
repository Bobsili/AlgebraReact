import "./App.css";
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";
import FormError from "./components/FormError";
import FormMessage from "./components/FormMessage";
import User from "./components/User";
import Avatar from "./avatar.jpg"


// function FormError(props) {
//   if (!props.visible) {
//     return null;
//   }
//   return <div className="form-error">Failed to sign in!</div>
// }

// function FormMessage(props) {
//   if (!props.visible) {
//     return null;
//   }
//   return <div className="form-error">Successfully sign in!</div>
// }


function App() {
  const isSignedIn = true;
  // let formMessageComponent = null;
  // if (isSignedIn) {
  //   formMessageComponent = (<div className="form-message">
  //       Successful sign in!
  //     </div>)
  // }

  return (
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
      </div>
      <FormError visible={!isSignedIn} />
      <FormMessage visible={isSignedIn} />
  </form>
  );
}

export default App;
