pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'mehranshoghi'
        BACKEND_IMAGE = 'backend-image'
        FRONTEND_IMAGE = 'frontend-image'
    }

    stages {
        stage('Checkout Code') {
            steps {
                cleanWs()
                checkout scm
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_REGISTRY/$BACKEND_IMAGE:latest ./backend'
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_REGISTRY/$FRONTEND_IMAGE:latest ./frontend'
                }
            }
        }

        stage('Push Images to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                        docker push $DOCKER_REGISTRY/$BACKEND_IMAGE:latest
                        docker push $DOCKER_REGISTRY/$FRONTEND_IMAGE:latest
                    '''
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker system prune -f'
        }
    }
}
