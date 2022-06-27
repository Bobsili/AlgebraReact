import "./App.css";
//ctrl+space da prikaže funkciju koju importamo
import { InputElement } from "./components/InputElement";
import Button from "./components/Button";
import FormError from "./components/FormError";
import FormMessage from "./components/FormMessage";

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



//pozivam labelu
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
      <InputElement label="Username" type="text" />     
    </div>
    <div className="form-field">
      
      <InputElement label="Password" type="password" />
    </div>
    <div className="form-field">
        <Button type="button">Sign in</Button>
        <Button type="reset">Reset</Button>
      </div>
      <FormError visible={isSignedIn} />
      <FormMessage visible={!isSignedIn} />
     
  </form>
  );
}



export default App;
