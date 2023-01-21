
# Strapi & NextJS Auth


![Strapi & Next JS Auth](https://lara.dofer.in/strapi-nextjs-auth-min.png)


## Project Details

The main purpose of creating this repo is to have a quick start user authentication with Strapi & NextJS. After successfull login we are not verifying the JWT using the jwt_secret using "jsonwebtoken". We have the jwt_secret at the .env (Backend) and .evn.local (Frontend) file. Please contribute to the development.

Currently, We have the following functionalities.


|  Registration        | Login   | Re-direct | Logout | Security  | JWT Vefiry | JWT Header                                               |
| ----------------- | ---------|----------------------|---------|-------|-----|-------------- |
| ✔️ |  ✔️ | ✔️ | ✔️ | ❌ | ❌ |  ❌ |


## Installation NextJS

Open the Frontend Folder & Run The Command.

```bash
  npm install
  npm run dev
```
It will install the NextJS 13.1.2


## Installation Strapi

Open the Backend Folder & Run The Command.

```bash
  npm install
  npm run develop
```
It will install the Strapi 4.5.6

## Admin Details

|  STRAPI ADMIN         | STRAPI PASSWROD   | LINK                                                            |
| ----------------- | -------------------------------|----------------------------------- |
| admin@admin.com |  Admin@123 | http://localhost:1337/admin


## User Details

|  NEXTJS User Email        | NEXTJS User Password  | LINK                                                      |
| ----------------- | -----------------|------------------------------------------------- |
| user@user.com |  User@123 | http://localhost:3000/login



## Tech Stack

**Client:** NextJS, Strapi

**Server:** Node, sqlite


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## License

[MIT](https://choosealicense.com/licenses/mit/)




