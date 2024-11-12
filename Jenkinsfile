pipeline {
    agent any

    tools {nodejs "node.20.10"}

    stages {
        stage('Cypress parallel test suite') {
            parallel {
                stage('Test Suite - Run 1') {
                    steps {
                        git url: 'https://github.com/SaySohail/Cypress.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run ${triggerAllTests-autostore-dashboard}'
                    }
                }
                stage('Test Suite - Run 2') {
                    steps {
                        git url: 'https://github.com/SaySohail/Cypress.git'
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run ${triggerAllTests-dashboard}'
                    }
                }
            }
        }
    }
}
