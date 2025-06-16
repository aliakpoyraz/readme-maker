import React, { useState } from 'react';
import { Language, ProjectInfo } from '../types';
import { Sparkles, Loader, Code, Globe, User, Mail, Github as GithubIcon } from 'lucide-react';
import { generateReadmeWithAI } from '../utils/aiGenerator';

interface AIGeneratorProps {
  language: Language;
  onGenerate: (content: string) => void;
}

const AIGenerator: React.FC<AIGeneratorProps> = ({ language, onGenerate }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [projectInfo, setProjectInfo] = useState<ProjectInfo>({
    projectName: '',
    description: '',
    features: [''],
    technologies: [''],
    installation: '',
    usage: '',
    contributing: '',
    license: 'MIT',
    author: '',
    email: '',
    github: '',
    demo: ''
  });

  const handleInputChange = (field: keyof ProjectInfo, value: string) => {
    setProjectInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: 'features' | 'technologies', index: number, value: string) => {
    setProjectInfo(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'features' | 'technologies') => {
    setProjectInfo(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'features' | 'technologies', index: number) => {
    setProjectInfo(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const readme = await generateReadmeWithAI(projectInfo, language);
      onGenerate(readme);
    } catch (error) {
      console.error('Error generating README:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const isFormValid = projectInfo.projectName.trim() && projectInfo.description.trim();

  return (
    <div className="glass-effect rounded-2xl p-6 shadow-xl dark:bg-[#161b22] dark:border-[#30363d]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary-500" />
          <span>{language === 'en' ? 'README Generator' : 'README Oluşturucu'}</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {language === 'en'
            ? 'Fill in your project details and let create a professional README for you'
            : 'Proje detaylarınızı doldurun ve sizin için profesyonel bir README oluşturulsun.'
          }
        </p>
      </div>

      <div className="space-y-6 max-h-96 overflow-y-auto custom-scrollbar pr-2">
        {/* Project Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {language === 'en' ? 'Project Name *' : 'Proje Adı *'}
          </label>
          <input
            type="text"
            value={projectInfo.projectName}
            onChange={(e) => handleInputChange('projectName', e.target.value)}
            placeholder={language === 'en' ? 'My Awesome Project' : 'Harika Projem'}
            className="w-full px-4 py-3 border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-gray-900 dark:text-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {language === 'en' ? 'Description *' : 'Açıklama *'}
          </label>
          <textarea
            value={projectInfo.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            placeholder={language === 'en' ? 'A brief description of what your project does...' : 'Projenizin ne yaptığına dair kısa bir açıklama...'}
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-gray-900 dark:text-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
          />
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {language === 'en' ? 'Key Features' : 'Ana Özellikler'}
          </label>
          {projectInfo.features.map((feature, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                value={feature}
                onChange={(e) => handleArrayChange('features', index, e.target.value)}
                placeholder={language === 'en' ? 'Feature description' : 'Özellik açıklaması'}
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-gray-900 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
              {projectInfo.features.length > 1 && (
                <button
                  onClick={() => removeArrayItem('features', index)}
                  className="px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <button
            onClick={() => addArrayItem('features')}
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
          >
            + {language === 'en' ? 'Add Feature' : 'Özellik Ekle'}
          </button>
        </div>

        {/* Technologies */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center space-x-2">
            <Code className="h-4 w-4" />
            <span>{language === 'en' ? 'Technologies Used' : 'Kullanılan Teknolojiler'}</span>
          </label>
          {projectInfo.technologies.map((tech, index) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input
                type="text"
                value={tech}
                onChange={(e) => handleArrayChange('technologies', index, e.target.value)}
                placeholder={language === 'en' ? 'React, Node.js, MongoDB...' : 'React, Node.js, MongoDB...'}
                className="flex-1 px-4 py-2 border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-gray-900 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
              {projectInfo.technologies.length > 1 && (
                <button
                  onClick={() => removeArrayItem('technologies', index)}
                  className="px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <button
            onClick={() => addArrayItem('technologies')}
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
          >
            + {language === 'en' ? 'Add Technology' : 'Teknoloji Ekle'}
          </button>
        </div>

        {/* Installation */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {language === 'en' ? 'Installation Instructions' : 'Kurulum Talimatları'}
          </label>
          <textarea
            value={projectInfo.installation}
            onChange={(e) => handleInputChange('installation', e.target.value)}
            placeholder={language === 'en' ? 'npm install\nnpm start' : 'npm install\nnpm start'}
            rows={3}
            className="w-full px-4 py-3 border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-gray-900 dark:text-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none font-mono text-sm"
          />
        </div>

        {/* Author Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{language === 'en' ? 'Author' : 'Yazar'}</span>
            </label>
            <input
              type="text"
              value={projectInfo.author}
              onChange={(e) => handleInputChange('author', e.target.value)}
              placeholder={language === 'en' ? 'Your Name' : 'Adınız'}
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-gray-900 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{language === 'en' ? 'Email' : 'E-posta'}</span>
            </label>
            <input
              type="email"
              value={projectInfo.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-gray-900 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center space-x-2">
              <GithubIcon className="h-4 w-4" />
              <span>{language === 'en' ? 'GitHub URL' : 'GitHub URL'}</span>
            </label>
            <input
              type="url"
              value={projectInfo.github}
              onChange={(e) => handleInputChange('github', e.target.value)}
              placeholder="https://github.com/username/repo"
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-gray-900 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>{language === 'en' ? 'Demo URL' : 'Demo URL'}</span>
            </label>
            <input
              type="url"
              value={projectInfo.demo}
              onChange={(e) => handleInputChange('demo', e.target.value)}
              placeholder="https://your-demo.com"
              className="w-full px-4 py-2 border border-gray-200 dark:border-[#30363d] bg-white dark:bg-[#161b22] text-gray-900 dark:text-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-[#30363d]">
        <button
          onClick={handleGenerate}
          disabled={!isFormValid || isGenerating}
          className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
            isFormValid && !isGenerating
              ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white hover:from-primary-600 hover:to-purple-700 shadow-lg hover:shadow-xl button-hover-effect'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          {isGenerating ? (
            <>
              <Loader className="h-5 w-5 animate-spin" />
              <span>{language === 'en' ? 'Generating...' : 'Oluşturuluyor...'}</span>
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              <span>{language === 'en' ? 'Generate README' : 'README Oluştur'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AIGenerator;