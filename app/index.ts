import { SignIn } from "./Pages/signin.page";
import { SignUp } from "./Pages/signup.page";
import { PageHolder } from './abstractClasses';


export class App extends PageHolder {
    public signIn = new SignIn(this.page)
    public signUp = new SignUp(this.page)

}