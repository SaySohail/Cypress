pipeline {
    agent any

    tools { nodejs "node.20.10" }

    stages {
        stage('Cypress parallel test suite') {
            parallel {
                stage('Test Suite - Run 1') {
                    steps {
                        checkout([
                            $class: 'GitSCM', 
                            branches: [[name: 'main']],  // Adjust the branch if needed
                            userRemoteConfigs: [[url: 'https://github.com/SaySohail/Cypress.git']]
                        ])
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run triggerAllTests-autostore-dashboard'
                    }
                }
                stage('Test Suite - Run 2') {
                    steps {
                        sh 'npm install'
                        sh 'npm update'
                        sh 'npm run triggerAllTests-headed'
                    }
                }
            }
        }
    }
}
