# Operandomizer
A Discord bot to randomly select an operator from "Tom Clancy's Rainbow Six: Siege".

## Setup
To use this bot, you will need to create a file `config.json` which contains the following:

```json
{
    "token" : "your bot auth token",
    "ownerID" : "your user ID token",
    "prefix" : "command prefix (recommend '!')",
    "selection" : "operator selection message (e.g., 'I recommend you play')"
}
```

Certain commands are restricted (e.g., `prefix`, which allows a user to change the command prefix) to only the user with the user ID matching the contents of `config.ownerID`.

Additionally, you must install dependencies with `npm install`.

## Commands
The following is a table of commands and help text.
Note that commands that take `CTUs` (Optional) as an argument can be given `default` as a CTU, which specifies all of the default CTUs.

| Command | Arguments | Text |
| ------- |:---------:| ---- |
| `ping`  | N/A       | Reply in the same channel with `pong!`
| `prefix`| `newPrefix` | Change the command prefix to match `newPrefix`
| `atk`   | `CTUs` (Optional) | Reply in the same channel with the name of a random Attack operator selected from the given CTUs (or from all CTUs if none are specified)
| `def`   | `CTUs` (Optional) | Reply in the same channel with the name of a random Defense operator selected from the given CTUs (or from all CTUs if none are specified)

## CTUs
The following is a table of CTUs and the corresponding codes used in the `atk` and `def` commands.
Note that *Recruit* is considered to be part of the `other` CTU.

| CTU | Code |
| --- | ---- |
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
| CBRN | `cbrn`


## Copyright Information
Tom Clancy’s, Rainbow Six, the Soldier Icon, Uplay, the Uplay logo, Ubi.com, Ubisoft, and the Ubisoft logo are trademarks of Ubisoft Entertainment in the US and/or other countries.
