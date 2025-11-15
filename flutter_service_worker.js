'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cfb7bd2a6e8dcfdea1543662264252a2",
"version.json": "193257b6617ed9057f8dbee5325e33e4",
"index.html": "4fb07cd7bf3ff64ee087aa3b5cdde580",
"/": "4fb07cd7bf3ff64ee087aa3b5cdde580",
"main.dart.js": "165b587eca42daff23f72b0508181c94",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.mjs": "9260ad8da709fbf1ac35da31141e7f4a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "658798570b7c3efc7366957aa610bc94",
"main.dart.wasm": "3942e0571976da3ad9ddad0ba6779276",
"assets/NOTICES": "3538d3191f44603e5a7dbbd7e30a5dbb",
"assets/FontManifest.json": "2521fa0d4072602dfd003a31ad4435db",
"assets/AssetManifest.bin.json": "e4d6cc6cc0743fdfc22b2796e52e479c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "09f8ac234b99796b822f84fc11b5cf52",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/graphics/images/im_vp.png": "8d22986d8522ebd47395b26a9fa5da5a",
"assets/assets/graphics/images/im_vehicle_inspection_app.png": "7a29f2f73c04043eac27cc4d2fdf0cc1",
"assets/assets/graphics/images/im_electromobility_app.png": "dc43f9e74a5950d2be6991a54461bdc9",
"assets/assets/graphics/images/im_ceo.png": "32c39c0cde34ad8a3e2d42192d4e8cf2",
"assets/assets/graphics/images/im_medical_device_app.png": "62cf514eae6018c3a2a9c7293b54009c",
"assets/assets/graphics/images/im_promotional_microsites.png": "02068711afa91de1bfa69773ac7f23b8",
"assets/assets/graphics/images/im_internal_systems_revamp.png": "565275fd17e6afa91046c77e8e9ead93",
"assets/assets/graphics/images/im_home_bg.png": "7aae5c3a0d45e028e3470a4ffe9f4fe2",
"assets/assets/graphics/images/im_ride_hailing_app.png": "7403303860157d9123e1008ecbf83bd5",
"assets/assets/graphics/images/im_cto.png": "a5e28e66769b2b804920954021675721",
"assets/assets/graphics/images/im_cmo.png": "7aa4b02976e1e9fab48c6c59a6339427",
"assets/assets/graphics/images/im_cfo.png": "38528792540949f3ff8872ad77872a8b",
"assets/assets/graphics/icons/ic_phone.svg": "6a26cd3971f7b19f344daa3f9934f03a",
"assets/assets/graphics/icons/ic_bolt.svg": "30178c653e3215e7af6002d372ba7893",
"assets/assets/graphics/icons/ic_clock.svg": "8b6c1c93a938477111f377bf5ec70b41",
"assets/assets/graphics/icons/ic_cart.svg": "aa045c3488243d7ce535bbff575d92a8",
"assets/assets/graphics/icons/ic_mobile.svg": "82a6a002a6caa5262db4dc2da7758d93",
"assets/assets/graphics/icons/ic_facebook.svg": "c6c6866bd946203d0ebf96a5f3aefbbc",
"assets/assets/graphics/icons/ic_x.svg": "f11538422cd26b27d698d134801b4c04",
"assets/assets/graphics/icons/ic_code.svg": "354a26d98ca8a949ac46199078af1c4e",
"assets/assets/graphics/icons/ic_award.svg": "1cfe9eda1b430431d416549c526191a1",
"assets/assets/graphics/icons/ic_bulb.svg": "6aedca5488bccc91e4f7c5adf0c0ea21",
"assets/assets/graphics/icons/ic_linkedin.svg": "a327a7d29057a05fa352d0e6cea6db50",
"assets/assets/graphics/icons/ic_task.svg": "5a2d6e6081a746f06b10125a8d3cb232",
"assets/assets/graphics/icons/ic_microchip.svg": "b4d0f697691094590ad575d291c59a2f",
"assets/assets/graphics/icons/ic_web.svg": "4264153fba4fbd55a314586f9684abf7",
"assets/assets/graphics/icons/ic_desktop.svg": "7ebf86516f2d7e7189ee5c855d74aefe",
"assets/assets/graphics/icons/ic_shield.svg": "97c357b9389e297c771356c1153cb4b1",
"assets/assets/graphics/icons/ic_group.svg": "5e6dcfaa475574bfb5497c53333a1283",
"assets/assets/graphics/icons/ic_database.svg": "4543162f1b0605b7b4e4263d7770b429",
"assets/assets/graphics/icons/ic_email.svg": "676806e02f50663308a383e088dec4d4",
"assets/assets/graphics/icons/ic_chart.svg": "16e8108ad86c17032cf365a4e3aaf96b",
"assets/assets/graphics/icons/ic_github.svg": "2dd32ab1e0b379822a704862f9c68cd0",
"assets/assets/graphics/icons/ic_instagram.svg": "5c4d077a7f3889586242e314de516b18",
"assets/assets/fonts/Inter-Medium.ttf": "4591e900425d177e6ba268d165bf12e8",
"assets/assets/fonts/Inter-Light.ttf": "65ec965bd90e1a297cdb3be407420abc",
"assets/assets/fonts/Inter-Bold.ttf": "a041f18d0d0c67b376bec0343f7c0cf0",
"assets/assets/fonts/Inter-Regular.ttf": "e48c1217adab2a0e44f8df400d33c325",
"assets/assets/fonts/Inter-SemiBold.ttf": "c77560a8441d664af3e65dd57026dff9",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
