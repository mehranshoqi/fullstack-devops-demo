pipeline {
    agent any
    environment {
        REGISTRY = 'mehranshoghi'
        IMAGE_NAME_BACKEND = "${REGISTRY}/my-backend"
        IMAGE_NAME_FRONTEND = "${REGISTRY}/my-frontend"
    }
    stages {
        stage('Clone') {
            steps {
                git 'https://github.com/mehranshoqi/fullstack-devops-demo.git'
            }
        }
        stage('Build Backend') {
            steps {
                script {
                    docker.build("${IMAGE_NAME_BACKEND}", './backend')
                }
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    docker.build("${IMAGE_NAME_FRONTEND}", './frontend')
                }
            }
        }
        stage('Test') {
            steps {
                script {
                }
            }
        }
        stage('Push to DockerHub') {
            steps {
                script {
                    // Login to Docker Hub
                    docker.withRegistry('', 'dockerhub-credentials') {
                        docker.image("${IMAGE_NAME_BACKEND}").push()
                        docker.image("${IMAGE_NAME_FRONTEND}").push()
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs() // Clean workspace after build
        }
    }
}
