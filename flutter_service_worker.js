'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cf8463b34caa8ac871a52d5dd7ad1ef",
".git/config": "dbb331027219d1d58ab15ef7d9274f8a",
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
".git/index": "54218ea058e1390a37fd7dda95b72b29",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cb873d6b72c185f815b744baab8bc88c",
".git/logs/refs/heads/master": "cb873d6b72c185f815b744baab8bc88c",
".git/logs/refs/remotes/origin/HEAD": "18885386ed86128e81109112d539dc3a",
".git/logs/refs/remotes/origin/master": "58b9003d6311bf8c31cb24a6bca67da9",
".git/objects/01/f1d07f9dcefdfce2449baef823803b80d995e2": "dd73d707b72a271db42c6b55ef24f240",
".git/objects/02/04730d0eb1f87c04cec1166f52c96d122f8454": "0a7b6d127eb1b1ee17d08393c0acc7e7",
".git/objects/07/55f0523790982110cf7ab67b8cea61974fcb46": "de43ec488650daa9c106e079bab53d3b",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0d/5d3a7c70c575eb322ca09f52cc54a175a87c03": "379a222168f035d03629d417895a1ab9",
".git/objects/10/58745ce4ece4f434463e0ac235ecd26a1ccea9": "40370b6574871ca8aa8087139ce13daa",
".git/objects/10/d7662fb770c4cac04d5bb5ee81370a483393a0": "bca7d98fb05b2c72bb8d99271d85377e",
".git/objects/16/e40830f44d02ab9f70994dae6041f4ebc4a2af": "4540422d9b6c63fe36103fa28c39b446",
".git/objects/17/35330a51060dac5a78a3fc4c63104a0544fd84": "e3faa4f2edec122926f4ceafd38b40dd",
".git/objects/17/8a1dd66823cf557f8e4c0f9b5096892a214297": "949f68488e210af870a8c6b718b7a206",
".git/objects/1e/ac9737270ed27fe2c6ab45a54ba642d5867d9f": "e8a615fae3eeef2ad248a6835ade48e2",
".git/objects/1f/1d3c35cd6dba4386056bede095569432780bf0": "7ff8de80d44f3c3145b24153c304d96a",
".git/objects/23/d7eeb269d470c2eebbc812c8849391f0f65138": "9f95a6170640199eec3473af77dac0b1",
".git/objects/24/96485859b7b3f667ad709d4c296357bb9dc130": "0d6116078ac6631fd3d36ba0d0c14631",
".git/objects/2a/71c565e8a6f104417a392412a12fc3f6e54eed": "bf1f8815ee4474a20e274bc8178d578c",
".git/objects/39/200ba48d33546f056a0cd6fd967b639fc93570": "2476afa08455635648f80f8d607a1a0d",
".git/objects/3a/2f428d174290ad15a7a6a15ef0d2095c7f3ade": "d2bfb2b09b58cba4bf0bf4f146f95cea",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/368add2aba8dd818fc356e5fe4a301158c1975": "4a5f90f9ccacb3fe5e5bf184efb8bbef",
".git/objects/3c/fb2e9d29bff9bf3c212eae052524ab485626c5": "cfe3c4bbdb4738b742a89039c7a81bd8",
".git/objects/3e/542c43d4df8d619c29b480b17d9b7f3e7a176e": "7de1f9bbfa845e3e0f958b8c7e3e6f5f",
".git/objects/3e/ce828aab4861cc3045c644485798456efcd9f3": "6413c75d13043593d410c59149d2020e",
".git/objects/40/3ef07d97a0d13cd87a2906f4548c9d4c0d61ae": "8970c319826e85321ac69511ca5bedef",
".git/objects/44/fd3a26441fbec67e541e309bc8d6219ae1a5c4": "82c04a66ff44a48b58c8d65321590ceb",
".git/objects/45/3f937cef4b1eea4a9498714bb9c9562ba7995d": "4be333cc8a45fdc16c27fd7a9b42248c",
".git/objects/47/86d6592eb7ab78e29d988b667c3b3366309d5a": "7618e1c6d8ea527aa968d19bcc2c9cc6",
".git/objects/49/5728a0d4e6b9eb85de0fff21360a1e1a8787c0": "1a2de7975e4e3a0c4ffa9abbd61b60a9",
".git/objects/4e/1d21bf13001646b4d0a15861c97af011ffd1d3": "ebde7ab2e9ae8244484a785e725c260b",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/51b7d31e923e859d87e21d23cc931ec671ffda": "f4b82aea133ee0e024133548cf854d25",
".git/objects/53/2dab6352dc25de00c4d71f72e5f715926d0c87": "28b77728d094f92c58fc851bdf498ec0",
".git/objects/56/baf04be086742bc7a2bf7847f1612ff0d5471b": "bd6fea9f6fae21bc2e6aaa56fead317b",
".git/objects/56/c58144d71eea6a02539299ebc9c506f05336c9": "d46e3846f2711cbed1813a7023e36aa1",
".git/objects/5b/85e38df58fdcac81b2927c801c2aefae72969d": "ae238a92a9e228dd3753f4bf2258f425",
".git/objects/5f/b7e25a4f12e870637c147fec60953eee17a9a2": "8ab16cc41dda81ec97b05cadfa53ed93",
".git/objects/60/1d86f7d36df17a38ed2e781523daed69b3bb99": "f95e380d3f831d0532bcd40788ad544d",
".git/objects/62/5ef4f74e42e1210bd53a329e3c7fa9a72a6fac": "166eb8b1df2ff2fab1c7e6fc00a4a24a",
".git/objects/62/d08832c512e7bb25db31eabd03ba69c30e67f7": "2da7c4daf4b8f68f0fd684b09055e655",
".git/objects/66/a41065cd19d28c4b0e4fd5104bea189f28c7fa": "f267879fe117860f378ff73d147cc426",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6a/e175378d89f97fae230159397a982811dfdfaf": "922f6520c67acdae122c0b3ed4a54122",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/74/4e1090bbd27c3736cbd132d43448c26397ee8e": "c3f0cbc880a426a6c638db7339e97158",
".git/objects/74/50a52d9d20ce84ecf28d36bf62b51346485d48": "00fdc939ddfa3ac314a6ccfb778ab21d",
".git/objects/74/a09cff34aca895eca48d4e1e1ad7eee526f0ed": "0b5b9cdbaae5dddb4484c497e9b4669e",
".git/objects/76/ea3166d466504512361789dde02eb759514100": "cedf9cb9ed0b8f637b68d92d9b9ef10a",
".git/objects/7b/e3df8550c6a31672f8bac50c77a08679bd0413": "e46c967ee8651dc87c69745e737f45e2",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7e/f85667eba70a6d1d29703437b5bcbf54f902b8": "9553d54702c50b644593e3ce9d3b4a74",
".git/objects/81/1baae768d09d681118ddee8576c8b2f0386734": "70734547001d57eb6581e73e0a5945fb",
".git/objects/82/17662d797ad0a9cde6db903afec126dd8eb8fa": "21b1982f16e68e12bcc6f4b0ed794255",
".git/objects/84/1a2602fa3a2f8bb80a3f09c3ad71fc0a11712b": "4058e302ee10420a9fa89aa9c22cfa8d",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/8b635ce6494f7e602e0b6cc618acc20b0fbcac": "b8a82212a9fac9d4548a3a955accb03d",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/01af940e1d0d0afc15c8278b68c43bff147a48": "e1ca07c2566921a6bd4f667815d79a81",
".git/objects/91/13329cb61c4275dede563539f28b255db2b8be": "68e07b612518aa2418f8912cad290121",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/97/ddbf933e8cffa023dd5148ec14d9882d3208bf": "18d8d5fffb51298b04203599247ba47a",
".git/objects/9a/421e4fbacfdfa18e33fca0dbbdb2154f409c50": "86a4565f7a599c257a79b6302892c91c",
".git/objects/9c/016b26ff49e9d2ba29e0f2a5de6466c82c82b2": "097db340f0ad250e2c3b401f6d72b394",
".git/objects/9e/1056d39bb76fe6606e26b09ef18fcb48f1f5a2": "c19a14f8282c351e4faea5cd7a4f99c5",
".git/objects/a0/6eeb619f640ae85e1180542ab80e5a12a60245": "56306411bd310d2d66e99be8faa4505f",
".git/objects/a2/c972f84fa21716674dc857bd9ddda663e298cc": "c1764304964d1eeb2ba8bfa6a21f9c29",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/a8c50dc2d825bf2dd8d8163d0cb2c93d919b82": "ea20a8262c21c62bf24026f5580db385",
".git/objects/aa/c9e56f57d157fe673a07aa3dd9ed506ea3a6e7": "f31dece0e3933fa679fd75958afcc0f3",
".git/objects/ab/1ca9f93a30974f9a9961f0024609f1a022733c": "faaa79d04d13a812218432d3b5705149",
".git/objects/ab/698bd31d73be4f2bc4d5a674683e77601f4edd": "3f5f9d1ce18e9f96089802c4454de52f",
".git/objects/ac/b34e7c67f45f388c4c180d78f29917272ef891": "2c671fd062373f79149f72ed6f3a44fa",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b7/8784a2f5d6be82ed95499bf0c50530b054a008": "0aefb65afef2b463d4fcf189ddb4cc86",
".git/objects/b8/8a8954c6d1c9121ee612778dc2a5728ff57aaf": "f9c81de01fc9d6331b34f211ebd94690",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/ef5aeaa0ed9aed30c33f144eef4f8663355bc1": "8e06e32b2f77997b0ad6c9557b9a1879",
".git/objects/ba/9355941af8d290b8207476ba3435fc8529d803": "17dd8423a6a3161a07cbbbe6fc7bc93a",
".git/objects/bc/0019f8b994ac6735761de4afaf2c22e10d7e3f": "5453a720ecde849a6f4ce0f094b10593",
".git/objects/be/4c73550a236ad16eaf26e4ec2edba91d2f9cd7": "b54e495354b6a283e61545be2b8519a4",
".git/objects/c4/ef11d9cf0abdbf0f08811d960bb610ad17cd9c": "63ec7402f047254d8fefc0ab76652ad7",
".git/objects/c7/f7232259b1ed6901fa449d7c68e958ee6a18f3": "a77b8e2b1437efe5b32429d47337f236",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/73e23f61418d1698be55ac602e2b31cfadd472": "922b7ded9fd45d5e9b0b89fe8fe8a49b",
".git/objects/cc/80df28d841457c59bcba230c8658f94a57e8dd": "fae5437aab2acf8f34a3d9761aa1ecd5",
".git/objects/cd/924f8422d022b7ba142ce17ef42ec2ab7888be": "e82219f69ccca87ba668aba1b92eb5ac",
".git/objects/cf/8acba681e80193b284d8b9cfce77f52e367640": "9af46a1656389a63193e03e9e480f912",
".git/objects/d1/1ab7f2472e488d8585c47c502776ae98a7f47b": "745eb892b3841e59396372c30c66bc2d",
".git/objects/d1/741f41dd79b8a80a3f2605178414ca93f0f71b": "31455aecd490abcb06fe39d6b0521646",
".git/objects/d1/afe57408107e80b8b29b6de9f4a31590e9b50a": "2571b024d5e74a79ff93eb15377f4740",
".git/objects/d5/7af23358c52110e5a17f36db6172f117bc954d": "b64cc447aeb8ae3b24cd0d407ded219b",
".git/objects/d8/2cb11ad8291a98df80e6d084e309646d3a9ce4": "1a2912d1ef23a3e21ee8943d6829b109",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/dc/6b3eb0a47ff8b5664b83e19bebcfb02b2bda3c": "a1b5a3d6cdfc7272ebf70579303fbf37",
".git/objects/dd/52a1ecb1613499e5fb7d90291d3bdb66c5e2aa": "ac6ef300a5c0a59c2d817407f98d6737",
".git/objects/e2/3aeb8358c3bf06d2ccce2c59c081bd2faa283b": "30c42df2c2d7df0bd7bb5edfbe04ea67",
".git/objects/e5/3cb160f33c1dd3f1b103f06b8acc3b2a59903f": "144293a7a8cbb52badd0e2dd62dab9da",
".git/objects/e8/c826db0f2a3ce34b5a58722f4d2733127ac04e": "43bff426e88f1d475662b7fef6c29d52",
".git/objects/ef/4b59810e8b1a75ab1766be1d3c76128c2dfa24": "10efc06c99b0ef7aa9c57abf5732ead7",
".git/objects/f0/887c41cf85630cd57199036c6a6dd097121a90": "df98f802450b6c68e0c81f94da5e970f",
".git/objects/f1/ba9be067952f84097439fa5c5b60290e77d0f4": "5089f340656ed528ae048490d607c2b7",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/e2ccdbb415cc7f027d70f6b2f1259e1b016b57": "e218d2a21e5f65c40e95af9dd270c096",
".git/objects/fc/d95c457be5d0fd53137c8036e36039e03e2825": "68e979b6d36bb68fee57c771d1d89014",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/pack/pack-c5a902aa4d19c590099fa86cb423d86d986d94f0.idx": "3610bde3fca76507afee1f996d3926bd",
".git/objects/pack/pack-c5a902aa4d19c590099fa86cb423d86d986d94f0.pack": "2e083c47e3038c1ed357bedec57db009",
".git/objects/pack/pack-c5a902aa4d19c590099fa86cb423d86d986d94f0.rev": "ae88215b675b2bf903497d781fa48464",
".git/packed-refs": "3194bde8b0a40a5873b4646153c82e18",
".git/refs/heads/master": "4322fee8824e741029916d4bf46a15c0",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "4322fee8824e741029916d4bf46a15c0",
".vscode/settings.json": "8cd5bee24dab326183e97ca493965dce",
"assets/AssetManifest.bin": "0814d54313372bb9bfd79c19bc672095",
"assets/AssetManifest.bin.json": "41197c2f6862999088edfc1b9af170f0",
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
"assets/fonts/MaterialIcons-Regular.otf": "ce29c4d907a6a8947387adc0b1644721",
"assets/NOTICES": "35e44a8c5f5b12072e69f16fe32b4e49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "905111d0393ccb08912fde36f7adbee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "58c8ffe8c4cadad37fd87fb7b47c6d56",
"/": "58c8ffe8c4cadad37fd87fb7b47c6d56",
"main.dart.js": "5f5390bbfd56dfdc71e5c9d0650dfe2b",
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
