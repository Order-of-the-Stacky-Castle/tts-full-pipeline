node {
    stage('Build') {
        sh 'ls -al'
        sh 'cd pipeline'
        sh 'npm install'
        sh '''
            echo "Multiline shell steps works too"
            ls -lah
        '''
    }
}