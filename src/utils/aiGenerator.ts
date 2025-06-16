import { ProjectInfo, Language } from '../types';

export const generateReadmeWithAI = async (projectInfo: ProjectInfo, language: Language): Promise<string> => {
  // Simulate AI generation with a delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const isEnglish = language === 'en';

  // Generate features list
  const featuresSection = projectInfo.features
    .filter(feature => feature.trim())
    .map(feature => `- ${feature}`)
    .join('\n');

  // Generate technologies list
  const techSection = projectInfo.technologies
    .filter(tech => tech.trim())
    .join(', ');

  // Generate installation section
  const installationSection = projectInfo.installation || (isEnglish 
    ? `\`\`\`bash
git clone ${projectInfo.github || 'https://github.com/username/repo.git'}
cd ${projectInfo.projectName.toLowerCase().replace(/\s+/g, '-')}
npm install
npm start
\`\`\``
    : `\`\`\`bash
git clone ${projectInfo.github || 'https://github.com/kullaniciadi/repo.git'}
cd ${projectInfo.projectName.toLowerCase().replace(/\s+/g, '-')}
npm install
npm start
\`\`\``);

  // Generate usage section
  const usageSection = projectInfo.usage || (isEnglish
    ? `\`\`\`javascript
// Basic usage example
import ${projectInfo.projectName.replace(/\s+/g, '')} from '${projectInfo.projectName.toLowerCase().replace(/\s+/g, '-')}';

const app = new ${projectInfo.projectName.replace(/\s+/g, '')}();
app.start();
\`\`\``
    : `\`\`\`javascript
// Temel kullanım örneği
import ${projectInfo.projectName.replace(/\s+/g, '')} from '${projectInfo.projectName.toLowerCase().replace(/\s+/g, '-')}';

const app = new ${projectInfo.projectName.replace(/\s+/g, '')}();
app.start();
\`\`\``);

  // Generate author section
  const authorSection = projectInfo.author ? (isEnglish
    ? `## 👨‍💻 Author

**${projectInfo.author}**

${projectInfo.email ? `- Email: ${projectInfo.email}` : ''}
${projectInfo.github ? `- GitHub: [@${projectInfo.github.split('/').pop()}](${projectInfo.github})` : ''}
`
    : `## 👨‍💻 Yazar

**${projectInfo.author}**

${projectInfo.email ? `- E-posta: ${projectInfo.email}` : ''}
${projectInfo.github ? `- GitHub: [@${projectInfo.github.split('/').pop()}](${projectInfo.github})` : ''}
`) : '';

  // Generate demo section
  const demoSection = projectInfo.demo ? (isEnglish
    ? `## 🌐 Live Demo

[View Live Demo](${projectInfo.demo})

`
    : `## 🌐 Canlı Demo

[Canlı Demoyu Görüntüle](${projectInfo.demo})

`) : '';

  // Generate contributing section
  const contributingSection = projectInfo.contributing || (isEnglish
    ? `Contributions, issues and feature requests are welcome!

Feel free to check [issues page](${projectInfo.github ? `${projectInfo.github}/issues` : '#'}).`
    : `Katkılar, sorunlar ve özellik istekleri hoş karşılanır!

[Issues sayfasını](${projectInfo.github ? `${projectInfo.github}/issues` : '#'}) kontrol etmekten çekinmeyin.`);

  if (isEnglish) {
    return `# ${projectInfo.projectName}

${projectInfo.description}

${demoSection}## ✨ Features

${featuresSection || '- Feature 1\n- Feature 2\n- Feature 3'}

## 🛠️ Built With

${techSection || 'JavaScript, HTML, CSS'}

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

${installationSection}

## 💻 Usage

${usageSection}

## 🤝 Contributing

${contributingSection}

## 📄 License

This project is licensed under the ${projectInfo.license} License.

${authorSection}## 🙏 Acknowledgments

- Thanks to all contributors who helped make this project better
- Inspired by the open-source community
- Built with ❤️

---

⭐ Don't forget to star this repo if you found it helpful!
`;
  } else {
    return `# ${projectInfo.projectName}

${projectInfo.description}

${demoSection}## ✨ Özellikler

${featuresSection || '- Özellik 1\n- Özellik 2\n- Özellik 3'}

## 🛠️ Kullanılan Teknolojiler

${techSection || 'JavaScript, HTML, CSS'}

## 🚀 Başlangıç

### Ön Koşullar

Makinenizde Node.js'in yüklü olduğundan emin olun.

### Kurulum

${installationSection}

## 💻 Kullanım

${usageSection}

## 🤝 Katkıda Bulunma

${contributingSection}

## 📄 Lisans

Bu proje ${projectInfo.license} Lisansı altında lisanslanmıştır.

${authorSection}## 🙏 Teşekkürler

- Bu projeyi daha iyi hale getirmeye yardımcı olan tüm katkıda bulunanlara teşekkürler
- Açık kaynak topluluğundan ilham alınmıştır
- ❤️ ile geliştirilmiştir

---

⭐ Bu repo'yu faydalı bulduysanız yıldızlamayı unutmayın!
`;
  }
};