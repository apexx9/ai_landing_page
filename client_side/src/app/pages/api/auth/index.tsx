import React from 'react';
import styles from "../../../styles/pages/register/_index.module.scss";
import SignIn from './sign-in';
import SignUp from './sign-up';



{/* Write the sign in logics here  */}

{/* Write the sign up logics here too */}

//make the function render the one that is chosen by the user based on the button selected.

const Index = ({Action} : {Action : String}) => {
  return (
    <div className={styles['index']}>
        {
            Action == "Sign In" ? <SignIn /> : <SignUp />
        }
    </div>
  )
}

export default Index;