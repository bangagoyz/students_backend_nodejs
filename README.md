# 📚 Students Backend API

Backend REST API untuk mengelola data students (CRUD + Search) menggunakan Node.js dan Express.js.

## 🚀 Tech Stack

1.Node.js
2.Express.js
3.PostgreSQL
4.Sequelize
5.Swagger
6.dotenv
7.axios

##📦 Installation
Clone repository:
https://github.com/bangagoyz/students_backend_nodejs.git

```bash
npm install
```

## ⚙️ Create NEW DB and add it on Environment Variables

create new file named .env and add these codes
```.env
PORT=3000 (or your preferred port)

DB_HOST=localhost
DB_PORT=(UR DB PORT)
DB_NAME=(UR DB NAME)
DB_USER=(UR DB USERNAME)
DB_PASS=(UR DB PASSWORD)

JWT_SECRET=(UR JWT SECRET)
```
## ▶️ Running the Application

run with this command :
```bash
npx nodemon server.js
```
server will run on your choosen port, i choose 3000
```
http://localhost:3000
```

## 📖 API Documentation
API Documentation using swagger available.
```
http://localhost:3000/api/docs
```

## 🛠️ API Endpoints
all routes is protected by jwt, to access all endpoints, please do
```
create new user > login and copy token > copy token to authorize button for swagger, or input the token on authorization token field with bearer token auth type
```

| Method | Endpoint | Description |
|--------|----------|------------|
| GET    | /api/users | Get all users |
| POST    | /api/users | create new user |
| post | /api/auth/login | User Login |
| GET  | /api/students?name={name} | find student by name |
| GET  | /api/students?nim={nim} | find student by nim |
| GET  | /api/students?ymd={ymd} | find student by ymd |

