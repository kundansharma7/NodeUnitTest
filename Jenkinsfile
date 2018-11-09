pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('test') { 
                steps {
                    sh 'npm test' 
                }
            }
        stage('deploy') { 
                steps {
                    sh 'node server.js' 
                }
            }
        }
    post {
        always {
            emailext body: 'A Test EMail', to: 'kundan@silverpush.co', subject: 'Test'
        }
    }
}
