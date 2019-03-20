import { resolve } from 'url';
import { reject } from 'q';

export class AuthService{
    loggedIn=false;

    isAuthnticated(){
        const promise =new Promise(
            (resolve,reject)=>{
                setTimeout(()=>{
                    resolve(this.loggedIn)
                
                },800);
            }
        );
        return promise;
    }

    login(){
        this.loggedIn=true;
    }
    
    logOut(){
        this.loggedIn=false;
    }
}