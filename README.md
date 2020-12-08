[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/eritislami/evobot)

# 🤖 Android Discord (Discord Music Bot)
> AD is a Discord Music Bot built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)

## Installation

1. How to obtain a Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**  
2.1 **(Optional)** Soundcloud Client ID - SoundCloud is no more providing APIs so no need of api.**
3. Node.js v12.0.0 or newer

## 🚀 Getting Started

Heroku provides 1 month of free dyno hours.So we dont recommend you to deploy it to Heroku as it can make your bot offline after 1 month.
You can use our Discord Pinger which will ping your Project every 5 min.
[Head over to #ping your project in Android Discord](https://discord.gg/mspMU79cGa)

```
git clone https://github.com/gtagamermods/admusicbot.git
cd admusicbot
npm install
```

After installation finishes you can use `node index.js` to start the bot.

## ⚙️ Making Files

Copy or Rename `config.json.example` to `config.json` and fill out the values:

⚠️ **Note: Never commit or share your token or api keys publicly or in unauthorised sites or use .gitignore to hide them** ⚠️

```json
{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "SOUNDCLOUD_CLIENT_ID": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "ad!",
  "PRUNING": false,
  "STAY_TIME": 30,
  "DEFAULT_VOLUME": 100
}
```

## 📝 Features & Commands

> Note: The default prefix is 'ad!'

* 🎶 Play music from YouTube via url

`ad!play https://www.youtube.com/watch?v=GLvohMXgcBo`

* 🔎 Play music from YouTube via search query

`ad!play under the bridge red hot chili peppers`

* 🔎 Search and select music to play

`ad!search Pearl Jam`

Reply with song number or numbers seperated by comma that you wish to play

Examples: `1` or `1,2,3`

* 📃 Play youtube playlists via url

`ad!playlist https://www.youtube.com/watch?v=YlUKcNNmywk&list=PL5RNCwK3GIO13SR_o57bGJCEmqFAwq82c`

* 🔎 Play youtube playlists via search query

`ad!playlist linkin park meteora`
* Now Playing (ad!np)
* Queue system (ad!queue, ad!q)
* Loop / Repeat (ad!loop)
* Shuffle (ad!shuffle)
* Volume control (ad!volume, ad!v)
* Lyrics (ad!lyrics, ad!ly)
* Pause (ad!pause)
* Resume (ad!resume, ad!r)
* Skip (ad!skip, ad!s)
* Skip to song # in queue (ad!skipto, ad!st)
* Remove song # from queue (ad!remove, ad!rm)
* Toggle pruning of bot messages (ad!pruning)
* Help (ad!help, ad!h)
* Command Handler from [discordjs.guide](https://discordjs.guide/)
* Controls your Discord Bot via Reactions
![reactions](https://cdn.discordapp.com/attachments/785811074603024386/785897940341489704/IMG_20201208_212707.jpg)
