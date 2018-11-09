pipeline {
    agent any
    
    stages {
        stage('Ok') {
            steps {
                echo "Ok"
            }
        }
    }
    post {
        always {
            emailext body: 'Mail body1', subject: 'Testing Mail', to: 'kundan@silverpush.co'
        }
    }
}
