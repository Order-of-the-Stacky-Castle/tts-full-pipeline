# Basic Deploy to Heroku of Angular Site
There is some needed setup require to a "standard" local build in order to make the build success and be deployed on Heroku. This tutorial assumes you are starting with a working build of a local Angular application.
1. Create a new file called `server.js` at the base of the repo.
2. Put the following in the `server.js` file:
        
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
3. Edit the `package.json` file's `scripts` section. Change the start script to be `"start": "node server.js"` and add an entry to the scripts section 

        "postinstall": "ng build --output-path dist/basic-wk9"

4. Edit the `dependencies` section in the `package.json` file to include the following additions:

        "typescript": "~3.1.6",
        "express": "^4.16.4", 
        "@angular/cli": "~7.1.3",
        "@angular/compiler-cli": "~7.1.0",
        "@angular/http": "^7.1.4"

5. Add an `engines` declaration section in the `package.json` file.

        "engines": {
          "node": "11.4.0",
          "npm": "6.4.1"
        }

6. Create a new application on Heroku.
7. Connect it to your GitHub repository for the site.
8. Enable automatic deployment on the `master` branch.
9. Now any time a new code base is pushed to the `master` branch, Heroku will attempt to build and deploy.

You can find the deployed app on Heroku [here](https://tts-devops-bnn-wk09.herokuapp.com/)

![Deployment Screen Shot](../07_Deploy_ScreenShot.png)

![Deployment Screen Shot](../07_Deploy_ScreenShot2.png)