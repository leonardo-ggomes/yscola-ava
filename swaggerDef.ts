export const options = {
  openapi: "3.0.0",
  info: {
    title: "API Yscola",
    version: "1.0.0",
  },
  apis: ["./dist/src/infrastructure/controllers/*.js"],
  paths: {
    "/": {
      get: {
        summary: "Retorna uma lista de estudantes",
        description: "Os estudantes são os discentes",
        responses: {
          "200": {
            description: "Um array json de estudantes",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
