export default {
    expo: {
      name: "LocationApp",
      slug: "locationapp",
      extra: {
        FIREBASE_API_KEY: process.env.EXPO_PUBLIC_API_KEY,
        FIREBASE_AUTH_DOMAIN: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
        FIREBASE_PROJECT_ID: process.env.EXPO_PUBLIC_PROJECT_ID,
        FIREBASE_STORAGE_BUCKET: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
        FIREBASE_MESSAGING_SENDER_ID: process.env.EXPO_PUBLIC_MSG_SENDER_ID,
        FIREBASE_APP_ID: process.env.EXPO_PUBLIC_APP_ID,
      },
    },
  };
  