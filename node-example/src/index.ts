import { users, IUser } from "./users";

/**
 * users is an array of user information from your database.
 * Create a new array called greetings that is the result
 * of mapping over users and returning a string with
 * the user's first name and the number of
 * unread messages they have.
 *
 * Ex. ["Hi Jonathan! You have 3 unread messages."]
 */
let makeGreeting = (user:IUser)=>{
    if(+user.messages.unread<0){
        return "Hi "+user.first_name+"!"
    }
    else{
        return "Hi "+user.first_name+"! "+ "You have "+ user.messages.unread + " unread messages."
    }
}

let greetings = users.map(makeGreeting)