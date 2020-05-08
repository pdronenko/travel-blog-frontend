pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
    }
  }
  stages {
    stage('Run linter') {
      steps {
        sh 'npm run lint'
      }
    }
  }
}
