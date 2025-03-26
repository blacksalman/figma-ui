export const API_CONFIG = {
  BASE_URL: 'https://newsapi.org/v2',
  API_KEY: process.env.NEXT_PUBLIC_NEWS_API_KEY || '',
  CATEGORIES: [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ],
  DEFAULT_CATEGORY: 'general',
  COUNTRY: 'us',
  PAGE_SIZE: 10
}; 