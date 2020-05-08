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
    stage('install deps') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run linter') {
      steps {
        sh 'npm run lint'
      }
    }
    stage('Run e2e tests') {
      steps {
        sh 'npm run e2e:ci'
      }
    }
  }
}
