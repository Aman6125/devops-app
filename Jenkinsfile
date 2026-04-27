pipeline {
    agent any

    environment {
        APP_SERVER = "43.205.94.130"
        IMAGE_NAME = "myapp"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Deploy to App Server') {
            steps {
                sh '''
                ssh -i /var/lib/jenkins/.ssh/id_rsa \
                -o StrictHostKeyChecking=no \
                ec2-user@$APP_SERVER \
                "docker stop $IMAGE_NAME || true && \
                 docker rm $IMAGE_NAME || true && \
                 docker run -d -p 80:80 --name $IMAGE_NAME $IMAGE_NAME"
                '''
            }
        }
    }
}
