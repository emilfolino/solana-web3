import "dotenv/config";

import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";

const keypair = getKeypairFromEnvironment("SECRET_KEY");

const connection = new Connection("https://api.devnet.solana.com", "confirmed");
const address = new PublicKey(keypair.publicKey.toBase58());
const balance = await connection.getBalance(address);
const balanceInSol = balance / LAMPORTS_PER_SOL;

console.log(`The balance of the account at ${address} is ${balanceInSol} SOL`);

console.log(`✅ Finished!`)
