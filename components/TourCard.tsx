import React from 'react';
import { Tour, Student } from '../types';
import { MapPin, Clock, BookOpen, Video, Star } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
  student?: Student;
  onClick: () => void;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, student, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col h-full"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-red-900 shadow-sm border border-gray-100">
          ${tour.price} USD
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
            {tour.tags.slice(0, 2).map(tag => (
                <span key={tag} className="bg-black/70 backdrop-blur-md text-white px-2 py-1 rounded text-[10px] uppercase tracking-wider">
                    {tag}
                </span>
            ))}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-gray-500 text-xs space-x-4">
                <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {tour.location}</span>
                <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {tour.duration}</span>
            </div>
            <div className="flex items-center text-yellow-600 text-xs font-bold">
                <Star className="w-3 h-3 mr-1 fill-current" /> {tour.rating}
            </div>
        </div>

        <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-red-800 transition-colors">
          {tour.title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
          {tour.description}
        </p>

        <div className="border-t border-gray-100 pt-4 mt-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    {student && (
                        <img src={student.avatar} alt={student.name} className="w-8 h-8 rounded-full border border-gray-200" />
                    )}
                    <div className="text-xs">
                        <p className="text-gray-500">Curated by</p>
                        <p className="font-semibold text-gray-900">{student?.name || 'FoTI Scholar'}</p>
                    </div>
                </div>
                <div className="flex space-x-2 text-gray-400">
                    <span title="Documentary Evidence">
                        <Video className={`w-4 h-4 ${tour.documentaryUrl ? 'text-red-600' : ''}`} />
                    </span>
                    <span title="Academic Publication">
                        <BookOpen className={`w-4 h-4 ${tour.paperTitle ? 'text-sky-600' : ''}`} />
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};