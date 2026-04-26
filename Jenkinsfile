pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'https://github.com/YOUR-USERNAME/devops-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                ssh ec2-user@APP-IP "
                docker stop myapp || true &&
                docker rm myapp || true &&
                docker run -d -p 3000:3000 --name myapp myapp
                "
                '''
            }
        }
    }
}
