import * as dotenv from 'dotenv'

dotenv.config();

export const config = {
    email: process.env.REDDIT_EMAIL || '',
    username: process.env.REDDIT_USERNAME || '',
    password: process.env.REDDIT_PASSWORD || ''
}