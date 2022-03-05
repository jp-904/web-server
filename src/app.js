const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

//define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//set up static path to serve
app.use(express.static(publicDirectoryPath))

//set up handlebars config and views directory
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'JP'
    })
})

app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'About Me',
        name: 'JP'
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        title: 'Help',
        helpText: 'This is a help page',
        name: 'JP'        
    })
})

app.get('/help/*', (req, res)=>{
    res.render('404',{
        title: '404',
        name: 'JP',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res)=>{
    res.render('404',{
        title: '404',
        name: 'JP',
        errorMessage: 'Page Not found'        
    })
})


app.listen(3000,()=>{
    return 'App is running on port 3000'
})