//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Build distribution folder
const dist_dir = "/dist/basic-wk9"
// Serve only the static files form the dist directory
app.use(express.static(__dirname + dist_dir));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+dist_dir+'/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);