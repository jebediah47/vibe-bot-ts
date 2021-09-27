import functions from "../../functions";
import { Command } from "../../interfaces";
import { MessageEmbed } from "discord.js";
import axios from "axios";

export const command: Command = {
  name: "crypto",
  aliases: ["crypto-price"],
  run: async (client, message, args) => {
    let token: string = args[0] || "usd";
    let irl_currency: string = args[1];

    const errEmbed = new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Notice!")
      .setDescription(
        "You need to add the full name of the cryptocurrency and your currency id e.x. \n" +
          `\`\`\`${client.config.PREFIX}price bitcoin usd\`\`\` \n` +
          "And here is a list of all the available cryptos/tokens and currency codes \n https://www.coingecko.com"
      );

    if (token === undefined) {
      return message.channel.send({ embeds: [errEmbed] });
    }

    try {
      token = encodeURIComponent(token).toLowerCase();
      irl_currency = encodeURIComponent(irl_currency).toLowerCase();
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${token}&vs_currencies=${irl_currency}&include_market_cap=true&include_24hr_change=true`
      );

      if (data[token][irl_currency] === undefined) {
        const embed = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle("We are sorry but...")
          .setDescription(
            "We couldn't find your currency code on the list here are the supported currencies by the \n [CoinGecko API](https://api.coingecko.com/api/v3/simple/supported_vs_currencies)"
          )
          .setTimestamp();
        return message.channel.send({ embeds: [embed] });
      }

      if (!data) {
        const embed2 = new MessageEmbed()
          .setColor("RANDOM")
          .setTitle("We are sorry but...")
          .setDescription(
            "We couldn't fetch the required data from the API, maybe try executing the command again!"
          )
          .setTimestamp();
        return message.channel.send({ embeds: [embed2] });
      }

      const regularToken = `${data[token][irl_currency]}`;
      const change = `${data[token][irl_currency + "_24h_change"]}`.substring(
        0,
        `${data[token][irl_currency + "_24h_change"]}`.length - 13
      );
      const embed3 = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(
          functions.capitalize(token) + " " + irl_currency.toUpperCase() + " price!"
        )
        .setDescription(
          `**Price:** \`${functions.commaFormatter(regularToken)}\` ` +
            irl_currency.toUpperCase() +
            `\n **(24hr) Change:** \`${change}%\` \n` +
            `*Powered by CoinGecko API*`
        )
        .setTimestamp();
      return message.channel.send({ embeds: [embed3] });
    } catch (err) {
      return message.channel.send({ embeds: [errEmbed] });
    }
  },
};
