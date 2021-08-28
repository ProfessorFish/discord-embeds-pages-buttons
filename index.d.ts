import { Client, Message, MessageEmbed } from "discord.js";

declare module "discord-embeds-pages-buttons" {
    export function pages(message: Message, pages: MessageEmbed[], timeout: number, MovingButtonSytle: 'PRIMARY' | 'SECONDARY' | 'SUCCESS' | 'DANGER' )
}