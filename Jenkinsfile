pipeline{
    agent any

    tools {nodejs "node"}

    stages {
        stage('Cypress parallel test suite') {
            parallel {
                stage('slave Node 1') {
                    agent {
                        label "remote_node1"
                    }
                    steps {
                        git url: 'https://github.com/SaySohail/Cypress.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run ${triggerAllTests-autostore-dashboard}'
                    }
                }
                 stage('slave Node 2') {
                    agent {
                        label "remote_node2"
                    }
                    steps {
                        git url: 'https://github.com/SaySohail/Cypress.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run ${triggerAllTests-autostore-dashboard}'
                    }
                }
            }
        }
    }
}