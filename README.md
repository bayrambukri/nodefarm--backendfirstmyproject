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

## 🌟 Öne Çıkan Özellikler

### Modern UI/UX
- Gradient backgrounds
- Card-based layout
- Hover effects
- Smooth animations
- Mobile-first responsive design

### JavaScript Fonksiyonalitesi
- **Arama**: Gerçek zamanlı ürün filtreleme
- **Shopping Cart**: LocalStorage ile sepet yönetimi
- **Notifications**: Kullanıcı geri bildirimleri
- **Lazy Loading**: Performans optimizasyonu
- **API Integration**: RESTful API kullanımı

### Performans Optimizasyonları
- Efficient DOM manipulation
- CSS animations over JavaScript
- Intersection Observer for scroll animations
- LocalStorage for data persistence

## 📱 Responsive Tasarım

Uygulama tüm cihaz boyutlarında mükemmel çalışır:
- **Desktop**: Full grid layout
- **Tablet**: Adaptive grid
- **Mobile**: Single column layout

## 🔧 Geliştirme

### Yeni Ürün Ekleme
`data/products.json` dosyasını düzenleyerek yeni ürünler ekleyebilirsiniz:

```json
{
  "id": 5,
  "productName": "Yeni Ürün",
  "image": "🍎",
  "from": "Türkiye",
  "nutrients": "Vitamin C, Fiber",
  "quantity": "1kg",
  "price": "10.00",
  "organic": true,
  "description": "Ürün açıklaması..."
}
```

### Stil Özelleştirme
`public/css/style.css` dosyasını düzenleyerek görünümü değiştirebilirsiniz.

### JavaScript Fonksiyonları
`public/js/script.js` dosyasında yeni özellikler ekleyebilirsiniz.

## 🚀 Production Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Heroku
```bash
# Heroku CLI kurulu olmalı
heroku create nodefarm-app
git push heroku main
```

### Docker
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📧 İletişim

Proje sahibi: NodeFarm Developer
- Email: developer@nodefarm.com
- GitHub: [@nodefarm](https://github.com/nodefarm)

## 🎯 Gelecek Özellikler

- [ ] Kullanıcı kayıt/giriş sistemi
- [ ] Gerçek alışveriş sepeti işlevselliği
- [ ] Ödeme entegrasyonu
- [ ] Admin paneli
- [ ] Ürün yorumları ve değerlendirmeleri
- [ ] Email bildirimleri
- [ ] Çoklu dil desteği
- [ ] Dark mode

---

**NodeFarm** ile organik ürünlerin dünyasını keşfedin! 🌱


# nodefarm--backendfirstmyproject
