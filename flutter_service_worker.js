'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "311bb554e4292ab5353442fa8dec6885",
".git/config": "aee692e4fcf68404ee5e6e7a993eb62a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6c2cf89da5a5c727494ff87c18eef411",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a2d05cb12f6df54f2c4fb7eef48d781a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5d65126e7d600543ae63668744806b61",
".git/logs/refs/heads/main": "04606293d73242ca30daf7b2c9151c13",
".git/logs/refs/remotes/origin/main": "8c60d7778e456b08db1c66c652546611",
".git/objects/00/2b3c2bbe1070e77bb0717c1ea67c7617e2f3a3": "ff7b7de0a97909181eecc52755123833",
".git/objects/01/bd6ee7cea4f9a062b6115a09a24d2f22196cdb": "e80c5837e5ce85eeb490d7a656e0ce58",
".git/objects/08/1393fa55459047daebc3bd1c8bfe278618002d": "4e71ba257617b1b4d9d144f6b601b4e4",
".git/objects/0c/d9770384ff24c5ad0e8d859df943b5bd47a041": "9e422a8885494563e1a13eb6c6c597dd",
".git/objects/10/9cd7ec00770267899dd853921113b865e7c131": "94ed9e29e13055a1de3e15102cb64820",
".git/objects/10/a6213505a75d9949596fc876a5e56b066effbd": "3c962877d1dbeb4eb9d3bf9ef72c7382",
".git/objects/11/df3561be769f190a942c98a42de0a71c677fb4": "f6a052d0445d40dcbf6ca13a41a2d3b7",
".git/objects/16/ea68c9c7c6fdc214e06218074856ca3805d797": "6a466a44ba7a5fcd66d11eadccd0fe99",
".git/objects/17/5ea0aa61313056368501f60d73d0dbb0093487": "6e676e26faba5cfcb5935490b30e2534",
".git/objects/19/f4a49d5d1f344b3a55f3b7c883db4b9c9d22cc": "5293e4d969a5aa475f5d518381e57736",
".git/objects/1c/7728093aecd836659766ca074d9921ca3a4f39": "e1a65a3b8ecfc1d71541931877d42e75",
".git/objects/1d/48eca46389be3c578a5d44bb5cacc70162de31": "10cc0dc81b3b40821a0b33e4386439dc",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/22/1dd2bc1eba0850c4d0f32a810f617397675fcb": "4bfab8dc392d71d5cde243d7289bd9e9",
".git/objects/22/cf10c38f2c953f2a8a32351d565118899a6f7e": "caec3aad24ca5ceff20f58d4116d1887",
".git/objects/23/b5505bc774e04c5cb54cd51bc0961537cb9af4": "3c5dd22d1763803b8a3c268daef7dde4",
".git/objects/25/cc4680dcb4e43c09c31450fb6d092660829568": "3f255091760bdc8ecc14dd2d6a89939b",
".git/objects/26/95975eb5b326f4766b4e186bfaf7cf6661f8ec": "86a718b579277b35ab0eba7eb8ec2209",
".git/objects/27/c4531069ca10215ece21ab6e739417cce91b84": "8a8b61ff09296210082d98d30a279e51",
".git/objects/28/c058257164e2b56ed1e58c5647ccdd75cf27dd": "496eb3a9a394a618f886fa87199f442a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/36/e400e916e89e5c0755c26c59c5533e05ba437e": "72a869bf04c6fd02b0a07fe41d0e2617",
".git/objects/46/04231ea53b987a7e59a9a32a9c2a814c313ae4": "be314ffa7ef09189c372c7ef5bac27b5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/9b82c29ff677ff92e064812ecad2b2f26ad8af": "0bca8e7d5dce4324bae81b4bab0157ff",
".git/objects/54/97ea141efcf956305630dcac06eae529bdf962": "876dab1625df12687b7ec6b0d3fe6b26",
".git/objects/58/a4d754b506afebc2f169be320fc20000ab9e68": "6afa3bcb7f64c7ca8915655f631c5488",
".git/objects/5d/5f91c23776e0f3e1515feabc9fbe451665687a": "7720316ac0ccbb72036a158c0dadfbc6",
".git/objects/5f/ab5fe8d24dfaf4f680ebcdc435bd315272d64b": "9f767d439f5f76be8ffcf6f05fc3520a",
".git/objects/63/9a7dc83fbeebce320a91d3b86757d3cf58c47c": "6aec399263f850e12c35d88bf7730cde",
".git/objects/69/08d54b2d49547c2e499c22c376e8ab4becdd93": "f1089201e709778536c0cd6323c0c1fe",
".git/objects/6b/02b6b5c6047b3046f19c10a504b7d357ad8975": "958fe8c9df091963244377d16e3115a9",
".git/objects/6d/ff673bdcbb873b84b46c6ca97f5b58d090e1a9": "b8e317805c0aa1718dfa3fabf00fe304",
".git/objects/6f/9de95ba7caaa38434cf6b5918a72e2f0a13bda": "f7b149bfc87f1f162726fcf512b1a530",
".git/objects/6f/a4eb7cda93a147cd6a4d350ad5e871ece73fad": "91c17b51bed1ec66ecf84eac0f5b6651",
".git/objects/71/13575460b24a5cc242318691a929a20929f931": "d1a6044216fc9a389f994e5e4bf01c16",
".git/objects/73/f9a518a0c9729f9decd977f1a37800fd918728": "20d03708e8bf627742865137ca4a3b03",
".git/objects/74/d67f5bb5eed4dc77ab5a2f10f142060ee6d002": "62f6fb741a01298d130a316dcd89ab35",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/d06e9bcde6143ee76a58268cb4d7c73c91934f": "2d6b39599ac4510b1833b8cc5f74a36d",
".git/objects/7f/891615fcf6dd6a0f56cf29c6c7633ee08e23bc": "ff479bee1ebabc624e3ee14a2e3c40e4",
".git/objects/80/8597f91a4dc6d9e9a94f19b74ebdea0bdd9e45": "03e0fd0e5af134ae68dea348967416a3",
".git/objects/81/a3082b6f1a5bbdda4e984462f3a05de34baca2": "3c421db429855e59da61ff7352d5f144",
".git/objects/85/78c383075481461645c9db0fe2d88bbdde9eeb": "105aeaec721c0006f1ad045c391c733c",
".git/objects/87/c629ffb5a2733b5d280526762405f6f6c90174": "82cab8e5719a3a36560e111134ade24b",
".git/objects/90/415d0280f0fabd79527eb2cc05a48ab4b3a3e9": "93da7788f083883cf1d26b9a0327357d",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/91/ae12ed82053c794d46707c511430775b039206": "71fecf7c8d979156ac3bfb10f0714260",
".git/objects/94/c179a5c1cf90fd24eca58fbf1ebec2eca9d2ba": "0ba53acb4c94fb804c4bd9b169b03003",
".git/objects/94/fc20ff670ab925195eac8f6a4a47299b9acf0d": "04af8f9b830d73c63ac4d6a554ad775a",
".git/objects/96/096ac5c687c808066d2787bd779421e787d381": "5bdb05129aee857b0e370bb350f82a5f",
".git/objects/97/cc282636272e786299157274b84f83bcfa2caa": "9ad5e13542ec07de47ffbc9ec9ce9028",
".git/objects/9b/37c152a8615d48d0d43ade0af53badede403a3": "d690f9568ac135bbe716678c70fe073c",
".git/objects/9b/d0b8b69e2e4c89998f6da90cd30e5abef51eef": "a1a7401317ca59dab54ef1c0abf27aab",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9c/339ace6813c1989704507725be3fb7dfdf87ee": "076b6dc4ff6b1adefd58547f0f1fc4a9",
".git/objects/9d/f5cf66f1ea5d6a2f4c12a4604b9d09549a52f7": "3d59a0a7b5e0396535e0a611b509152e",
".git/objects/9e/156d89773a896c1fe105326d90fcdd716f2da7": "f90c1848df12fa07efd44b5259dae30d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/b2e197117ce679f5d86d5ff1c54c71109e34fe": "6a292b0873821cb41bec70cde96e384e",
".git/objects/a5/46ce770b8e5ca58fa9c3ac3a0178c4b7ad5ceb": "634b2f9e67efefe2e0c0915db37f3294",
".git/objects/a7/2bd4398d12b5cac8d4f03d1be54d54beee3173": "a6aa242101caf21d803615b0b5d072e8",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/c3dc74c6813ea3f2bd99a33da7579abf789940": "7fce4b985f601383221ac3a3c1a9fe35",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/af/04bfaefa47ce5404e69cc439f294d2ee4ddb0a": "ae21b2a79bac45dc77967b96151ebeec",
".git/objects/b4/f62d245944a99cfd34e6c76c20b8511e670d62": "88209470b78b108e35452b460bdc719c",
".git/objects/be/cf3a26fec53e98766a1dd8a0c6405bcde134b1": "47184c78db8ac6cf5768713a9d69a166",
".git/objects/c1/ed61c821486ab17c13ea0a5dcdbc43b3204aa5": "66520034226bf8181eb11e8dc8387f66",
".git/objects/c2/58539ff9f3a95f2701d92ea0408783acdd266f": "e772df53baf1055ff9fca98fa027ffb8",
".git/objects/c4/3b9dcc79599d159f821c37a170cf74ced622ce": "a2978b32ff63487caa153471bd90665f",
".git/objects/c7/1fb7de22d79ebe6072281a1e3414edb56651b1": "dbff7055f13555dc818812bfbea13901",
".git/objects/c8/f54e9635f2f28c3920e4d8c4c66dd863e43af4": "bfb77287aecf6b013b37c1fe8fc3e1dc",
".git/objects/d2/5e5e7642e136aedcd311f23c2a84630f77a75a": "7629cfb8fc6d73b152263be4876c0961",
".git/objects/d4/cc467149c03d54cbe38d60db1bb306542fb578": "fabdab233e8fdba92b6998ae54446a87",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/a6b71e51b4c3cbeaadc69dfabc34b8d1c37817": "484555658445fdba06d99b5b765e65d1",
".git/objects/db/041bb160ce6b6ff3a48685cd84ad0a54ebc189": "779d404718cde359263928f46fa55b39",
".git/objects/db/beb95ef14dd8b66b6f96e6cf66ec909304bb57": "7bfd170ad2778beb11b826e81db0ec3d",
".git/objects/e1/375fa37738ed805c66cc1dcc96dafd4008bc6a": "b24af52814e572b8e5292eb7963d4937",
".git/objects/e1/a650b9dada25d1effe5e0928e431762a1ac7b5": "9bb426597ffb3905f2ce286d748683f6",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/7ea552f2bdfc977baf46fdfb3b1f561419e21d": "7a9b2ce39f6981d2ff6793c0fb31fb04",
".git/objects/ed/a1657af48170f3b4a4f49f173d21f684a29e1c": "b9075e66aae56add2f8a4774c74af7a6",
".git/objects/ee/6ad46347328ddc2fa4af0143176854f0a1dad6": "8d3cee5bb7bf9eb6a6fc657fdf88b89a",
".git/objects/ee/a0c5e0b9a3dbfd0ed407a54b3bd45a1e8eba27": "1cf98759e8bee487046ab8fe246103ff",
".git/objects/ee/d497dd810f055dc901dbc62746c5646695cfe9": "26f05a84063ef5ebf273749d76266ea3",
".git/objects/f1/e1ef37771b5aee5776e8d0fc52c7b1e6150e2b": "9c80b40eb5bc6da79cb4b46e27cd3b82",
".git/objects/f2/017b8b453422347f10e69dafc75fc3926ddcec": "d1faebb38ed996cbb670b2a24f063a11",
".git/objects/f4/f68ee965380e9d4fe718f685b0a130e34e3644": "c2ae85c954a27d1d0fb02eba28b02aee",
".git/objects/f5/ae963a04ff5653518c07794239a9ba0c54c073": "def7357d6a83e1191269fd6976bca65b",
".git/objects/fb/4dab4e58be8cee40d204f0b769aa6b0f5fde6b": "6a6cf442cc3785d3a67574a711a8ccfc",
".git/objects/fd/4e174d9d7050e9dfa6356b85071aacd55d2364": "eb7715337ab4357833c727856b3ce90c",
".git/objects/fd/d931f97695196be459cc6dc7d73a5a23dc8d8b": "17cce45935af3f62123f262dab1d6f95",
".git/objects/ff/69d30c6151f58f27f336560842761363cff7fb": "9c158346ae803cd8cffa99901b90fafe",
".git/ORIG_HEAD": "e78c5d663c87b9dc68d3753bbcfe0d06",
".git/refs/heads/main": "8697d87e40fa3f6f466be6f5ac5afd72",
".git/refs/remotes/origin/main": "8697d87e40fa3f6f466be6f5ac5afd72",
"assets/AssetManifest.json": "9cbc07d2b31707937a924be20ff01a17",
"assets/assets/images/aamtspnlogo.png": "4bbbe0d35340094813f6bf441fb9b42f",
"assets/assets/images/aboutusilus.png": "bf33f8452e8a2778992bf2b83e94c7f2",
"assets/assets/images/careerilus.png": "06b9ed3fc793d4f874e4ac93d349208e",
"assets/assets/images/companylogo.png": "5d376ebf0476f347a691594a88a14e7d",
"assets/assets/images/diallogo.png": "2ede0c0d2c7e135d1aec96d869777fa7",
"assets/assets/images/Facebook.png": "6db0ce1ee5960364b8d9fae952fb1ba7",
"assets/assets/images/goalsilus.png": "282e0d8f687aaa5d1755b211cdb444c9",
"assets/assets/images/googlelogo.png": "e78a27b1320426705c8bec4bc2b68ae8",
"assets/assets/images/headermenuicon.png": "fee3b55f99cad5f7189f77ad2f6461b4",
"assets/assets/images/homeillus.gif": "b0115f174907639ba96666d0251570b5",
"assets/assets/images/homepageillus.png": "f9299a89f52636f8f4e70b3c7599d994",
"assets/assets/images/howweworkilus.png": "4d4f11b027c2133110a71c772d0f6012",
"assets/assets/images/Instagram.png": "981d56fbca8f2e839de05980d8170145",
"assets/assets/images/jobsavaililus.png": "61a4986bb826d48868e247e2b2cbab4a",
"assets/assets/images/journzlogo.png": "cb17fdd74d5a077325ecc884e4842a79",
"assets/assets/images/Linkedin.png": "5ee884f84bcf2642ede59c97349c44c7",
"assets/assets/images/loginbackground.png": "a285eab0230f4151245f87434452b4c9",
"assets/assets/images/logo.png": "3d36af4338a9681de9345c7d27680051",
"assets/assets/images/maillogo.png": "52a782527194e30285be643759c052cb",
"assets/assets/images/personimag.png": "70f7030874f19687dd9d8c3b30251550",
"assets/assets/images/productilus.png": "df8f7317b7421c92b80e60cab9393dda",
"assets/assets/images/teamilus.png": "34863993130e48195fea166f5f92b478",
"assets/assets/images/Twitter.png": "d78aa94f377ad0d952b9fdc99c337084",
"assets/assets/images/Whatsapp.png": "646d1031ca1556a146cf5bb88dac58a6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1e7c3cd9db5d3e9ab136f230a782397b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"CNAME": "e34f428dfd43b73bc20e54756d4298fa",
"favicon.ico": "cc8f53dae6b3aa4fc2f109e1abc0ba3e",
"icons/Icon-192.png": "7cf9127cdc2fc8ca8dc2834cf8673ad0",
"icons/Icon-512.png": "17b743caff34f389d3a6aebd78dd9597",
"index.html": "a489a91d90f5b732d206e979e8d25899",
"/": "a489a91d90f5b732d206e979e8d25899",
"main.dart.js": "1cd7b3371a63fbb4359a6b7acbbb7d45",
"manifest.json": "4fc7114768751ff50595e1b50eefb355",
"version.json": "72bef1bb95ff3b30ead8885df8cbf822"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
