# Hypercore Extension Test

This small application is a test on using [hypercore feed extensions](https://github.com/mafintosh/hypercore#ext--feedregisterextensionname-handlers) in order to broadcast ephemeral messages to peers. For that purpose, it sends single verses from Goethe's Faust (obtained from [Projekt Gutenberg](https://www.projekt-gutenberg.org/goethe/faust1/faust1.html)) to each peer that is accessing the same hypercore feed. To run this test, you'll need [Node.js](https://nodejs.org/en/) and install all dependencies (`npm install`).

To my understanding, hypercore feeds---and their replication---are encrypted and a feed's discovery key serves both for discovery as well as decryption. With the first instance of the application, we will let hypercore generate a new feed and thus, a new discovery key:

```bash
node .
```

This instance will output its discovery key. Copy it and create a second instance with this key:

```bash
node . <key>
```

Upon feed initialization and discovery---both peers will join the same swarm based on the feed's key---they will start sending random lines from the first chapter of Faust to each other. That's it!

