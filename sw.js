const CACHE_NAME = 'caixa-batalhao-v2';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png'
];

// Instalação - cachear assets estáticos
self.addEventListener('install', (event) => {
  console.log('[SW] Instalando...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cacheando assets estáticos');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((err) => console.error('[SW] Erro ao cachear:', err))
  );

  // Ativar imediatamente
  self.skipWaiting();
});

// Ativação - limpar caches antigos
self.addEventListener('activate', (event) => {
  console.log('[SW] Ativando...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deletando cache antigo:', name);
            return caches.delete(name);
          })
      );
    })
  );

  // Assumir controle de todas as páginas
  self.clients.claim();
});

// Estratégia de cache: Network First para dados, Cache First para assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Estratégia para páginas/documentos (Network First)
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Atualizar cache com versão nova
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Fallback para cache
          return caches.match(request).then((cached) => {
            if (cached) return cached;
            // Página offline genérica
            return new Response(
              '<h1>Offline</h1><p>Você está offline e esta página não está em cache.</p>',
              { headers: { 'Content-Type': 'text/html' } }
            );
          });
        })
    );
    return;
  }

  // Estratégia para assets (Cache First)
  if (request.destination === 'style' || 
      request.destination === 'script' || 
      request.destination === 'image' ||
      request.destination === 'font' ||
      url.pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|css|js|json|woff|woff2)$/)) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) {
          // Retornar do cache e atualizar em background
          fetch(request).then((response) => {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, response);
            });
          }).catch(() => {});
          return cached;
        }

        // Se não estiver em cache, buscar e cachear
        return fetch(request).then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        });
      })
    );
    return;
  }

  // Default: tentar network, fallback para cache
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

// Sincronização em background
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-lancamentos') {
    console.log('[SW] Sincronizando lançamentos...');
    // Aqui poderia sincronizar com servidor quando houver conexão
  }
});

// Notificações push (para futuras implementações)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: 'icons/icon-192x192.png',
        badge: 'icons/icon-72x72.png',
        tag: data.tag || 'default',
        requireInteraction: false
      })
    );
  }
});

// Clique na notificação
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('./')
  );
});

// Mensagens do cliente
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
