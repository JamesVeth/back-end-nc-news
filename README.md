# Back End NC News
## Author

**James Vethmony**  
GitHub: [@JamesVeth](https://github.com/JamesVeth)

## Environment Variables

This project requires two environment variable files in the root of the project in order to connect to the databases locally:

### 1. .env.development

Create a file called .env.development and add the following lines:

```
PGHOST=localhost
PGUSER=[YOUR PSQL USERNAME]
PGPASSWORD=[YOUR PSQL PW]
PGDATABASE=nc_news_dev
PGPORT=5432
```

This file is used when running the project with the development database.

### 2. .env.test

Create a file called .env.test and add the following lines:

```
PGHOST=localhost
PGUSER=[YOUR PSQL USERNAME]
PGPASSWORD=[YOUR PSQL PW]
PGDATABASE=nc_news_test
PGPORT=5432
```

This file is used when running tests with the test database.

> Important: These files are ignored by Git and should not be pushed to GitHub. Each developer needs to create them locally.
