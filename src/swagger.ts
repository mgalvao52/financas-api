import { Express } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

export function setupSwagger(app:Express){
    const options: swaggerJSDoc.Options = {
        definition:{
            openapi: "3.0.0",
            info:{
                title:"API de Finanças Pessoais",
                version:"1.0.0",
                description:"Documentação da API de finanças pessoais"
            },
            servers:[{url:"http://localhost:5000"}],
            components:{
                securitySchemes:{
                    bearerAuth:{
                        type:"http",
                        scheme:"bearer",
                        bearerFormat:"JWT"
                    }
                }
            },
            security:[
                {
                    bearerAuth: []
                }
            ]
        },
        apis:["./src/routes/*.ts","./src/controllers/*.ts"]
    }
    const swaggerSpec = swaggerJSDoc(options);
    app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
}
