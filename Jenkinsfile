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
    stage('Install dependencies 2PROD') {
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
