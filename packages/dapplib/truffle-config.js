require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad idea nature swift sing'; 
let testAccounts = [
"0xf37f1f8ab4e401b28fbd15c84e204922ecd57b61534bf9e7023ff69d9e45b65a",
"0x1de0af7c58e026801aecd779df31348b3530e92b172b86beea38338c79bd2790",
"0xe9131b37a85969908e273b1a14c8733d6e79b71aaa0fad4b8ffd3fb89a11789c",
"0xed44edbb7365e08db9a59b3af41f799da9a08b16dff3fe7f96aca40e1eb78e5f",
"0x992fc5a441de2b7da81b34b1f658feb991e45843932a31a88ef51c8b75415156",
"0xca58e4a99f832ee48f22141800f6d0f688253b420a906ef986c53b04e0826b8d",
"0x41c51bca4b2b685eaf492a1b8f02a74db3e7dcf2f158c642f343f858ef399337",
"0xdf261192d7123e02d08de17f32d16f5a95101d38f6ac899c4965d780fe4f2900",
"0x0a1e53d95727cecede2cae80d9b07b14e95a1c9656d76fee4109334a76f29980",
"0xcf7ea2e2227606911cadd6a375c11ae2aa5be0abda2fa9a88fe3de32314c0417"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


