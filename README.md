# Operandomizer
A Discord bot to randomly select an operator from "Tom Clancy's Rainbow Six: Siege"

This bot is based off of the material covered in https://anidiotsguide_old.gitbooks.io/discord-js-bot-guide

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
