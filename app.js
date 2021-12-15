const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

let songs = [
    {
        title: 'Shake it out',
        artist: 'Florence + The Machine',
        album: 'Ceremonials',
        duration: '4:37',
        imgUrl: 'ceremonials.png'
    },
    {
        title: '6 Foot 7 Foot',
        artist: 'Lil Wayne',
        album: 'Tha Carter IV',
        duration: '4:08',
        imgUrl: 'tha_carter_iv.jpg'
    },
    {
        title: 'The Edge of Glory',
        artist: 'Lady Gaga',
        album: 'Born This Way',
        duration: '4:20',
        imgUrl: 'born_this_way.png'
    }
]