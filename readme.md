# Pineapple Express

### What?
An express boilerplate for hipsters.

Inspired by the 2008 film about "herbs".

### Why?
Because why not? Boilerplates are awesomesauce.

### Features
* Development-ready (Nodemon for file watching and automatic server restarting, ESLint for linting)
* Batteries included. Just add water.

### Specs
Powered by Express 4 with following middlewares:
* **helmet** - to protect you from skids (web vulnerabilities via headers).
* **csurf** - to protect you from forgers (Google CSRF exploits). Off by default, turn on via _.env_ file.
* **cookie-parser** - cookies yay! Set secret via _.env_ file.
* **morgan** - tells you when there's a 504 or a 404. Format can be changed via _.env_ file.
* **body-parser** - of course we all want to read (request) body language.
* **compression** - makes things faster, I guess.

### Installation

1. Clone this repo.
2. Execute `npm i`.
4. Rename *.env.example* to *.env*.
3. Execute `npm start`.
5. Profit.
