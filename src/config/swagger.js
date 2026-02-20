const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Students Backend API",
      version: "1.0.0",
      description: "Take Home Test API - Student Search. plesase",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],

    tags: [
      { name: "Users", description: "User CRUD" },
      { name: "Auth", description: "User authentication" },
      { name: "Students", description: "Student Search" },
    ],

    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ["./src/modules/**/*.js"],
};

const specs = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = setupSwagger;
