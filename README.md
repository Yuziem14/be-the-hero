![Be The Hero Icon](./mobile/assets/icon.png)

# Be The Hero [Omnistack Week 11]

> This application was developed in the 11º Omnistack Week accomplished by Rocketseat 🚀
> ![Rocketseat](https://rocketseat.com.br/static/og.png)

## About this application ℹ️

> The main purpose of this application is to help Non-Governmental Organizations by registering new cases and problems that arise, allowing other users to contact them and help them solve these problems.

## Setup ✔️

### **Back-end** [Node.js] 💻

Powered by [Express.js](https://expressjs.com/pt-br/)

Go to the backend folder:

```
1. cd backend
```

Run the following commands:

- If you are using **npm**

```
2. npm i
```

- If you are using **yarn**

```
2. yarn
```

Run the database migrations:

```npx
3. npx knex migrate:latest
```

Start the server:

```
4. npm start or yarn start

```

#### Tests

Tests build with [Jest](http://jestjs.io/)

To run tests, you can use:

```
npm run test
```

or

```
yarn test
```

### **Front-end** [React] 💻

Powered by [React.js](https://reactjs.org)

You need to start the backend/API before the next steps

Go to the frontend folder:

```
1. cd frontend
```

Run the following commands:

```
cp .env.example .env
```

Config the .env file with your API URL (IP:PORT)

- If you are using **npm**

```
2. npm i
3. npm start
```

- If you are using **yarn**

```
2. yarn
3. yarn start
```

### **Mobile App** [React Native] 📱

Powered by [React Native](https://reactnative.dev/) & [Expo](https://expo.io/)

You need to start the backend/API before the next steps

Go to the mobile folder:

```
1. cd mobile
```

Run the following commands:

```
2. cp .env.example .env
```

Config the .env file with your API URL (IP:PORT)
If you're running on your physical device, you can't use your localhost or 127.0.0.1 address

- If you are using **npm**

```
3. npm i
```

- If you are using **yarn**

```
3. yarn
```

- Start the project with expo

```
4. expo start
```

## Developers 🤖

1. [Yuri Ziemba](https://github.com/Yuziem14/)

## About Rocketseat 🚀

[Rocketseat Official Site](https://rocketseat.com.br/)

You can follow Rocketseat on:

- [Instagram](https://www.instagram.com/rocketseat_oficial)
- [Twitter](https://twitter.com/rocketseat)
- [Youtube](https://www.youtube.com/rocketseat)
