import * as dotenv from 'dotenv';
import { Client } from 'discord.js';

dotenv.config();
var client = new Client();

// load commands here

client.login(process.env.DISCORD_TOKEN);

