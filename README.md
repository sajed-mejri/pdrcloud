# pdrcloud

# Project Overview

Hey there! 👋 This document is your go-to guide for the awesome project we've been working on. Let's dive right in!

## Introduction
So, what's this project all about? Well, we've built a slick task management system where you can add, delete, update task statuses, and view them. Plus, there's a cool filtering feature on the homepage to sort tasks by status. We've used Vue 3 with TypeScript, Pinia, and Bootstrap-vue-next to make it all happen. Oh, and we've sprinkled in some i18n magic for multiple language support.

## Features Implemented
1. **CRUD Operations:**
   - You can add task, delete task, view task list and one task and update task status.
   - Each task has its own page for your viewing pleasure.

2. **Filtering:**
   - Check out the homepage – we've added a nifty filter to sort tasks by status.

3. **Localization:**
   - Made the app multilingual using the i18n library.

4. **UI and Responsive Design:**
   - Used Bootstrap-vue-next to make things look good and work smoothly.
   - Okay, we admit, there's room for even more UI magic, but we've got the basics covered.

5. **Full Stack Fun:**
   - This is a Full Stack marvel! We've got Laravel on the backend, Jetstream, and other goodies.

6. **Code Quality:**
   - We care about code quality, so we've brought in ESLint to keep things tidy.
   - Also, Vue Prettier is on board to maintain that consistent code format.
   - Used storage for user, task, status and authentication.

7. **Version Control:**
   - Kept things organized with clear and concise Git messages. It's all about that version control love!

## Areas for Improvement
- We had to rush a bit, so the UI could use some more love. Future versions, watch out for even cooler designs!
- Yeah, there are a couple of bugs on the logout, login, and register pages. Bootstrap fields are playing hide and seek. We'll fix that soon!

## Project Setup

### Laravel Backend
1. **XAMPP Installation:**
   - Make sure you've got XAMPP installed..

2. **Run XAMPP Server:**
   - Fire up that XAMPP server by following the steps after.

3. **Laravel Setup:**
   - Head over to the `api` directory and follow the steps to set up Laravel, run migrations, and seed the database.

   cd api

   php artisan migrate --seed

   php artisan serve


4. **Database Configuration:**
   - Create a database named `pdrcloud` on localhost:80.
   - Don't forget to tweak the `.env` file in the `api` directory to connect to your database.

5. **Run Migrations:**
   This sets up the database tables.
   ```
   cd api
   ```
   ```
   php artisan migrate --seed
   ```

   ```
   php artisan serve
   ```


## Project setup
### Vue 3 Frontend
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# pdrcloud

