node {
    stage('Build') {
        sh 'ls -al'
        sh 'rm -rf ./*'
        sh 'rm -rf ./.*'
        sh 'git clone https://github.com/Order-of-the-Stacky-Castle/tts-full-pipeline.git .'
        sh 'cd pipeline'
        sh 'npm install'
        sh '''
            echo "Multiline shell steps works too"
            ls -lah
        '''
    }
}