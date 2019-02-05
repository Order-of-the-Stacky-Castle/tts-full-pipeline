# tts-full-pipeline
Review our documentation on [GitHub Pages](https://order-of-the-stacky-castle.github.io/tts-full-pipeline/)

## The Assignment
```
# Full Pipeline Project

The purpose of today is to set up an end to end pipeline using the tools we have been chatting about these last few weeks. We want you to take a project and run it through the gamut. The steps that you would need to follow: 

1. Split into Groups of 3 
2. Decide Spring Boot or MEAN 
3. Build out the functionality of your application
   * **Note:** It does not need to be a complicated application, just have some functionality attached to it to make it look nice on the internet. 
4. Push your application to GitHub
5. Create a Jenkins Build that is 
   * Attached to your GitHub Repo
   * Works with every Push to GitHub 
   * Has Artifactory installed and linked up so that all resources you need in your build are there for you 
6. Have your Jenkins Build push your code to Heroku 

Keep track of each step that you took in your process because your deliverables are: 

1. A link to the GitHub Repo for your project
2. A Screenshot of Jenkins that shows me that your build is working 
3. A Screenshot of your Artifactory Server that shows me that is all linked up 
4. Your Heroku URL 
5. A tutorial for the process that you and your team went through to get everything set up. 
   * This tutorial should be such that anyone could pick it up, follow the steps and replicate the work that your team did. 
   * Every person needs to submit this tutorial (**NOTE:** The tutorial submission can be the same for all team members but I need each of you to submit it in, that means that I will be receiving 3 copies of the same tutorial)
```
## Steps
1. Configure npm cli to work with artifactory.

    -  Set the default npm registry using the following command (Note: may be different in other environments) 

            npm config set registry http://127.0.0.1:8081/artifactory/api/npm/virtual-npm-test/

    - Save artifactory credentials to `~/.npmrc` file

            _auth = <USERNAME>:<PASSWORD> (converted to base 64)
            email = youremail@email.com
            always-auth = true
    
    - Add the following line to the `package.json` file
    
            "publishConfig":{"registry":"http://127.0.0.1:8081/artifactory/api/npm/virtual-npm-test/"}

    - Run `npm publish`
    - After completing these steps running `npm install <PACKAGE_NAME>` will automatically add the package to the Artifactory repository.

2. Test asdf