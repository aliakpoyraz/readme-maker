import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Language } from '../types';
import { Eye, Code, Copy, Download, Check } from 'lucide-react';

interface PreviewPanelProps {
  content: string;
  language: Language;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ content, language }) => {
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="glass-effect rounded-xl p-6 shadow-lg dark:bg-[#161b22] dark:border-[#30363d]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          {language === 'en' ? 'Preview' : 'Önizleme'}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode('preview')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'preview'
                ? 'bg-primary-500 text-white'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#21262d]'
            }`}
          >
            <Eye className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode('code')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'code'
                ? 'bg-primary-500 text-white'
                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-[#21262d]'
            }`}
          >
            <Code className="h-5 w-5" />
          </button>
          {content && (
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors button-hover-effect"
              title={language === 'en' ? 'Download README.md' : 'README.md indir'}
            >
              <Download className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      <div className="flex-1 overflow-auto custom-scrollbar p-6 bg-white dark:bg-[#161b22] rounded-lg border border-gray-200 dark:border-[#30363d]">
        {viewMode === 'preview' ? (
          content ? (
            <div className="markdown-preview">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              {language === 'en' ? 'No content to preview' : 'Önizlenecek içerik yok'}
            </div>
          )
        ) : (
          <pre className="text-sm font-mono text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
            {content || (language === 'en' ? 'No content to display' : 'Gösterilecek içerik yok')}
          </pre>
        )}
      </div>
    </div>
  );
};

export default PreviewPanel;