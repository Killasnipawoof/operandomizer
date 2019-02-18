# Operandomizer
A Discord bot to randomly select an operator from "Tom Clancy's Rainbow Six:
  Siege".

## Adding this bot to your server
I have deployed this bot to a free-tier Heroku account.
To add this bot to your server, visit
[https://discordapp.com/oauth2/authorize?client_id=508023219941408779&scope=bot](https://discordapp.com/oauth2/authorize?client_id=508023219941408779&scope=bot).

Note that a free-tier Heroku account only receives 550 hours (approx. 21 days)
  of uptime per month.

## Using this bot
To get a random attacker from any CTU, say `!atk`.

To get a random attacker from only the default CTUs (SAS, FBI SWAT, GIGN, Spetsnaz, and GSG 9), say `!atk default`.

To get a random defender from either the Navy SEALs, BOPE, GIGN, or SAT, say `!def seals bope gign sat`

For additional CTU codes, please see [CTU codes](#ctu-codes)

## Forking this project
After cloning this repository (or a fork of it), to use this bot locally you
  will need to create `config.json` which must contain the following:

```json
{
    "token" : "your bot auth token",
    "ownerID" : "your user ID token",
    "prefix" : "command prefix (e.g., '!')",
    "selection" : "operator selection message (e.g., 'I recommend you play')"
}
```

See `sample-config.json` for an example.

Certain commands are restricted (e.g., `prefix`, which allows a user to change
  the command prefix) to only the user with the user ID matching the contents
  of `config.ownerID`.

Additionally, you must install dependencies with `npm install`.

The bot can then be started with `node bot.js`.

## Commands
The following is a table of commands and help text.
Note that commands that take CTU code(s) (Optional) as an argument can be given
  `default` as a CTU, which specifies all of the default CTUs (SAS, FBI SWAT, GIGN, Spetsnaz, GSG 9, and Recruit).

| Command | Arguments | Text |
| ------- |:---------:| ---- |
| `!atk`   | CTU code(s) (Optional) | Reply in the same channel with the name of a random Attack operator selected from the given CTUs (or from all CTUs if none are specified)
| `!def`   | CTU code(s) (Optional) | Reply in the same channel with the name of a random Defense operator selected from the given CTUs (or from all CTUs if none are specified)
| `!help` | N/A | Reply in a DM with some simple instructions and a link to this page
| `!prefix`| `newPrefix` | Change the command prefix to match `newPrefix`
| `!version` | N/A | Reply in the same channel with the bot's version number

## CTU Codes
The following is a table of CTUs and the corresponding codes used in the `atk` and `def` commands.
Note: I have added the recruit in as a seperate CTU, as if you just want to play recruit, you can randomize only for recruits

| CTU | Code |
| --- | ---- |
| Recruit | `rec`
| SAS | `sas`
| FBI SWAT | `fbi`
| GIGN | `gign`
| Spetsnaz | `spetsnaz`
| GSG 9 | `gsg9`
| JTF2 | `jtf2`
| Navy SEALs | `seals`
| BOPE | `bope`
| SAT | `sat`
| GEO | `geo`
| SDU | `sdu`
| GROM | `grom`
| 707th SMB | `smb`
| CBRN (ATK only)| `cbrn`
| GIS (DEF only)| `gis`
| GSUTR | `gsutr`
| GIGR | `gigr`
| SASR | `sasr`


## Copyright Information
Tom Clancy’s, Rainbow Six, the Soldier Icon, Uplay, the Uplay logo, Ubi.com, Ubisoft, and the Ubisoft
  logo are trademarks of Ubisoft Entertainment in the US and/or other countries.
