const mqtt = require("mqtt");

const host = 'rocky-citadel-96938.herokuapp.com';

const client = mqtt.connect(`ws://${host}`);

client.on("connect", () => {
  client.subscribe("presence", (err) => {
    if (!err) {
      client.publish("presence", "Hello mqtt");
    }
  });
});

client.on("message", (topic, message) => {
  // message is Buffer
  console.log(message.toString());
  client.end();
});