node {
  stage('Init'){
    sh 'ls -al'
    sh '''
        echo "Multiline shell steps works too"
        ls -lah
    '''
  }
  stage('Checkout SCM') {
    checkout([$class: 'GitSCM', branches: [[name: '*/dev'], [name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '716058d9-68c7-4d0e-af3a-eec20c0e09f4', url: 'https://github.com/Order-of-the-Stacky-Castle/tts-full-pipeline.git']]])
  }
  stage('Build'){
    def server = Artifactory.server 'debvmci-artifactory';
    // sh 'npm install'
    def rtNpm = Artifactory.newNpmBuild()
    // Define where NPM build should download dependencies from.
    rtNpm.resolver server: server, repo: 'virtual-npm-test'
    // Download NPM dependencies
    def buildInfo = rtNpm.install path: 'npm-example'
    // Define the deployer for package publishing
    rtNpm.deployer server: server, repo: 'npm-local'
  }
  stage('Deploy'){
    sh 'echo "Deploy not configured"'
  }
  stage('Cleanup'){
    cleanWs()
  }
}