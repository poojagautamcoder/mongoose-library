const mongoose = require("mongoose");
// const { run } = require("node:test");
const User = require("./User");

mongoose.connect("mongodb://localhost:27017/testdb", () => {
    console.log("connected");
},
e => console.error(e)
)

run();

async function run() {
    try{
        const user = await User.create({
            name: "xyz",
            age: 25,
            hobbies: ["dancing", "painting", "singing"],
            address: {
                street : "xyz"
            }
          });
          console.log(user);
    }catch (e){
        console.log(e.message);
    }
}


// other methods 
// User.name = "pooja";
//await user.save();
//const user = new User({ name: "xyz", age: 25})
//await user.save()
