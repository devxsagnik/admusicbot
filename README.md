[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/eritislami/evobot)

# 🤖 Android Discord (Discord Music Bot)
> AD is a Discord Music Bot built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)

## Installation

1. How to obtain a Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**  
3. SoundCloud is no more providing APIs so no need of api.**
4. Node.js v12.0.0 or newer

## 🏁 Starting

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

🚨🚨 **Commiting your token to be accessed by others or making it public is strictly prohibited.So, dont share your token in any cost or use .gitignore to hide secrets** 🚨🚨

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

* 🎶 Using YouTube Url

`ad!play https://www.youtube.com/c/ANDROIDDISCORD`

* 🔎 Playing music via Name

`ad!play Let me love you`

* 🔎 Search and play

`ad!search NCS Astronomia`

Reply with song number or numbers seperated by comma that you wish to play

Examples: `1` or `1,2,3`

* 📃 Play a playlist directly from youtube to Discord

`ad!playlist https://www.youtube.com/playlist?list=PLeiP6sSl8XyF7qcJ7WR6FjkpKtNBtzkqe`
![playlist](https://cdn.discordapp.com/attachments/785811074603024386/786053415129055232/IMG_20201209_074321.jpg)

* 🔎 Play youtube playlists via search query

`ad!playlist NCS Releases`
![search](https://cdn.discordapp.com/attachments/785811074603024386/786054390053339146/IMG_20201209_074924.jpg)

**Commands of Our Bot**

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
