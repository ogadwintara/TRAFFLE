import { PublicKey } from '@solana/web3.js';
import { RaffleMetaData } from '../lib/types';
import { TESTING } from './misc';

const testWhitelist = new Map<string, RaffleMetaData>([
// ['DaCbuiX3JFurJ5ZvvT4v4XhMapNJH2bgAc2bdXrBKH8G', { name: 'TheSuperSOL #14' }],
// ['BqtSZWca7bCz1hPSnf2AV6gepaGYbpUGW1tAMCfweEeF', { name: 'TheSuperSOL #1' }],
// ['SCVbXpQZGPevST9QYi9UoeNhuDNBNp2D3VXbtMMF7H3', { name: 'TheSuperSOL #17' }],
// ['8pw3gjNJNc6fJAGwUeLY8ktmEp8A2cJy4hHVYUnSPEgD', { name: 'The 97 Universe #2' }],
// ['BUZwRhhREXFsA3fysmPhTimPBtViQ5mF9ZUHsUndmtH3', { name: 'The 97 Universe #91' }],
// ['dZ1V9awzQNVRAxDURkivGX98D49nnoV3BcC16aiRCHV', { name: 'TheSuperSOL Token' }],
// ['DuXQXfkASwRTXRRsspRnQSyBBj1zdRiErUwh7aM4rJKY', { name: 'TheSuperSOL Token #2' }],
// ['Fbi7Xnve6wWkey244pVTkUZess6Wq3YoJFXHMPb89tCM', { name: '$1000 TSOS' }],
// ['D75CkLPGdmyCmqi7isBPpQ4E2HExEfZGsjHar8MdjMSX', { name: 'TheSuperSOL TICKET' }],
// ['G8MYUG2VDnuJKHu1icVjHWcoNDMLpACdjCu4uveyAFw7', { name: ' Reveal TheSuperSOL 3 NFT ' }],
  // ['3kTRXdm2xKejFkNfKxw88GV2cGZaASfkjysJ48fwNsYJ', { name: 'SOL Raffle' }],
  // ['HhppMJ3x9cdNnXPZKJTR8zCzWEmNx5RGLRgx94nt8AKQ', { name: 'SOL Raffle 2' }],
  // ['5Po1nyZ9UAQzjS2KdV8b6Lwk3y9hwxrL1po2dvfn6dr9', { name: 'MEME Raffle' }],
 [
  'G8MYUG2VDnuJKHu1icVjHWcoNDMLpACdjCu4uveyAFw7',
   {
     name: 'Reveal TheSuperSOL 3 NFT',
     overviewImageUri: '/resources/001-mainnet-launch.gif',
     alternatePurchaseMints: [
       new PublicKey('So11111111111111111111111111111111111111112'),
     ],
   },
 ],
]);

const prodWhitelist = new Map<string, RaffleMetaData>([
  [
    'DaCbuiX3JFurJ5ZvvT4v4XhMapNJH2bgAc2bdXrBKH8G',
    {
      name: 'TEST raffle',
      overviewImageUri: '/resources/quack.png',
    },
  ],
  [
    'BqtSZWca7bCz1hPSnf2AV6gepaGYbpUGW1tAMCfweEeF',
    {
      name: 'SOL Raffle',
      overviewImageUri: '/resources/stoned.png',
    },
  ],
  [
    'SCVbXpQZGPevST9QYi9UoeNhuDNBNp2D3VXbtMMF7H3',
    {
      name: 'SOL Raffle',
      overviewImageUri: '/resources/stoned.png',
    },
  ],
  [
    '8pw3gjNJNc6fJAGwUeLY8ktmEp8A2cJy4hHVYUnSPEgD',
    {
      name: 'SOL Raffle',
//      overviewImageUri: '/resources/stoned.png',
    },
  ],
]);

export const RAFFLES_WHITELIST = TESTING ? testWhitelist : prodWhitelist;
