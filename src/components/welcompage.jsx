import React from "react";
import * as Components from './Components';
import LogIn from './login'
import SignUp from './signup'

function Welcome() {
    const [signIn, toggle] = React.useState(true);
     return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <SignUp/>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <LogIn/>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Hello There</Components.Title>
                     <Components.Paragraph>
                         Already have an account?
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>FoodXpress</Components.Title>
                       <Components.Paragraph>
                           Don't have an account?
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sign Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default Welcome;