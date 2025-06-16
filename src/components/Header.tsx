import React from 'react';
import { FileText, Github, Star, Moon, Sun } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange, darkMode, onToggleDarkMode }) => {
  const repoUrl = 'https://github.com/aliakpoyraz/readme-maker';

  return (
    <header className="glass-effect border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary-500 to-purple-600 p-2 rounded-xl shadow-lg">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">README Maker</h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {language === 'en' 
                  ? 'Create professional README files effortlessly'
                  : 'Kolayca profesyonel README dosyaları oluşturun'
                }
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              title={language === 'en' ? 'Toggle dark mode' : 'Karanlık modu değiştir'}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <button
              onClick={() => onLanguageChange(language === 'en' ? 'tr' : 'en')}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              title={language === 'en' ? 'Switch to Turkish' : 'Türkçeye geç'}
            >
              <span className="text-sm font-medium">
                {language === 'en' ? '🇹🇷 TR' : '🇺🇸 EN'}
              </span>
            </button>

            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors button-hover-effect"
            >
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={`${repoUrl}/stargazers`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors button-hover-effect"
            >
              <Star className="h-4 w-4" />
              <span className="hidden sm:inline">
              {language === 'en' ? 'Star' : 'Yıldız'}

              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;