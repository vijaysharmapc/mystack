//EXPO_PUBLIC_APPWRITE_PROJECT_ID=692cc0f10013a8f35399
//EXPO_PUBLIC_APPWRITE_PROJECT_NAME="mystackdb_1"
//EXPO_PUBLIC_APPWRITE_ENDPOINT=https://fra.cloud.appwrite.io/v1

import { Client, Account, Avatars,Databases } from "react-native-appwrite"

export const client = new Client()

client
  .setProject('692cc0f10013a8f35399')
  .setPlatform('com.starterbarter.mystack')
  .setEndpoint('https://fra.cloud.appwrite.io/v1')

export const account = new Account(client)
export const avatars = new Avatars(client)
export const databases = new Databases(client)