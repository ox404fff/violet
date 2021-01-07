pipeline {    agent {        dockerfile {            filename 'Dockerfile'            additionalBuildArgs '--target build'            dir '.'            args '-v /var/run/docker.sock:/var/run/docker.sock -v $SSH_AUTH_SOCK:/ssh-agent --env SSH_AUTH_SOCK=/ssh-agent'        }    }    environment {        PROJECT_NAME = 'violet'        CONTAINER_REGISTRY = 'ox404fff'    }    stages {        stage('Build') {            steps {                withCredentials([usernamePassword(credentialsId: 'hubDockerCom', usernameVariable: 'CONTAINER_REGISTRY_USERNAME', passwordVariable: 'CONTAINER_REGISTRY_PASSWORD')]) {                    dir(path: 'Frontend') {                        sh '''                            echo "Static Compilation..."                            ln -s /build/node_modules ./node_modules && npm run-script build                            echo "Packing to transfer container..."                            docker build -t ${CONTAINER_REGISTRY}/${PROJECT_NAME}:${BUILD_NUMBER} -f ./infrastructure/nginx/Dockerfile .                            echo "Pushing to registry..."                            docker login --username ${CONTAINER_REGISTRY_USERNAME} --password ${CONTAINER_REGISTRY_PASSWORD} && docker push ${CONTAINER_REGISTRY}/${PROJECT_NAME}:${BUILD_NUMBER}                        '''                    }                }                withCredentials([usernamePassword(credentialsId: 'hubDockerCom', usernameVariable: 'CONTAINER_REGISTRY_USERNAME', passwordVariable: 'CONTAINER_REGISTRY_PASSWORD')]) {                    dir(path: 'CMS') {                        sh '''                            echo "Packing to transfer container..."                            docker build -t ${CONTAINER_REGISTRY}/${PROJECT_NAME}:drupal-${BUILD_NUMBER} -f ./infrastructure/php-fpm/Dockerfile .                            echo "Pushing to registry..."                            docker login --username ${CONTAINER_REGISTRY_USERNAME} --password ${CONTAINER_REGISTRY_PASSWORD} && docker push ${CONTAINER_REGISTRY}/${PROJECT_NAME}:drupal-${BUILD_NUMBER}                        '''                    }                }            }        }        stage('Deploy') {            steps {                build job: 'Deployment frontend', parameters: [                    string(name: 'APP_NAME', value: String.valueOf(PROJECT_NAME)),                    string(name: 'APP_VERSION', value: String.valueOf(BUILD_NUMBER)),                    string(name: 'CONTAINER_REGISTRY', value: String.valueOf(CONTAINER_REGISTRY)),                ]                build job: 'Deployment drupal', parameters: [                    string(name: 'APP_NAME', value: String.valueOf(PROJECT_NAME)),                    string(name: 'APP_VERSION', value: "drupal-".concat(String.valueOf(BUILD_NUMBER)),                    string(name: 'CONTAINER_REGISTRY', value: String.valueOf(CONTAINER_REGISTRY)),                ]            }        }    }}