<p align="center"><a href="https://github.com/jebediah47/galactica-bot"><img src="https://share.creavite.co/Zw3YHPDfydz0BE8D.gif" height="165"></a></p>

<h1 align="center">galactica-bot</h1>

<p align="center">A open-source Discord bot built with TypeScript</p>

<p align="center">
  <a href="https://app.circleci.com/pipelines/github/jebediah47/galactica-bot/">
    <img src="https://circleci.com/gh/jebediah47/galactica-bot.svg?style=svg" alt="CircleCI Status"></img>
  </a>
  <a href="https://github.com/jebediah47/galactica-bot/actions/workflows/node.js.yml">
    <img src="https://github.com/jebediah47/galactica-bot/actions/workflows/node.js.yml/badge.svg" alt="CI Status"></img>
  </a>
  <a href="https://github.com/jebediah47/galactica-bot/actions/workflows/codeql.yml">
  <img src="https://github.com/jebediah47/galactica-bot/actions/workflows/codeql.yml/badge.svg" alt="CodeQL Status"></img>
  </a>
  <a href="https://www.codefactor.io/repository/github/jebediah47/galactica-bot">
    <img src="https://www.codefactor.io/repository/github/jebediah47/galactica-bot/badge/main" alt="CodeFactor"></img>
  </a> </br>
  <a href="https://github.com/jebediah47/galactica-bot/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/jebediah47/galactica-bot" alt="License"></img>
  </a>
  <a href="https://github.com/jebediah47/galactica-bot/blob/main/package.json">
    <img src="https://img.shields.io/github/package-json/v/jebediah47/galactica-bot?color=red" alt="GitHub package.json version"></img>
  </a>
  <a href="https://discord.gg/nQd5HeD2xz">
    <img alt="Discord" src="https://img.shields.io/discord/982186992194433054?color=%235865F2&label=Discord%20Server&logo=Discord&logoColor=white"></img>
  </a>
</p>

## 💭 What is Galactica?

[Galactica](https://galacticabot.vercel.app/) is a Discord bot built with TypeScript that can do various stuff using it's multiple commands!

## ⚡️ Fast Implementation

**Step 1**: Clone Galactica bot with git by running:

`
git clone https://github.com/jebediah47/galactica-bot
`

**Step 2**: Edit the `.env.example` file and change:

```python
### Galactica bot related vars ###
TOKEN="YOUR_BOT_TOKEN"
BOT_PRESENCE="YOUR_BOT_PRESENCE"
# Values: PLAYING, LISTENING, WATCHING, STREAMING, COMPETING
BOT_PRESENCE_TYPE="WATCHING"
SERVER_ENABLED=false
SERVER_PORT=3001

### Prisma related vars ###
DATABASE_URL="YOUR_DATABASE_URL"
```

💡 Quick tip: If you don't know how to configure galactica you can check it's documentation website [here](https://galacticabot.vercel.app/)

**Step 3**: Install all the required dependencies by running:

```css
npm install
# or
yarn
# or
pnpm install
```

**Step 4**: Running the bot:

```css
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 🎉 You're ready!

### Expected output:

`
We have logged in as [your_bot_name#discriminator]
`

If you got this output you are ready to go!

<sup>Christian Llupo and contributors © 2022</sup>
