import Image from 'next/image';
import { NewsArticle } from '@/types/news';

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 w-full overflow-hidden">
        {article.urlToImage ? (
          <Image
            src={article.urlToImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-black group-hover:text-blue-600 transition-colors duration-300">
          {article.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 group-hover:text-gray-800 transition-colors duration-300">
          {article.description}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span className="group-hover:text-blue-600 transition-colors duration-300">
            {article.source.name}
          </span>
          <span className="group-hover:text-gray-700 transition-colors duration-300">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"
        >
          <span className="relative z-10">Read More</span>
          <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </a>
      </div>
    </div>
  );
}; 