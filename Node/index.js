// const db=require("./firebase")
import {collection} from "firebase/firestore";
import app from "firebase";
// console.log(db);
const addUser=(user)=>{
    // app.collection("users")
    collection(app," users")
    .add(user)
    .then(resp=>console.log("User added successfully"))
    .catch(err=>console.log(err))
}


const getAllUsers=()=>{
    app.collection("users").get().then(resp=>{
        const users=resp.docs.map(doc=>({id:doc.id,...doc.data()}))
        console.log(users)
    })
}

const getUserById=(id)=>{
    db.collection('users').doc(id).get().then(resp=>{console.log({id:resp.id,...resp.data()})})
}


const updateUserById =(id,user)=>{
    db.collection('users').doc(id).set(user).then(resp=>console.log("user updated successfully"))
}


const deleteUserById=(id)=>{
    db.collection("users").doc(id).delete().then(resp=>console.log("user deleted successfully"))
}


const getUserByName=(name)=>{
    app.collection("users").where("name","==",name).get().then(resp=>{
        const users=resp.docs.map(doc=>({id:doc.id,...doc.data()}))
        console.log(users)
    })
}



const getUserByAge=(age)=>{
    db.collection("users").where("age","==",age).get().then(resp=>{
        const users=resp.docs.map(doc=>({id:doc.id,...doc.data()}))
        console.log(users)
    })
}

addUser({name:"Arun",age:25,phone:8660397320,address:{flatNo:6,location:"India"}});
getAllUsers()
getUserByName("Arun")
// deleteUserById("1")
// updateUserById("1",{name:"Dan",age:27,phone:9876546710,address:{flatNo:20,location:"India"}})
// getUserById("1")
// getUserByAge(18)