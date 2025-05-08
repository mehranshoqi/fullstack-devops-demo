pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = "your-dockerhub-username"
        BACKEND_IMAGE = "backend-image"
        FRONTEND_IMAGE = "frontend-image"
    }

    stages {
        stage('Checkout Code') {
            steps {
                cleanWs()
                checkout scm
            }
        }

        stage('Debug Workspace') {
            steps {
                sh 'ls -la'
                sh 'ls -la ./frontend'
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
    }

    post {
        always {
            echo 'Cleaning up...'
            sh 'docker system prune -f'
        }
    }
}
