## Local Dev Setup

Create `.env` as copy of `.env.sample`

```
cp .env.sample .env
```

Install dependencies

```
npm install && cd client && npm install && cd ..
```

Start mongodb

```
docker-compose up
```

Seed local db with some gifters

```
node bin/generateMatches.js
```

Start server and client

```
npm run dev
```

Manage local mongo using url `http://localhost:8081/`
