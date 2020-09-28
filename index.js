#! /usr/bin/env node

const colors = require('colors')
const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(colors.rainbow(data))
        return data
    }
})