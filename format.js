#!/bin/bash/env groovy

node {

  stage('Build') {
    echo 'Building....'
    def server = Artifactory.server 'debvmci-artifactory';
    def promotionConfig = [
      // Mandatory parameters
      'targetRepo': 'libs-prod-ready-local',

      // Optional parameters

      // The build name and build number to promote. If not specified, the Jenkins job's build name and build number are used
      'buildName': buildInfo.name,
      'buildNumber': buildInfo.number,
      // Comment and Status to be displayed in the Build History tab in Artifactory
      'comment': 'this is the promotion comment',
      'status': 'Released',
      // Specifies the source repository for build artifacts.
      'sourceRepo': 'libs-staging-local',
      // Indicates whether to promote the build dependencies, in addition to the artifacts. False by default
      'includeDependencies': true,
      // Indicates whether to copy the files. Move is the default
      'copy': true,
      // Indicates whether to fail the promotion process in case of failing to move or copy one of the files. False by default.
      'failFast': true
    ]
    // Create Artifactory NPM BUild Instance
    def rtNpm = Artifactory.newNpmBuild()
    // Define where NPM build should download dependencies from.
    rtNpm.resolver server: server, repo: 'npm-virtual-test'
    // Download NPM dependencies
    def buildInfo = rtNpm.install path: 'npm-example'
    // Define the deployer for package publishing
    rtNpm.deployer server: server, repo: 'npm-local'
    // Package code and publish
    def buildInfo = rtNpm.publish path: 'npm-example'
    // Promote build
    server.promote promotionConfig
    rtPublishBuildInfo(
      serverId: "Artifactory-1",
      buildName: 'holyFrog',
      buildNumber: '42'
    )
  }
  stage('Test') {
    echo 'Testing....'
  }
  stage('Deploy') {
    echo 'Deploying....'

  }
}