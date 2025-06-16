import React, { useState } from 'react';
import Header from './components/Header';
import TemplateSelector from './components/TemplateSelector';
import AIGenerator from './components/AIGenerator';
import PreviewPanel from './components/PreviewPanel';
import { Template } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<'templates' | 'ai'>('templates');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [generatedReadme, setGeneratedReadme] = useState<string>('');
  const [language, setLanguage] = useState<'tr' | 'en'>('en');
  const [darkMode, setDarkMode] = useState(false);

  const handleLanguageChange = (newLanguage: 'tr' | 'en') => {
    setLanguage(newLanguage);
    // Reset content when language changes
    setSelectedTemplate(null);
    setGeneratedReadme('');
  };

  const currentReadme = activeTab === 'templates' 
    ? selectedTemplate?.content || '' 
    : generatedReadme;

  return (
    <div className={darkMode ? 'dark min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}>
      <Header language={language} onLanguageChange={handleLanguageChange} darkMode={darkMode} onToggleDarkMode={() => setDarkMode((d) => !d)} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="glass-effect rounded-xl p-2 shadow-lg">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('templates')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'templates'
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-white/50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800/50'
                  }`}
                >
                  📋 {language === 'en' ? 'Templates' : 'Şablonlar'}
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'ai'
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-white/50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800/50'
                  }`}
                >
                  🛠️ {language === 'en' ? 'ReadME Generator' : 'ReadME Oluşturucu'}
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel */}
            <div className="space-y-6">
              {activeTab === 'templates' ? (
                <TemplateSelector
                  language={language}
                  selectedTemplate={selectedTemplate}
                  onTemplateSelect={setSelectedTemplate}
                />
              ) : (
                <AIGenerator
                  language={language}
                  onGenerate={setGeneratedReadme}
                />
              )}
            </div>

            {/* Right Panel - Preview */}
            <div className="lg:sticky lg:top-8 lg:h-fit">
              <PreviewPanel
                content={currentReadme}
                language={language}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;