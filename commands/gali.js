import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
	.setName("gali")
	.setDescription("Xada Bot");

export async function execute(interaction) {
	await interaction.reply("Tero Bauuuu!!!! Jathaaaa...!!!!");
}
