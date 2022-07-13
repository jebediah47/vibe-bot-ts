import { Event } from "../interfaces";
import { Guild } from "discord.js";

export const event: Event = {
  name: "guildCreate",
  run: async (client, guild: Guild) => {
    const data = await client.prisma.guildConfigs.findUnique({
      where: {
        guildID: `${guild.id}`,
      },
      select: {
        guildID: true,
      },
    });
    if (data) return;
    await client.prisma.guildConfigs.create({
      data: {
        guildID: `${guild.id}`,
        guildName: `${guild.name}`,
      },
    });
  },
};
