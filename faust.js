const fs = require('fs')

const verses = fs
  .readFileSync('faust.txt')
  .toString()
  .split('\n')
  .filter(verse => verse.length)

module.exports = () => verses[Math.round(Math.random() * (verses.length - 1))]
