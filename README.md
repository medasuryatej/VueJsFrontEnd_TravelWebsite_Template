# Infinity Travel

The project is developed in Vue 3, options API, SCSS. <br/>
The API requests are authored using AXIOS.

## Backend setup

```
Backend in Java (servlets) is available here: https://github.com/medasuryatej/JavaBackendServer_RESTAPI_Template
```

## Project setup

```
npm install
```

### Things to correct
```
1. Have a backend server setup
2. Have a fontawesome account and provide the fontawesome.js url in public/index.html
3. For email support to work, one must register with a SMTP email server
4. For login/registration to work, please setup a firebase account and use the firebase config at src/firebase/firebaseinit.js
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Pending tasks

1. Disable previous dates while booking
2. Isolate admin & discount pages from everyone else except admin
3. Save history must be per user and not common across. (this is mostly backend update)
4. Create a confirmation page after booking.
5. Deploy frontend and backend in a persistent server

## References

This project is inspired from tutorials by Traversy Media on YouTube (https://www.youtube.com/watch?v=ISv22NNL-aE&t=684s)
