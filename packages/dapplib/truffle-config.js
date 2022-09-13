require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind huge imitate private force seminar'; 
let testAccounts = [
"0xee31e1c4e701d7843006585aa01b7234a6d4ea7e4f37018057c1a6dc6386f8cc",
"0x09ba539e44e99f78217ce3f2b02cf5677c0b811284317f71e3f8f0fc81b5fe2d",
"0x48ed7581148478ca10236691426a507a7ed8ade83dbb56e55acd98e7f23f0902",
"0x2abf57c14e13e5ebfaa92356f8d8d847926320717c98115b8947eb0012d9ff5e",
"0x671460239cd2a25bd89d5778f25bdbb5e2703e50567d4c9388a5083e9f49773c",
"0x107fc7d5df886062f44239101886b1288a29fee26a2b7cff4a615feae7ac2704",
"0x91703a317e8b222f04fe21be3fd47a154615119597427b1ea09833b584ee7443",
"0xe89cf444fe453724dd7d71888c6829c7407955ebe3e21896b56bc34a668f98f7",
"0x54ef69da7bc3d868e5db315132271dcdc4fc2a8c769e02fbbac16cd70d2494de",
"0x0a31da04209440f275e15dfbe3f51e5de21e29f59118807886b9da70b14a43b2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

