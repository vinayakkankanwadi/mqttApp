var mqtt = require('mqtt')
 
//client = mqtt.createClient(1883, 'localhost');
client = mqtt.connect('mqtt://localhost:1883');
 
client.subscribe('presence');
 
client.on('message', function(topic, message) {
  console.log(message);
});
 
console.log('Client started...');