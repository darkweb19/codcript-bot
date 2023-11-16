import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
	.setName("babu")
	.setDescription("Humble bot");

export async function execute(interaction) {
	await interaction.reply("Hello babu , How you doing?");
}
