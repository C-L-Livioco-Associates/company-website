'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0dc725ee06d343d75db84dbaf4c62e67",
"version.json": "193257b6617ed9057f8dbee5325e33e4",
"index.html": "b17c0da631cac9e0971db2e029b208e5",
"/": "b17c0da631cac9e0971db2e029b208e5",
"main.dart.js": "83a201736b586358ea041bec5475a410",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "658798570b7c3efc7366957aa610bc94",
"assets/AssetManifest.json": "7a94b687ca980afc4789dae3b68442c5",
"assets/NOTICES": "88d4162689d15b3fb142aed04b722ff4",
"assets/FontManifest.json": "c32740c9bad0ed5c119de67eaac63d82",
"assets/AssetManifest.bin.json": "2951e0737f8e83730a6664ef58b03fe8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4ee44a5e16f112196c2e249c0e97b059",
"assets/fonts/MaterialIcons-Regular.otf": "3cd504b6db1c3c507c011e1e5e839e0a",
"assets/assets/graphics/images/im_slogan_bg.png": "672c4ca7409345b997d0d5178b9c49f0",
"assets/assets/graphics/images/im_ceo.png": "b0e779f12f92efa8c98d4905a152cf0b",
"assets/assets/graphics/images/im_home_technology_section.png": "fd719bfe844e94b9f2dc1888f7e9a759",
"assets/assets/graphics/images/im_coo.png": "bdc942190db7a231702f745c4ffd3902",
"assets/assets/graphics/images/im_home_what_we_offer_section.png": "5ef9f13249259f387075ae6c7fb6a17f",
"assets/assets/graphics/images/im_cto.png": "c293880bda52b18a84aba73b67d6d62f",
"assets/assets/graphics/images/im_cfo.png": "8a6592791862da22a07c35f12580877c",
"assets/assets/graphics/images/im_home_about_us_section.png": "0be35f9a39121ef9febe68d6af1f2e60",
"assets/assets/graphics/icons/ic_map_pin.png": "9c4b9db9376fc82cae272a1241994f83",
"assets/assets/graphics/icons/ic_services_sys_admin.png": "03c898aca8f9731816acfa0046820142",
"assets/assets/graphics/icons/ic_linkedin.png": "6ac5fb9ab7a25947604265cf84065185",
"assets/assets/graphics/icons/ic_services_app_dev.png": "b5f053064bbcc0796574216b8f3d852b",
"assets/assets/graphics/icons/ic_services_web_dev.png": "5cab83f1ca8739e53a654f6cba84ae6c",
"assets/assets/graphics/icons/ic_goal.png": "ae6bcaeb1e29654a706eba85c800dd6e",
"assets/assets/graphics/icons/ic_phone_call.png": "319c858ad8c3e3d3e2769e215e4071d0",
"assets/assets/graphics/icons/ic_x.png": "0c734802fbbe61d9525229153277b465",
"assets/assets/graphics/icons/ic_facebook.png": "ab2686c3a09b06813aa885585e487358",
"assets/assets/graphics/icons/ic_mail.png": "11d7231ebfee40c2d73ea0e0d5053d6d",
"assets/assets/graphics/icons/ic_instagram.png": "acb83cca2718e6014de5820982183e72",
"assets/assets/graphics/icons/ic_contact_us.png": "01a5b27de87fb1c6b72bdeba2d66f810",
"assets/assets/graphics/icons/ic_vision.png": "5da1c80a21e207060d6a9c7b43f76f79",
"assets/assets/fonts/Raleway-Medium.ttf": "28ea37f0eb58c57e01eed0b06fc359d6",
"assets/assets/fonts/Raleway-SemiBold.ttf": "66c9748f1e4aae2e764d5c50c05f7841",
"assets/assets/fonts/Raleway-ExtraBold.ttf": "4e37fffb940ad5e5b9b96f59079e2014",
"assets/assets/fonts/Raleway-Regular.ttf": "6310192cd2011f527e18b1586a1245c8",
"assets/assets/fonts/Raleway-Light.ttf": "1aa2abd0c1ee7d067e6df27f82f1f0b2",
"assets/assets/fonts/Raleway-Bold.ttf": "9aefa157ae4a8f7ff923dd88cee3917f",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
