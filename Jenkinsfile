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
                    sh 'npm test' 
                }
            }
        }
}
