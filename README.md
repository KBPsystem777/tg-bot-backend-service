# [devKBPsystembot](https://t.me/devKBPsystembot) with Express and grammY

This project demonstrates how to deploy a Telegram bot using Express and the grammY library. The bot interacts with users on Telegram, responding to commands and messages.

## Deployment

This service is deployed using Render.

## Features

- Responds to the `/start` command with a welcome message.
- Logs detailed information about the sender and their messages.
- Replies back the public user info of the sender
- Integrated with Express for handling HTTP requests.

## Prerequisites

- A Telegram bot with an API key.
- Node.js and npm installed locally.
- A Render account for deployment.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/KBPsystem777/tg-bot-backend-service

cd tg-bot-backend-service
```

```bash
# install the dependencies
yarn
```

### 2. Obtain the API keys from Telegrams' BotFather

Checkout https://core.telegram.org/bots#how-do-i-create-a-bot

Supply the api key on the `.env` file and perform steps below

```bash
# run the app...
yarn run build
yarn run start
```

Express app will run on http://localhost:1995
