The Publish-Subscribe (Pub-Sub) pattern is a messaging pattern that allows communication between different components or modules in a system without them being directly aware of each other. In this pattern, publishers send messages (events) to a central message broker, and subscribers receive those messages based on their interests.

Here's an example implementation of the Pub-Sub pattern in JavaScript:

```javascript
class PubSub {
  constructor() {
    this.subscribers = {};
  }

  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }

    this.subscribers[event].push(callback);
  }

  unsubscribe(event, callback) {
    if (!this.subscribers[event]) {
      return;
    }

    const index = this.subscribers[event].indexOf(callback);
    if (index !== -1) {
      this.subscribers[event].splice(index, 1);
    }
  }

  publish(event, data) {
    if (!this.subscribers[event]) {
      return;
    }

    this.subscribers[event].forEach((callback) => {
      callback(data);
    });
  }
}

// Usage example:

// Create a new instance of PubSub
const pubSub = new PubSub();

// Subscribe to an event
const subscription = pubSub.subscribe("userLoggedIn", (data) => {
  console.log(`User logged in: ${data.username}`);
});

// Publish an event
pubSub.publish("userLoggedIn", { username: "JohnDoe" });

// Unsubscribe from an event
pubSub.unsubscribe("userLoggedIn", subscription);
```

In this example, we have a `PubSub` class that represents the central message broker. It maintains a list of subscribers for each event. The `subscribe` method allows components to subscribe to an event by providing an event name and a callback function. The `unsubscribe` method removes a specific callback from the subscribers' list for a given event. The `publish` method publishes an event by invoking all the registered callbacks for that event and passing the data as an argument.

In the usage example, we create a new instance of `PubSub` and subscribe to the 'userLoggedIn' event. When the event is published with some data, the callback function associated with the event is executed. In this case, it logs a message to the console with the username of the logged-in user. We can also unsubscribe from the event by providing the subscription object returned by the `subscribe` method.

The Pub-Sub pattern provides loose coupling between components, as publishers and subscribers don't have direct dependencies on each other. It enables better scalability and flexibility in system design by allowing components to communicate indirectly through events and messages.
