const ram = require('random-access-memory')
const replicate = require('@hyperswarm/replicator')
const hypercore = require('hypercore')
const faust = require('./faust')

function main () {
  const key = process.argv.length > 2 && Buffer.from(process.argv[2], 'hex')
  const feed = key ? hypercore(ram, key) : hypercore(ram)

  const ext = feed.registerExtension('foo', {
    encoding: 'utf-8',
    onmessage (message) {
      console.log(`message received: ${message}`)
    },
    onerror (err) {
      console.error('a bad error occured:', err)
    }
  })

  feed.on('ready', () => {
    console.log(`creating feed with key: ${feed.key.toString('hex')}`)
    replicate(feed, { live: true })

    setInterval(
      () =>
        ext.broadcast(faust()),
      2000
    )
  })
}

main()
