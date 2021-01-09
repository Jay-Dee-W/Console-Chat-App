const io = require("socket.io-client");
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin,  output: process.stdout });

// write your code here
  let prompt = '>'
  rl.setPrompt(prompt)
  //let socket = io()
  
  rl.prompt()
  rl.question('What is your Name ? ', (userName) => {
  
    socket = io.connect('http://localhost:3000');
    
   
    
  
    rl.on('line', (input) => {
      console.log(`Sending Message: "${input}"`);
      socket.emit('simple chat message', userName + ' says ' + `"${input}"`)
      // rl.prompt()
    });
    
    socket.on("simple chat message",  (msg) => {
      console.log(`${msg}`)
      // rl.prompt()
    })
    
    socket.on('disconnect', function() {
      console.log("Connection lost...")
      // rl.prompt()
    });

    socket.on('connect', function() {
      console.log('Successfully connected to server')
      // rl.prompt()
    });

   
});



  



