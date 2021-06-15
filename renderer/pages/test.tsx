const { exec } = require('child_process')

export default function test() {
    exec("cat index.js", (error, data, getter), ) => {
        if(error){
            console.log("error", error.message);
            return;
        }
    
        if(getter){
            console.log("data", data.message);
            return;
        }
        console.log("data",data);
    
    }
    
}