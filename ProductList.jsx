
// src/data/products.js
// Ensures each category has at least SIX unique plants (grading requirement).
const products = [
  // Tropical (6)
  { id: 'tp-mon-01', name: 'Monstera Deliciosa', category: 'Tropical', price: 349.00, image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop' },
  { id: 'tp-alo-02', name: 'Alocasia Polly', category: 'Tropical', price: 399.00, image: 'https://images.unsplash.com/photo-1601887382358-4f2d245b251a?q=80&w=1200&auto=format&fit=crop' },
  { id: 'tp-cal-03', name: 'Calathea Orbifolia', category: 'Tropical', price: 329.00, image: 'https://images.unsplash.com/photo-1593697821030-9b3b5516b948?q=80&w=1200&auto=format&fit=crop' },
  { id: 'tp-phl-04', name: 'Philodendron Birkin', category: 'Tropical', price: 319.00, image: 'https://images.unsplash.com/photo-1614594950042-8818d7442b15?q=80&w=1200&auto=format&fit=crop' },
  { id: 'tp-pal-05', name: 'Parlor Palm', category: 'Tropical', price: 219.00, image: 'https://images.unsplash.com/photo-1551892589-865f69869443?q=80&w=1200&auto=format&fit=crop' },
  { id: 'tp-zz-06',  name: 'ZZ Raven', category: 'Tropical', price: 389.00, image: 'https://images.unsplash.com/photo-1593697821154-e3aa4a2b3f6c?q=80&w=1200&auto=format&fit=crop' },

  // Succulent (6)
  { id: 'sc-snk-01', name: 'Snake Plant', category: 'Succulent', price: 229.00, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop' },
  { id: 'sc-alv-02', name: 'Aloe Vera', category: 'Succulent', price: 149.00, image: 'https://images.unsplash.com/photo-1545249390-eee18418101f?q=80&w=1200&auto=format&fit=crop' },
  { id: 'sc-haw-03', name: 'Haworthia', category: 'Succulent', price: 129.00, image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1200&auto=format&fit=crop' },
  { id: 'sc-jad-04', name: 'Jade Plant', category: 'Succulent', price: 199.00, image: 'https://images.unsplash.com/photo-1496060169243-453fde45943c?q=80&w=1200&auto=format&fit=crop' },
  { id: 'sc-str-05', name: 'String of Pearls', category: 'Succulent', price: 259.00, image: 'https://images.unsplash.com/photo-1519162808019-7e09a7bc0292?q=80&w=1200&auto=format&fit=crop' },
  { id: 'sc-ebr-06', name: 'Echeveria Black Rose', category: 'Succulent', price: 189.00, image: 'https://images.unsplash.com/photo-1452857297128-d9c29adba80a?q=80&w=1200&auto=format&fit=crop' },

  // Fern (6)
  { id: 'fn-bos-01', name: 'Boston Fern', category: 'Fern', price: 199.00, image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200&auto=format&fit=crop' },
  { id: 'fn-mai-02', name: 'Maidenhair Fern', category: 'Fern', price: 179.00, image: 'https://images.unsplash.com/photo-1588617618704-0ef8d7311ca5?q=80&w=1200&auto=format&fit=crop' },
  { id: 'fn-bir-03', name: 'Bird’s Nest Fern', category: 'Fern', price: 209.00, image: 'https://images.unsplash.com/photo-1597055181299-5c6b6c4b6b59?q=80&w=1200&auto=format&fit=crop' },
  { id: 'fn-stg-04', name: 'Staghorn Fern', category: 'Fern', price: 329.00, image: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&w=1200&auto=format&fit=crop' },
  { id: 'fn-ble-05', name: 'Blechnum Fern', category: 'Fern', price: 189.00, image: 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?q=80&w=1200&auto=format&fit=crop' },
  { id: 'fn-hol-06', name: 'Holly Fern', category: 'Fern', price: 169.00, image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop' },

  // Cactus (6)
  { id: 'cc-bun-01', name: 'Bunny Ear Cactus', category: 'Cactus', price: 159.00, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1200&auto=format&fit=crop' },
  { id: 'cc-moo-02', name: 'Moon Cactus', category: 'Cactus', price: 139.00, image: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?q=80&w=1200&auto=format&fit=crop' },
  { id: 'cc-prk-03', name: 'Prickly Pear', category: 'Cactus', price: 199.00, image: 'https://images.unsplash.com/photo-1484557052118-f32bd25b45b5?q=80&w=1200&auto=format&fit=crop' },
  { id: 'cc-bar-04', name: 'Barrel Cactus', category: 'Cactus', price: 189.00, image: 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=1200&auto=format&fit=crop' },
  { id: 'cc-ora-05', name: 'Orange Cob Cactus', category: 'Cactus', price: 169.00, image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
  { id: 'cc-old-06', name: 'Old Man Cactus', category: 'Cactus', price: 229.00, image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=1200&auto=format&fit=crop' },

  // Vine (6)
  { id: 'vn-pth-01', name: 'Golden Pothos', category: 'Vine', price: 179.00, image: 'https://images.unsplash.com/photo-1628328698420-70da7712f788?q=80&w=1200&auto=format&fit=crop' },
  { id: 'vn-phl-02', name: 'Heartleaf Philodendron', category: 'Vine', price: 169.00, image: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?q=80&w=1200&auto=format&fit=crop' },
  { id: 'vn-str-03', name: 'String of Hearts', category: 'Vine', price: 259.00, image: 'https://images.unsplash.com/photo-1588346579767-bf4dcb1d0b8f?q=80&w=1200&auto=format&fit=crop' },
  { id: 'vn-ivy-04', name: 'English Ivy', category: 'Vine', price: 149.00, image: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146e?q=80&w=1200&auto=format&fit=crop' },
  { id: 'vn-dev-05', name: 'Devil’s Ivy N’Joy', category: 'Vine', price: 199.00, image: 'https://images.unsplash.com/photo-1615485737651-6e2a7c4f0f1a?q=80&w=1200&auto=format&fit=crop' },
  { id: 'vn-swc-06', name: 'Swiss Cheese Vine', category: 'Vine', price: 289.00, image: 'https://images.unsplash.com/photo-1611599535667-7e14c7d5b5a6?q=80&w=1200&auto=format&fit=crop' },
];

export default products;
