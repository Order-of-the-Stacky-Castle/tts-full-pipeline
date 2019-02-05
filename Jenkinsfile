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
  stage('Cleanup'){
    cleanWs()
  }
}