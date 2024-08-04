import { SignIn } from "./Pages/signin.page";
import { SignUp } from "./Pages/signup.page";
import { PageHolder } from './abstractClasses';
import { GaragePage } from './Pages/garage.page';
import { HomePage } from './Pages/home.page'



export class App extends PageHolder {
    public signIn = new SignIn(this.page)
    public signUp = new SignUp(this.page)
    public garagePage = new GaragePage(this.page)
    public homePage = new HomePage(this.page)



}