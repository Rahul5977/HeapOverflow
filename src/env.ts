//types of all environment variables
//string casting because process.env returns string | undefined
const env={
    NODE_ENV:process.env.NODE_ENV || 'development',
    appwrite:{
        projectId:process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '',
        projectName:process.env.NEXT_PUBLIC_APPWRITE_PROJECT_NAME || '',
        hostUrl:process.env.NEXT_PUBLIC_APPWRITE_HOST_URL || '',
        // endpoint:process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '', --- IGNORE ---
    },
    apperiteApiKey:process.env.APPERITE_API_KEY || ''
}

export default env;