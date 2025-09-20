const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Read products data
let products = [];
try {
  const productsData = fs.readFileSync('./data/products.json', 'utf-8');
  products = JSON.parse(productsData);
} catch (error) {
  console.error('Error reading products data:', error);
}

// Template replacement function
const replaceTemplate = (template, product) => {
  let output = template.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%ORGANIC%}/g, product.organic ? 'organic' : '');
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);
  return output;
};

// Pagination HTML generator
const generatePaginationHtml = (currentPage, totalPages) => {
  if (totalPages <= 1) return '';
  
  let paginationHtml = '<div class="pagination">';
  
  // Previous button
  if (currentPage > 1) {
    paginationHtml += `<a href="/?page=${currentPage - 1}" class="pagination-btn">← Previous</a>`;
  }
  
  // Page numbers
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);
  
  if (startPage > 1) {
    paginationHtml += `<a href="/?page=1" class="pagination-btn">1</a>`;
    if (startPage > 2) {
      paginationHtml += '<span class="pagination-dots">...</span>';
    }
  }
  
  for (let i = startPage; i <= endPage; i++) {
    const activeClass = i === currentPage ? ' active' : '';
    paginationHtml += `<a href="/?page=${i}" class="pagination-btn${activeClass}">${i}</a>`;
  }
  
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationHtml += '<span class="pagination-dots">...</span>';
    }
    paginationHtml += `<a href="/?page=${totalPages}" class="pagination-btn">${totalPages}</a>`;
  }
  
  // Next button
  if (currentPage < totalPages) {
    paginationHtml += `<a href="/?page=${currentPage + 1}" class="pagination-btn">Next →</a>`;
  }
  
  paginationHtml += '</div>';
  return paginationHtml;
};

// Read templates
let templateOverview = '';
let templateCard = '';
let templateProduct = '';

try {
  templateOverview = fs.readFileSync('./templates/template-overview.html', 'utf-8');
  templateCard = fs.readFileSync('./templates/template-card.html', 'utf-8');
  templateProduct = fs.readFileSync('./templates/template-product.html', 'utf-8');
} catch (error) {
  console.error('Error reading templates:', error);
}

// Routes
// Overview page with pagination
app.get('/', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  const paginatedProducts = products.slice(startIndex, endIndex);
  const cardsHtml = paginatedProducts.map(product => replaceTemplate(templateCard, product)).join('');
  
  // Add pagination info
  const totalPages = Math.ceil(products.length / limit);
  const paginationHtml = generatePaginationHtml(page, totalPages);
  
  let output = templateOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
  output = output.replace('{%PAGINATION%}', paginationHtml);
  
  res.send(output);
});

// Product detail page
app.get('/product/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).send('<h1>Product not found!</h1>');
  }
  
  const output = replaceTemplate(templateProduct, product);
  res.send(output);
});

// API Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  
  res.json(product);
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).send('<h1>Page not found!</h1>');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 NodeFarm server is running on port ${PORT}`);
  console.log(`📱 Open your browser and visit: http://localhost:${PORT}`);
});
