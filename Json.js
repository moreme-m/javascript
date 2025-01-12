let user1 = {
    password: "1234",
    email: "user@user.com",
    first_name:"User",
    username: "userbest"
}

let myjson = JSON.stringify(user1)
let newObj = JSON.parse(myjson)

document.write(myjson)
document.write(newObj)

function greet(name, callback){
    document.write("hello," + name );
    callback();
};

function goodbye(){
    
    document.write("Goodbye!")
}



greet("userworst", goodbye);