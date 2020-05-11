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
    stage('install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run linter') {
      steps {
        sh 'npm run lint'
      }
    }
  }
}
