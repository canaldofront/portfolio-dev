import { createClient } from 'next-sanity';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
    useCdn: process.env.NEXT_PUBLIC_USE_CDN,
    token: process.env.NEXT_PUBLIC_TOKEN,
});

export default client;
