import React from 'react';
import { Template, Language } from '../types';
import { templates } from '../data/templates';
import { Search, Tag, Folder } from 'lucide-react';

interface TemplateSelectorProps {
  language: Language;
  selectedTemplate: Template | null;
  onTemplateSelect: (template: Template) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  language,
  selectedTemplate,
  onTemplateSelect,
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const filteredTemplates = templates[language].filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(templates[language].map(t => t.category)))];

  return (
    <div className="glass-effect rounded-2xl p-6 shadow-xl dark:bg-[#161b22] dark:border-[#30363d]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          {language === 'en' ? 'Choose a Template' : 'Şablon Seçin'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {language === 'en' 
            ? 'Select from our collection of professional README templates'
            : 'Profesyonel README şablonları koleksiyonumuzdan seçin'
          }
        </p>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder={language === 'en' ? 'Search templates...' : 'Şablon ara...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 dark:bg-[#161b22] dark:border-[#30363d]"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 border border-gray-200 dark:border-[#30363d]'
            }`}
          >
            <Folder className="h-4 w-4" />
            <span className="capitalize">
              {category === 'all' 
                ? (language === 'en' ? 'All' : 'Tümü')
                : category
              }
            </span>
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
        {filteredTemplates.map(template => (
          <div
            key={template.id}
            onClick={() => onTemplateSelect(template)}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedTemplate?.id === template.id
                ? 'border-primary-500 bg-primary-50 shadow-md dark:bg-[#161b22] dark:border-primary-400'
                : 'border-gray-200 bg-white hover:border-primary-300 dark:bg-[#161b22] dark:hover:bg-[#21262d] dark:border-[#30363d]'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200">{template.name}</h3>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {template.category}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-3 dark:text-gray-400">{template.description}</p>
            <div className="flex flex-wrap gap-1">
              {template.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center space-x-1 text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                >
                  <Tag className="h-3 w-3" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
          <p>{language === 'en' ? 'No templates found' : 'Şablon bulunamadı'}</p>
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;