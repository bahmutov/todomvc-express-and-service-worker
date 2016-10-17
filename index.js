const expressService = require('express-service')
const app = require('todomvc-express')
const urls = ['/', 'app.css']
const cacheName = require('./package.json').name
expressService(app, urls, cacheName)
