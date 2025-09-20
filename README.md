



# 🌱 NodeFarm - Fresh Organic Products

NodeFarm, taze ve organik ürünleri sergileyen modern bir fullstack Node.js uygulamasıdır. Bu proje, çiftlik ürünlerini güzel bir arayüzle sunarak kullanıcıların ürün detaylarını görüntülemesine olanak tanır.

## ✨ Özellikler

- **Modern ve Responsive Tasarım**: Mobil ve masaüstü cihazlar için optimize edilmiş
- **Ürün Kataloğu**: Çeşitli organik ürünlerin listesi
- **Detay Sayfaları**: Her ürün için ayrıntılı bilgi sayfası
- **Arama Fonksiyonu**: Ürünleri kolayca bulabilme
- **Shopping Cart**: Alışveriş sepeti simülasyonu
- **REST API**: Ürün verilerine programatik erişim
- **Smooth Animations**: Kullanıcı deneyimini geliştiren animasyonlar

## 🚀 Kurulum

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn

### Adım 1: Projeyi İndirin
```bash
git clone <repository-url>
cd nodefarm
```

### Adım 2: Bağımlılıkları Yükleyin
```bash
npm install
```

### Adım 3: Uygulamayı Başlatın
```bash
# Geliştirme modunda (otomatik yeniden başlatma ile)
npm run dev

# Veya normal modda
npm start
```

### Adım 4: Tarayıcıda Açın
Tarayıcınızda `http://localhost:3000` adresine gidin.

## 📁 Proje Yapısı

```
nodefarm/
├── data/
│   └── products.json          # Ürün verileri
├── public/
│   ├── css/
│   │   └── style.css          # Stil dosyaları
│   └── js/
│       └── script.js          # Frontend JavaScript
├── templates/
│   ├── template-overview.html  # Ana sayfa şablonu
│   ├── template-card.html     # Ürün kartı şablonu
│   └── template-product.html  # Ürün detay şablonu
├── server.js                  # Ana sunucu dosyası
├── package.json              # Proje konfigürasyonu
└── README.md                 # Bu dosya
```

## 🛠 API Endpoints

### Ürünler
- `GET /` - Ana sayfa (ürün listesi)
- `GET /product/:id` - Ürün detay sayfası
- `GET /api/products` - Tüm ürünleri JSON formatında getir
- `GET /api/products/:id` - Belirli bir ürünü JSON formatında getir

## 🎨 Kullanılan Teknolojiler

### Backend
- **Node.js**: Sunucu tarafı JavaScript
- **Express.js**: Web framework
- **File System**: JSON dosyalarından veri okuma

### Frontend
- **HTML5**: Sayfa yapısı
- **CSS3**: Modern stil ve animasyonlar
  - CSS Grid ve Flexbox
  - Smooth transitions
  - Responsive design
- **Vanilla JavaScript**: 
  - DOM manipulation
  - Fetch API
  - Local Storage
  - Intersection Observer API

### Özellikler
- **Template Engine**: Özel template sistemi
- **Static File Serving**: CSS, JS ve diğer statik dosyalar
- **JSON Data Management**: Dosya tabanlı veri yönetimi




# nodefarm--backendfirstmyproject
