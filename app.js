#! /usr/bin/env node

import inquirer from "inquirer";
import { createSpinner } from "nanospinner";

const sleep = (ms=2000)=> new Promise((resolve)=>setTimeout(resolve,ms))
let registerationflag = true
let login = true
let loginPass = true
let userEnteredUserName, userEnteredPIN
while(registerationflag){

const UserNameRegister = await inquirer.prompt(
    {
       name:'UserNameReg',
       type:"input",
       message:"Please Enter UserName for registration",
        default(){
           return "Null"
        }
    }
)

 userEnteredUserName= UserNameRegister.UserNameReg

const PINRegister = await inquirer.prompt(
    {
       name:'PINReg',
       type:"input",
       message:"Please Enter PIN for registration",
        default(){
           return "Null"
        }
    }
)

 userEnteredPIN= PINRegister.PINReg

if(userEnteredPIN!=="NULL" && userEnteredUserName!=="NULL"){
registerationflag = false
console.log("Account Sucessfully Created")
}
}
await sleep()
console.clear();

while (loginPass){

    const UsernameLogin = await inquirer.prompt(
        {
           name:'UserNameReg',
           type:"input",
           message:"Please Enter Username for login",
            default(){
               return "Null"
            }
        }
    )

    const PINLogin = await inquirer.prompt(
        {
           name:'PINReg',
           type:"input",
           message:"Please Enter PIN for login",
            default(){
               return "Null"
            }
        }
    )
    
    if(PINLogin.PINReg === userEnteredPIN && UsernameLogin.UserNameReg == userEnteredUserName){
        loginPass=false;
    }else{
        console.log("Incorrect PIN entered")
    }

}
let AcountBalance = 0;

while(login){
    const CreditDebit = await inquirer.prompt(
        {
           name:'CreDeb',
           type:"input",
           message:"Credit OR Debit",
            default(){
               return "Null"
            }
        }
    )


    const AmountCreditDebit = await inquirer.prompt(
        {
           name:'AmoCreDeb',
           type:"input",
           message:"Credit OR Debit Amount",
            default(){
               return "Null"
            }
        }
    )
const amount = parseInt(AmountCreditDebit.AmoCreDeb)
if(CreditDebit.CreDeb.toLowerCase()==="credit"){
    AcountBalance+=amount
    console.log(`transaction Completed, Your Current Balance is ${AcountBalance}` )
}else if(CreditDebit.CreDeb.toLowerCase()==="debit" && AcountBalance>amount){
    AcountBalance-= amount
    console.log(`transaction Completed, Your Current Balance is ${AcountBalance}` )
}else{
    console.log("transaction failed")
}

const Logout = await inquirer.prompt(
    {
       name:'logout',
       type:"input",
       message:"Do You Want To Log Out enter Yes to logout and No to make another transaction",
        default(){
           return "Null"
        }
    }
)

if((Logout.logout).toLowerCase()==="yes"){
    login = false
}



}


console.log("Good Bye")

