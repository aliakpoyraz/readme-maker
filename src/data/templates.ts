import { Template, Language } from '../types';

export const templates: Record<Language, Template[]> = {
  en: [
    {
      id: 'basic-en',
      name: 'Basic Project',
      description: 'Simple and clean README template for basic projects',
      category: 'basic',
      tags: ['simple', 'clean', 'minimal'],
      content: `# Project Name

A brief description of what this project does and who it's for.

## Features

- Feature 1
- Feature 2
- Feature 3

## Installation

\`\`\`bash
npm install
\`\`\`

## Usage

\`\`\`javascript
const example = require('example');
example.doSomething();
\`\`\`

## Contributing

Contributions are always welcome!

See \`contributing.md\` for ways to get started.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@username](https://www.github.com/username)
`
    },
    {
      id: 'web-app-en',
      name: 'Web Application',
      description: 'Comprehensive template for web applications with modern features',
      category: 'web',
      tags: ['web', 'app', 'frontend', 'backend'],
      content: `# 🌐 Project Name

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/username/repo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/username/repo)

A modern web application built with cutting-edge technologies.

## 🚀 Features

- ⚡ Fast and responsive design
- 🔐 User authentication
- 📱 Mobile-friendly interface
- 🎨 Beautiful UI/UX
- 🔄 Real-time updates

## 🛠️ Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

**Database:** MongoDB

## 📦 Installation

1. Clone the project

\`\`\`bash
git clone https://github.com/username/project-name.git
\`\`\`

2. Go to the project directory

\`\`\`bash
cd project-name
\`\`\`

3. Install dependencies

\`\`\`bash
npm install
\`\`\`

4. Start the server

\`\`\`bash
npm run start
\`\`\`

## 🔧 Environment Variables

To run this project, you will need to add the following environment variables to your .env file

\`DATABASE_URL\`

\`API_KEY\`

\`ANOTHER_API_KEY\`

## 📖 API Reference

#### Get all items

\`\`\`http
GET /api/items
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/username/repo/issues).

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

## 👨‍💻 Author

**Your Name**

- Website: [@yourwebsite](https://yourwebsite.com)
- Twitter: [@yourusername](https://twitter.com/yourusername)
- Github: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourusername](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgements

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
`
    },
    {
      id: 'api-en',
      name: 'API Documentation',
      description: 'Perfect template for API projects with detailed documentation',
      category: 'api',
      tags: ['api', 'documentation', 'backend'],
      content: `# 🔌 API Name

A RESTful API built with Node.js and Express.

## 📋 Table of Contents

- [Overview](#overview)
- [Authentication](#authentication)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [Installation](#installation)

## 🎯 Overview

This API provides endpoints for managing [describe your resource].

**Base URL:** \`https://api.example.com/v1\`

## 🔐 Authentication

This API uses Bearer Token authentication. Include your token in the Authorization header:

\`\`\`
Authorization: Bearer YOUR_TOKEN_HERE
\`\`\`

## 📚 Endpoints

### Users

#### Get All Users
\`\`\`http
GET /api/users
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
}
\`\`\`

#### Get User by ID
\`\`\`http
GET /api/users/{id}
\`\`\`

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| id | integer | User ID |

#### Create User
\`\`\`http
POST /api/users
\`\`\`

**Body:**
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
\`\`\`

## ⚠️ Error Handling

The API uses conventional HTTP response codes:

- \`200\` - OK
- \`201\` - Created
- \`400\` - Bad Request
- \`401\` - Unauthorized
- \`404\` - Not Found
- \`500\` - Internal Server Error

**Error Response Format:**
\`\`\`json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Validation error",
    "details": "Email is required"
  }
}
\`\`\`

## 🚦 Rate Limiting

API requests are limited to 100 requests per hour per IP address.

## 🚀 Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/username/api-name.git
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables
\`\`\`bash
cp .env.example .env
\`\`\`

4. Start the server
\`\`\`bash
npm start
\`\`\`

## 📄 License

This project is licensed under the MIT License.
`
    },
    {
      id: 'mobile-en',
      name: 'Mobile App',
      description: 'Template designed for mobile application projects',
      category: 'mobile',
      tags: ['mobile', 'app', 'react-native', 'flutter'],
      content: `# 📱 Mobile App Name

A beautiful mobile application built with React Native.

## 📸 Screenshots

| Home Screen | Profile Screen | Settings Screen |
|-------------|----------------|-----------------|
| ![Home](https://via.placeholder.com/200x400) | ![Profile](https://via.placeholder.com/200x400) | ![Settings](https://via.placeholder.com/200x400) |

## ✨ Features

- 🎨 Beautiful and intuitive UI
- 🔐 Secure authentication
- 📊 Data visualization
- 🔔 Push notifications
- 🌙 Dark mode support
- 🌍 Multi-language support

## 🛠️ Built With

- [React Native](https://reactnative.dev/) - The mobile framework
- [Expo](https://expo.dev/) - Development platform
- [Redux](https://redux.js.org/) - State management
- [React Navigation](https://reactnavigation.org/) - Navigation
- [Styled Components](https://styled-components.com/) - Styling

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

## 🚀 Getting Started

1. Clone the repository
\`\`\`bash
git clone https://github.com/username/mobile-app.git
cd mobile-app
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Start the development server
\`\`\`bash
expo start
\`\`\`

4. Run on device/simulator
- Press \`i\` for iOS simulator
- Press \`a\` for Android emulator
- Scan QR code with Expo Go app on your device

## 📦 Build

### Android
\`\`\`bash
expo build:android
\`\`\`

### iOS
\`\`\`bash
expo build:ios
\`\`\`

## 🧪 Testing

Run the test suite:
\`\`\`bash
npm test
\`\`\`

## 📱 App Store Links

- [iOS App Store](https://apps.apple.com/app/your-app)
- [Google Play Store](https://play.google.com/store/apps/details?id=your.app)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See \`LICENSE\` for more information.

## 📞 Contact

Your Name - [@your_twitter](https://twitter.com/your_twitter) - email@example.com

Project Link: [https://github.com/username/mobile-app](https://github.com/username/mobile-app)
`
    },
    {
      id: 'library-en',
      name: 'Library/Package',
      description: 'Template for open-source libraries and npm packages',
      category: 'library',
      tags: ['library', 'package', 'npm', 'open-source'],
      content: `# 📚 Library Name

[![npm version](https://badge.fury.io/js/library-name.svg)](https://badge.fury.io/js/library-name)
[![Downloads](https://img.shields.io/npm/dm/library-name.svg)](https://npmjs.com/package/library-name)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful and lightweight JavaScript library for [describe purpose].

## 🚀 Features

- ⚡ Lightweight and fast
- 🔧 Easy to use API
- 📦 Zero dependencies
- 🌐 Works in browser and Node.js
- 📱 Mobile-friendly
- 🎯 TypeScript support

## 📦 Installation

### npm
\`\`\`bash
npm install library-name
\`\`\`

### yarn
\`\`\`bash
yarn add library-name
\`\`\`

### CDN
\`\`\`html
<script src="https://unpkg.com/library-name@latest/dist/library-name.min.js"></script>
\`\`\`

## 🔧 Usage

### Basic Usage

\`\`\`javascript
import LibraryName from 'library-name';

const instance = new LibraryName({
  option1: 'value1',
  option2: 'value2'
});

instance.doSomething();
\`\`\`

### Advanced Usage

\`\`\`javascript
import { method1, method2 } from 'library-name';

// Use specific methods
const result = method1('parameter');
method2(result);
\`\`\`

## 📖 API Reference

### Constructor

\`\`\`javascript
new LibraryName(options)
\`\`\`

**Options:**

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| option1 | string | 'default' | Description of option1 |
| option2 | boolean | false | Description of option2 |
| option3 | number | 100 | Description of option3 |

### Methods

#### \`.method1(parameter)\`

Description of what this method does.

**Parameters:**
- \`parameter\` (string): Description of parameter

**Returns:** Description of return value

**Example:**
\`\`\`javascript
const result = instance.method1('example');
console.log(result); // Expected output
\`\`\`

#### \`.method2(options)\`

Description of what this method does.

**Parameters:**
- \`options\` (object): Configuration object

**Example:**
\`\`\`javascript
instance.method2({
  param1: 'value1',
  param2: true
});
\`\`\`

## 🌟 Examples

### Example 1: Basic Implementation

\`\`\`javascript
import LibraryName from 'library-name';

const lib = new LibraryName();
lib.doSomething();
\`\`\`

### Example 2: With Custom Options

\`\`\`javascript
import LibraryName from 'library-name';

const lib = new LibraryName({
  customOption: true,
  theme: 'dark'
});

lib.initialize();
\`\`\`

## 🧪 Testing

Run the test suite:

\`\`\`bash
npm test
\`\`\`

Run tests with coverage:

\`\`\`bash
npm run test:coverage
\`\`\`

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork and clone the repo
2. Install dependencies: \`npm install\`
3. Create a branch: \`git checkout -b feature/your-feature\`
4. Make your changes and add tests
5. Run tests: \`npm test\`
6. Commit and push your changes
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by [similar library]
- Built with ❤️ by [Your Name]

## 📞 Support

- 📧 Email: support@example.com
- 💬 Discord: [Join our server](https://discord.gg/example)
- 🐛 Issues: [GitHub Issues](https://github.com/username/library-name/issues)
`
    }
  ],
  tr: [
    {
      id: 'basic-tr',
      name: 'Temel Proje',
      description: 'Basit projeler için temiz ve sade README şablonu',
      category: 'temel',
      tags: ['basit', 'temiz', 'minimal'],
      content: `# Proje Adı

Bu projenin ne yaptığına ve kimin için olduğuna dair kısa bir açıklama.

## Özellikler

- Özellik 1
- Özellik 2
- Özellik 3

## Kurulum

\`\`\`bash
npm install
\`\`\`

## Kullanım

\`\`\`javascript
const example = require('example');
example.doSomething();
\`\`\`

## Katkıda Bulunma

Katkılar her zaman hoş karşılanır!

Başlamak için \`contributing.md\` dosyasına bakın.

## Lisans

[MIT](https://choosealicense.com/licenses/mit/)

## Yazarlar

- [@kullaniciadi](https://www.github.com/kullaniciadi)
`
    },
    {
      id: 'web-app-tr',
      name: 'Web Uygulaması',
      description: 'Modern özelliklerle web uygulamaları için kapsamlı şablon',
      category: 'web',
      tags: ['web', 'uygulama', 'frontend', 'backend'],
      content: `# 🌐 Proje Adı

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/kullaniciadi/repo)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/kullaniciadi/repo)

Son teknoloji ile geliştirilmiş modern bir web uygulaması.

## 🚀 Özellikler

- ⚡ Hızlı ve duyarlı tasarım
- 🔐 Kullanıcı kimlik doğrulaması
- 📱 Mobil uyumlu arayüz
- 🎨 Güzel UI/UX
- 🔄 Gerçek zamanlı güncellemeler

## 🛠️ Teknoloji Yığını

**İstemci:** React, Redux, TailwindCSS

**Sunucu:** Node, Express

**Veritabanı:** MongoDB

## 📦 Kurulum

1. Projeyi klonlayın

\`\`\`bash
git clone https://github.com/kullaniciadi/proje-adi.git
\`\`\`

2. Proje dizinine gidin

\`\`\`bash
cd proje-adi
\`\`\`

3. Bağımlılıkları yükleyin

\`\`\`bash
npm install
\`\`\`

4. Sunucuyu başlatın

\`\`\`bash
npm run start
\`\`\`

## 🔧 Ortam Değişkenleri

Bu projeyi çalıştırmak için .env dosyanıza aşağıdaki ortam değişkenlerini eklemeniz gerekir

\`DATABASE_URL\`

\`API_KEY\`

\`ANOTHER_API_KEY\`

## 📖 API Referansı

#### Tüm öğeleri getir

\`\`\`http
GET /api/items
\`\`\`

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Gerekli**. API anahtarınız |

## 🤝 Katkıda Bulunma

Katkılar, sorunlar ve özellik istekleri hoş karşılanır!

[Issues sayfasını](https://github.com/kullaniciadi/repo/issues) kontrol etmekten çekinmeyin.

## 📝 Lisans

Bu proje [MIT](https://choosealicense.com/licenses/mit/) lisansı altındadır.

## 👨‍💻 Yazar

**Adınız**

- Website: [@websiteniz](https://websiteniz.com)
- Twitter: [@kullaniciadi](https://twitter.com/kullaniciadi)
- Github: [@kullaniciadi](https://github.com/kullaniciadi)
- LinkedIn: [@kullaniciadi](https://linkedin.com/in/kullaniciadi)

## 🙏 Teşekkürler

- [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
- [Awesome README](https://github.com/matiassingers/awesome-readme)
- [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
`
    },
    {
      id: 'api-tr',
      name: 'API Dokümantasyonu',
      description: 'Detaylı dokümantasyonla API projeleri için mükemmel şablon',
      category: 'api',
      tags: ['api', 'dokümantasyon', 'backend'],
      content: `# 🔌 API Adı

Node.js ve Express ile geliştirilmiş RESTful API.

## 📋 İçindekiler

- [Genel Bakış](#genel-bakış)
- [Kimlik Doğrulama](#kimlik-doğrulama)
- [Uç Noktalar](#uç-noktalar)
- [Hata Yönetimi](#hata-yönetimi)
- [Hız Sınırlaması](#hız-sınırlaması)
- [Kurulum](#kurulum)

## 🎯 Genel Bakış

Bu API, [kaynağınızı açıklayın] yönetimi için uç noktalar sağlar.

**Temel URL:** \`https://api.example.com/v1\`

## 🔐 Kimlik Doğrulama

Bu API Bearer Token kimlik doğrulaması kullanır. Token'ınızı Authorization başlığına ekleyin:

\`\`\`
Authorization: Bearer TOKEN_BURAYA
\`\`\`

## 📚 Uç Noktalar

### Kullanıcılar

#### Tüm Kullanıcıları Getir
\`\`\`http
GET /api/users
\`\`\`

**Yanıt:**
\`\`\`json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Ahmet Yılmaz",
      "email": "ahmet@example.com"
    }
  ]
}
\`\`\`

#### ID ile Kullanıcı Getir
\`\`\`http
GET /api/users/{id}
\`\`\`

**Parametreler:**
| Ad | Tip | Açıklama |
|------|------|-------------|
| id | integer | Kullanıcı ID |

#### Kullanıcı Oluştur
\`\`\`http
POST /api/users
\`\`\`

**Gövde:**
\`\`\`json
{
  "name": "Ahmet Yılmaz",
  "email": "ahmet@example.com",
  "password": "güvenliparola"
}
\`\`\`

## ⚠️ Hata Yönetimi

API geleneksel HTTP yanıt kodlarını kullanır:

- \`200\` - Tamam
- \`201\` - Oluşturuldu
- \`400\` - Hatalı İstek
- \`401\` - Yetkisiz
- \`404\` - Bulunamadı
- \`500\` - Sunucu Hatası

**Hata Yanıt Formatı:**
\`\`\`json
{
  "success": false,
  "error": {
    "code": 400,
    "message": "Doğrulama hatası",
    "details": "E-posta gerekli"
  }
}
\`\`\`

## 🚦 Hız Sınırlaması

API istekleri IP adresi başına saatte 100 istekle sınırlıdır.

## 🚀 Kurulum

1. Depoyu klonlayın
\`\`\`bash
git clone https://github.com/kullaniciadi/api-adi.git
\`\`\`

2. Bağımlılıkları yükleyin
\`\`\`bash
npm install
\`\`\`

3. Ortam değişkenlerini ayarlayın
\`\`\`bash
cp .env.example .env
\`\`\`

4. Sunucuyu başlatın
\`\`\`bash
npm start
\`\`\`

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır.
`
    },
    {
      id: 'mobile-tr',
      name: 'Mobil Uygulama',
      description: 'Mobil uygulama projeleri için tasarlanmış şablon',
      category: 'mobil',
      tags: ['mobil', 'uygulama', 'react-native', 'flutter'],
      content: `# 📱 Mobil Uygulama Adı

React Native ile geliştirilmiş güzel bir mobil uygulama.

## 📸 Ekran Görüntüleri

| Ana Ekran | Profil Ekranı | Ayarlar Ekranı |
|-------------|----------------|-----------------|
| ![Ana](https://via.placeholder.com/200x400) | ![Profil](https://via.placeholder.com/200x400) | ![Ayarlar](https://via.placeholder.com/200x400) |

## ✨ Özellikler

- 🎨 Güzel ve sezgisel kullanıcı arayüzü
- 🔐 Güvenli kimlik doğrulama
- 📊 Veri görselleştirme
- 🔔 Push bildirimleri
- 🌙 Karanlık mod desteği
- 🌍 Çoklu dil desteği

## 🛠️ Kullanılan Teknolojiler

- [React Native](https://reactnative.dev/) - Mobil framework
- [Expo](https://expo.dev/) - Geliştirme platformu
- [Redux](https://redux.js.org/) - Durum yönetimi
- [React Navigation](https://reactnavigation.org/) - Navigasyon
- [Styled Components](https://styled-components.com/) - Stil

## 📋 Ön Koşullar

Bu projeyi çalıştırmadan önce aşağıdakilere sahip olduğunuzdan emin olun:

- Node.js (v14 veya üzeri)
- npm veya yarn
- Expo CLI
- iOS Simulator (iOS geliştirme için)
- Android Studio (Android geliştirme için)

## 🚀 Başlangıç

1. Depoyu klonlayın
\`\`\`bash
git clone https://github.com/kullaniciadi/mobil-uygulama.git
cd mobil-uygulama
\`\`\`

2. Bağımlılıkları yükleyin
\`\`\`bash
npm install
# veya
yarn install
\`\`\`

3. Geliştirme sunucusunu başlatın
\`\`\`bash
expo start
\`\`\`

4. Cihaz/simülatörde çalıştırın
- iOS simülatörü için \`i\` tuşuna basın
- Android emülatörü için \`a\` tuşuna basın
- Cihazınızda Expo Go uygulamasıyla QR kodu tarayın

## 📦 Derleme

### Android
\`\`\`bash
expo build:android
\`\`\`

### iOS
\`\`\`bash
expo build:ios
\`\`\`

## 🧪 Test

Test paketini çalıştırın:
\`\`\`bash
npm test
\`\`\`

## 📱 Uygulama Mağazası Bağlantıları

- [iOS App Store](https://apps.apple.com/app/uygulamaniz)
- [Google Play Store](https://play.google.com/store/apps/details?id=uygulamaniz)

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Özellik dalınızı oluşturun (\`git checkout -b feature/HarikaOzellik\`)
3. Değişikliklerinizi commit edin (\`git commit -m 'Harika özellik ekle'\`)
4. Dalınıza push edin (\`git push origin feature/HarikaOzellik\`)
5. Pull Request açın

## 📄 Lisans

MIT Lisansı altında dağıtılmaktadır. Daha fazla bilgi için \`LICENSE\` dosyasına bakın.

## 📞 İletişim

Adınız - [@twitter_hesabiniz](https://twitter.com/twitter_hesabiniz) - email@example.com

Proje Bağlantısı: [https://github.com/kullaniciadi/mobil-uygulama](https://github.com/kullaniciadi/mobil-uygulama)
`
    },
    {
      id: 'library-tr',
      name: 'Kütüphane/Paket',
      description: 'Açık kaynak kütüphaneler ve npm paketleri için şablon',
      category: 'kütüphane',
      tags: ['kütüphane', 'paket', 'npm', 'açık-kaynak'],
      content: `# 📚 Kütüphane Adı

[![npm version](https://badge.fury.io/js/kutuphane-adi.svg)](https://badge.fury.io/js/kutuphane-adi)
[![Downloads](https://img.shields.io/npm/dm/kutuphane-adi.svg)](https://npmjs.com/package/kutuphane-adi)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Amacı açıklayın] için güçlü ve hafif JavaScript kütüphanesi.

## 🚀 Özellikler

- ⚡ Hafif ve hızlı
- 🔧 Kullanımı kolay API
- 📦 Sıfır bağımlılık
- 🌐 Tarayıcı ve Node.js'de çalışır
- 📱 Mobil uyumlu
- 🎯 TypeScript desteği

## 📦 Kurulum

### npm
\`\`\`bash
npm install kutuphane-adi
\`\`\`

### yarn
\`\`\`bash
yarn add kutuphane-adi
\`\`\`

### CDN
\`\`\`html
<script src="https://unpkg.com/kutuphane-adi@latest/dist/kutuphane-adi.min.js"></script>
\`\`\`

## 🔧 Kullanım

### Temel Kullanım

\`\`\`javascript
import KutuphanAdi from 'kutuphane-adi';

const instance = new KutuphanAdi({
  secenek1: 'deger1',
  secenek2: 'deger2'
});

instance.birSeyYap();
\`\`\`

### Gelişmiş Kullanım

\`\`\`javascript
import { metod1, metod2 } from 'kutuphane-adi';

// Belirli metodları kullan
const sonuc = metod1('parametre');
metod2(sonuc);
\`\`\`

## 📖 API Referansı

### Constructor

\`\`\`javascript
new KutuphanAdi(secenekler)
\`\`\`

**Seçenekler:**

| Seçenek | Tip | Varsayılan | Açıklama |
|--------|------|---------|-------------|
| secenek1 | string | 'varsayilan' | Seçenek1'in açıklaması |
| secenek2 | boolean | false | Seçenek2'nin açıklaması |
| secenek3 | number | 100 | Seçenek3'ün açıklaması |

### Metodlar

#### \`.metod1(parametre)\`

Bu metodun ne yaptığının açıklaması.

**Parametreler:**
- \`parametre\` (string): Parametrenin açıklaması

**Döndürür:** Dönüş değerinin açıklaması

**Örnek:**
\`\`\`javascript
const sonuc = instance.metod1('ornek');
console.log(sonuc); // Beklenen çıktı
\`\`\`

#### \`.metod2(secenekler)\`

Bu metodun ne yaptığının açıklaması.

**Parametreler:**
- \`secenekler\` (object): Yapılandırma nesnesi

**Örnek:**
\`\`\`javascript
instance.metod2({
  param1: 'deger1',
  param2: true
});
\`\`\`

## 🌟 Örnekler

### Örnek 1: Temel Uygulama

\`\`\`javascript
import KutuphanAdi from 'kutuphane-adi';

const lib = new KutuphanAdi();
lib.birSeyYap();
\`\`\`

### Örnek 2: Özel Seçeneklerle

\`\`\`javascript
import KutuphanAdi from 'kutuphane-adi';

const lib = new KutuphanAdi({
  ozelSecenek: true,
  tema: 'karanlik'
});

lib.baslatir();
\`\`\`

## 🧪 Test

Test paketini çalıştırın:

\`\`\`bash
npm test
\`\`\`

Kapsama ile testleri çalıştırın:

\`\`\`bash
npm run test:coverage
\`\`\`

## 🤝 Katkıda Bulunma

Katkıları memnuniyetle karşılıyoruz! Detaylar için [Katkı Rehberi](CONTRIBUTING.md)'ne bakın.

### Geliştirme Kurulumu

1. Depoyu fork edin ve klonlayın
2. Bağımlılıkları yükleyin: \`npm install\`
3. Dal oluşturun: \`git checkout -b feature/ozelliginiz\`
4. Değişikliklerinizi yapın ve testler ekleyin
5. Testleri çalıştırın: \`npm test\`
6. Değişikliklerinizi commit edin ve push edin
7. Pull request gönderin

## 📄 Lisans

Bu proje MIT Lisansı altında lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

- Tüm katkıda bulunanlara teşekkürler
- [Benzer kütüphane] tarafından ilham alınmıştır
- ❤️ ile [Adınız] tarafından geliştirilmiştir

## 📞 Destek

- 📧 E-posta: destek@example.com
- 💬 Discord: [Sunucumuza katılın](https://discord.gg/example)
- 🐛 Sorunlar: [GitHub Issues](https://github.com/kullaniciadi/kutuphane-adi/issues)
`
    }
  ]
};