pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                ssh ec2-user@43.205.94.130 << EOF
                docker stop myapp || true
                docker rm myapp || true
                docker run -d -p 80:80 myapp
                EOF
                '''
            }
        }
    }
}
