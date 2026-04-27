pipeline {
    agent any

    environment {
        APP_SERVER = "43.205.94.130"
        IMAGE_NAME = "myapp"
    }

    stages {

        stage('Deploy to App Server') {
            steps {
                sh '''
                ssh -i /var/lib/jenkins/.ssh/id_rsa \
                -o StrictHostKeyChecking=no \
                ec2-user@$APP_SERVER \
                "cd /home/ec2-user && \
                 rm -rf app && \
                 git clone https://github.com/Aman6125/devops-app.git app && \
                 cd app && \
                 docker build -t myapp . && \
                 docker stop myapp || true && \
                 docker rm myapp || true && \
                 docker run -d -p 80:80 --name myapp myapp"
                '''
            }
        }
    }
}
