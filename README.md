# Frederik Kohler Strapi Backend 

### Deploymend
- config
- database
- public
- src
- types
- .env (or custom environment variables)
- favicon.png
- package.json
- package-lock.json
- server.js
--> Run `$ npm install on Plesk`
--> Run `$ npm run build`


### Add Custom environment variables
- HOST: `0.0.0.0`
- PORT: `1337`
- APP_KEYS: `token`
- API_TOKEN_SALT: `token`
- ADMIN_JWT_SECRET: `token`
- TRANSFER_TOKEN_SALT: `token`
- DATABASE_CLIENT: `mysql`
- DATABASE_HOST: `127.0.0.1`
- DATABASE_PORT: `3306`
- DATABASE_NAME: `name`
- DATABASE_USERNAME: `username`
- DATABASE_PASSWORD: `password`
- DATABASE_SSL: `false`
- JWT_SECRET: `token`
- EMAIL_PROVIDER: `nodemailer`
- EMAIL_SMTP_HOST: `smtp.domain.de`
- EMAIL_SMTP_PORT: `465`
- EMAIL_SMTP_USER: `noprely@domain.de`
- EMAIL_SMTP_PASS: `noReply@Fr3d3rik@Kohler`
- EMAIL_ADDRESS_FROM: `noprely@domain.de`
- EMAIL_ADDRESS_REPLY: `info@domain.de`
- EMAIL_ADDRESS_TO: `info@domain.de`

##New Release:
#### Deploy first to the stage and after a successful test to the live.
1. Upload a new folder or replace it with the new content types `src` `types`
2. when new plugin has been installed `$ npm install` and `$ npm run build`.
2. If needed, run `$ npm install` and `$ npm run build`. Never delete or change the `public` folder!
