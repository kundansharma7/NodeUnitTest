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
            emailext body: "${currentBuild.currentResult}: Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}\n More info at: ${env.BUILD_URL}",
            subject: 'Testing Mail', to: 'kundan@silverpush.co'
        }
    }
}
