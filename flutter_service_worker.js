'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "0bc9158a5283c209313efd38afd80b53",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9156c1c7e31fbfec98bff4bb09f3c674",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d52278fcb1521194be7628792f651194",
".git/logs/refs/heads/master": "d52278fcb1521194be7628792f651194",
".git/logs/refs/remotes/origin/master": "f33a12603bd08bf62ccdbd81f4d1e2e3",
".git/objects/0e/8c2dd930a56d8f3c372ce6832e68bc0ee49b84": "0af79fa40e459e1552e6f3e5c9943ff2",
".git/objects/11/38d3804d4a8176fe4c4487f1f78d2367c60e38": "6c4bf187559115ca9a70dca89db43bae",
".git/objects/13/46debd9d70a78c54ba500d096e9b26ad7289b7": "46b816a00cf4778e431009bf34b791d8",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1d/03670b3518ee848dd8bd129e539148ac06547c": "eb3af9bf68ba3a2575b6708dedaa47e2",
".git/objects/1f/57372e3b8a268cdf305879381b09e7dd25623e": "74b35c0f0ff57e7e7371b5b9f0d13904",
".git/objects/27/a8971c1b9123e8930b4204ff0f571dcd2d278a": "1f84d9905e2f3cf13beaf987e4168490",
".git/objects/27/eef5c05b5c72558187ef5ee9a405fad4cc46f2": "d16ff9ae9938095b5d37cbf2845a42c5",
".git/objects/2a/dae2c826a25af773f83ba2b88d63156137bb9a": "26caba3d907a3686ee2bafef4837fddb",
".git/objects/30/16fa1a53e0e3578e44af4cbac249aec173e277": "a35132c5f9430cd7f133642f9b31e76d",
".git/objects/30/9527b3ba5dc2282716dc5fa967f7e5e5f27c47": "b25e1e07d3866420856b9481a65526f6",
".git/objects/39/122a88eae5fc696a6185b020919a1db548aae4": "c6e5e82546b384af5110373403552ba8",
".git/objects/40/3275d28cab5d095de0d368e263e9603481e81e": "c39a6f22ab238562a96eec2ddcf5dc58",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/ca02642ef966e4f3e72fa3006f80535a72249d": "a7246375f44945dd8024a5a3ce13dd23",
".git/objects/4a/4edfbeb81b6dca5b78223d0217bc640bcd5b0a": "db9caa46f6baf463e03403ca827e38bb",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/54/04989695ba033e43766383e509d7db88cf6479": "c7991513b0652ddbbb9455ba7f3c6908",
".git/objects/59/76cdf91e3124369b344ecc46c1ec6727684431": "d72542cd434d730ab89ff315c6cc30e2",
".git/objects/59/e456fdab493a5c6234d094cc45bee6b559a85c": "a478e875b95ce123b654ac4b6125b1c9",
".git/objects/5d/988862b2958971cc6010bdaaa4b1e447ff0f57": "9a56884d04d5d26df01c3e58f482b56d",
".git/objects/5d/f7bf579bd34dbfd971476283247612c1806692": "c943d6ef7878563f3a104a8440dfce45",
".git/objects/62/c8c189025d7e591168aa25beff5609f20de8d2": "e9fa1a66302108060e437dbb05780335",
".git/objects/64/c51210deedfb7cd209925c340fe71e2c48e7ce": "137bf613393b16e176498bddf4d18ab4",
".git/objects/66/5201725709ea26e78de297dc4dba090ddfd036": "4049180207e8c1eb38b31d60361865a8",
".git/objects/67/973ce86d36990a46dc37d104a493bbc0bc9413": "f90211a4eb4a51a74a86ab5716c53921",
".git/objects/6b/52a45868c4578dccbe07c139cbbf3445a0f9da": "2e08a953ec387b905ee3a147b0777664",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/2bd2a225b011c94dbff7b0eb51feef09e683cb": "8a65bc5ef08474d5ab2b88d5dcedb23e",
".git/objects/78/ef426bdb95c5be8821ab22fe0b4bb9eb9b5742": "1cc571fc3a31c05a1fafcd1ca0650aba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/f17fa8dc89f45aceb52fb12dffe21294068ac9": "ece6b3818249b08a7eca48dba3eaa658",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/87cf1e0a2cd8166d73fba407b29b8d49d5abac": "8a5167aab170fd7ffd8b2f7f64c6c977",
".git/objects/96/72a20cc2eec252ffe910baa6611bd954d7da59": "f8b8e3c23eb5b6c4fb018b19d0d5b3c7",
".git/objects/98/d5b18861e7dac1d167bae58856832b570a4aff": "a1879cface95f1192ed5b89aabff097f",
".git/objects/9a/e8746e4177039bee297ed857f3034edbe1557f": "d3f1164b390f62ebbe2d1e5f7dfbaa55",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/3a50c869fa37c59b407b706903ef7cb21e9b7c": "67a38e6a0477bc5eaf1c1c396c585e23",
".git/objects/a0/f7951be9375ab2b26e89ec47e117cec46cfd14": "7a0e67a3780ee755a3aa1ab9b966c322",
".git/objects/a3/9a95951b6c13104ff841a1d019704fd07b2344": "4949158085ddc34c2fce1da9fd2239e5",
".git/objects/b3/b5459fcc393e5cff3c80db6f27e5a18c8f1bde": "1934075bb8df57f7bb2253079ab7263f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c0/3869c2b1e3be7a712b6680f6aeaa79b2004e26": "914bd9815773421c01100c325f877486",
".git/objects/c3/11a31f9a8b9672be69a7f2ed4ffed169b9e901": "db4aedb9fe917b63b141a0fa003aede5",
".git/objects/c6/58cd5a88f08898cee884149005dbad9be3616b": "c09790921e375fcc5e44344339a90c1a",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cd/49f836340df0e3af8726f597aac2556edecc20": "de57bce3ad1a86df920942a60c38230b",
".git/objects/d2/64ebfc2e70802fc9457f0eba2ac8d910476231": "44707610fb7222e97ba9b5ada5375169",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/fade59b37a583f6035b9b62aa320e92b7501b0": "459d3fb76420e64ec5fd83de17f5088f",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/b4b1c5d2e42a389f71445526fbd057baca484f": "1cc089592c1a6e2a8d98a47974b78cf3",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/b640bb318283b077602d2812275d1e33693c3e": "577630cdfdc834b84ae95ce2d006aa7b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f9/71688a4615150dfbe16de4e508dd548a571880": "67bbdff878f18a535909b15d3d68c6dc",
".git/objects/fb/b595020d3a94d0c45f8b492204bd232e0a65ba": "4ee2b7e12990311abcfe76783033769c",
".git/refs/heads/master": "f6514efe51d3ae84f90c4f2d3753d643",
".git/refs/remotes/origin/master": "f6514efe51d3ae84f90c4f2d3753d643",
".vscode/settings.json": "8cd5bee24dab326183e97ca493965dce",
"assets/AssetManifest.bin": "fd525ac5ed03e076234ab4379c3d5f7c",
"assets/AssetManifest.bin.json": "ff666203d48d6e12c29ed9cb2fb81caf",
"assets/AssetManifest.json": "3e0e9ba2b5ff55d2bf35af5ff58bf3c6",
"assets/assets/icons/icon-caution@3x.png": "8f984d63371c3c065a6600c8a3ce4610",
"assets/assets/icons/icon-close@3x.png": "acd36d73c212b0340765271095d4ab7a",
"assets/assets/icons/icon-correct@2x-green.png": "70325b6ace4a1fb08f6cdae73f72bb74",
"assets/assets/icons/icon-down_4@3x.png": "f7bd2048bda76031dc2c9f1c1851e39c",
"assets/assets/icons/icon-error@3x.png": "e5b60c16a6694859a9a342e66dc09609",
"assets/assets/icons/icon-info@3x.png": "f14fc07d89153a98cc979979c02757d8",
"assets/assets/icons/icon-L@3x.png": "d23685a262498c543f8fa496c2c55943",
"assets/assets/icons/icon-notifications.png": "01e90e91bd50b2eb166784bac884b7e3",
"assets/assets/icons/icon-R@3x.png": "81e67dd97b2cd458079dde2c2ffabc75",
"assets/assets/images/logo_tpk.png": "6c5e90f3a6d7793651ae96a21318a911",
"assets/assets/images/thaiparker.jpg": "3f2e724345e044c0f280da7aef74182c",
"assets/assets/lottie/error.json": "ef86708063b869ef7c06449458b55f3f",
"assets/assets/lottie/loading.json": "0360c225f6303eba41fb06b14a98b2cf",
"assets/assets/lottie/loadingFinger.json": "56721c099bfc1e1111eaf9367a617bbd",
"assets/assets/lottie/success.json": "d5f782390a29704806961a7013870025",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "eecaff37710944f312db42c030763a4a",
"assets/NOTICES": "9ccf556569f074c754ff7e9915f5a4ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "98dad5e2c8408fe05054e61d99ffa237",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c6309b01f95a40bf07428bccc8a230ee",
"/": "c6309b01f95a40bf07428bccc8a230ee",
"main.dart.js": "b42020d06dea638a7c39c5bb224798aa",
"manifest.json": "b66eb2767e21b32ea1eb2137b30bc4ac",
"version.json": "3153767d6bd6e6909f9a5864b2bc1d2f"};
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
