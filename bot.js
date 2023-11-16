import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import * as hello from "./commands/slash.js";
import * as gali from "./commands/babu.js";

config();

const client = new Client({
	intents: [GatewayIntentBits.Guilds],
});

function readyDiscord() {
	console.log("Discord" + client.user.tag);
}
async function handleInteraction(interaction) {
	if (!interaction.isCommand()) return;
	if (interaction.commandName === "hello") {
		await hello.execute(interaction);
	}
	if (interaction.commandName === "babu") {
		await gali.execute(interaction);
	}
}

client.once(Events.ClientReady, readyDiscord);
client.login(process.env.TOKEN);
client.on(Events.InteractionCreate, handleInteraction);
