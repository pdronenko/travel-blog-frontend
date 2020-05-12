// Linter
pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
    }
  }
  environment {
    HOME="."
  }
  stages {
    stage('Install dependencies PROD') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run linter PROD') {
      steps {
        sh 'npm run lint'
      }
    }
  }
}
