# RateMe
**React Develpoment Setup:**
1. Install NodeJS: https://nodejs.org/en
2. Configure NPM: npm install -g npm@9.8.1
3. Initialize a folder as React Native project: npx react-native@latest init <folder_name>
  - This will create that folder as a React Native project and will create all basic dependencies/files. 
3. You can then install all other dependencies as you need, following are required for this project:
  - Eg: npm install @react-navigation/stack@5.9.0 @react-native-community/masked-view@0.1.10 react-native-screens@2.10.1 react-native-safe-area-context@3.1.4 react-native-gesture-handler@1.7.0
4. Install React Navigation library for navigating between screens: npm install @react-navigation/stack@5.9.0
5. Install React Redux for in-memory storage: npm install react-redux@latest
-- This would be enough to get started.

**AWS SDK Setup:**
 - It needs Amplify package
1. Install Amplify: npm install -g @aws-amplify/cli
2. Initialize: amplify init
3. Configure amplify: amplify configure 
 - Detailed steps can be found here: https://docs.amplify.aws/lib/project-setup/prereq/q/platform/react-native/#configure-the-amplify-cli
 - So here, you will be redirected to AWS Console. Sign in(or Create account; if not)
 - Create a User/Service account so it can use the AWS services through SDK.
 - Once it is created; Download/Save the ACCESS_KEY_ID & SECRET_ACCESS_KEY_ID of that account.
 - Then comback to your CLI, it will prompt for the Access key and Secret Access Key.
3. Install Cognito dependency: npm install aws-amplify amazon-cognito-identity-js @react-native-community/netinfo @react-native-async-storage/async-storage
4. Configure Cognito Client in AWS first
5. Now import your Client: amplify import auth
 - So based on your AWS Account configured, it will ask for the Client details. Enter and Save.
 - **Note: If you see error from Windows Firewall not allowing to run, Run Set-ExecutionPolicy RemoteSigned –Scope Process command to allow.**
6. Push the config to AWS Cloud SDK: amplify push
7. See the services configured any time: amplify console
8. Now you are ready to go.... Import the following in the main file like main.js/App.js to use the SDK:
   import { Amplify, Auth } from 'aws-amplify';
   import awsconfig from './aws-exports';
   Amplify.configure(awsconfig); 
