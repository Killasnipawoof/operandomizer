# Operandomizer
A Discord bot to randomly select an operator from "Tom Clancy's Rainbow Six: Siege".

## Setup
To use this bot, you will need to create a file `auth.json` which contains the following:

```json
{
    "token" : "your bot auth token",
    "ownerID" : "your user ID token"
}
```

Certain commands are restricted (e.g., `prefix`, which allows a user to change the command prefix) to only the user with the user ID matching the contents of `auth.userID`.

Additionally, you must install dependencies with `npm install`.

## Commands
The following is a table of commands and help text.
Note that commands that take `ctus` (Optional) as an argument can be given `default` as a CTU, which specifies all of the default CTUs.

| Command | Arguments | Text |
| ------- |:---------:| ---- |
| `ping`  | N/A       | Reply in the same channel with `pong!`
| `prefix`| `newPrefix` | Change the command prefix to match `newPrefix`
| `atk`   | `ctus` (Optional) | Reply in the same channel with the name of a random Attack operator selected from the given CTUs (or from all CTUs if none are specified)
| `def`   | `ctus` (Optional) | Reply in the same channel with the name of a random Defense operator selected from the given CTUs (or from all CTUs if none are specified)

## Copyright Information
Tom Clancy’s, Rainbow Six, the Soldier Icon, Uplay, the Uplay logo, Ubi.com, Ubisoft, and the Ubisoft logo are trademarks of Ubisoft Entertainment in the US and/or other countries.
