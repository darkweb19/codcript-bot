import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
	.setName("hello")
	.setDescription("Greeting Bot");

export async function execute(interaction) {
	await interaction.reply("Hello World!!! Welcome to CodCript!!!!!");
}
