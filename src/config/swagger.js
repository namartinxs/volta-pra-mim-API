import swaggerJSDoc from "swagger-jsdoc"

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "VoltaPraMim",
      version: "1.0.0",
      description: "Documentação VoltaPraMim",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local"
      }
    ]
  },
  components: {
    schemas: {
        User: {
        type: "object",
        required: ["name", "email", "status", "type"],
        properties: {
            _id: {
            type: "string",
            example: "64f123abc456def789"
            },
            name: {
            type: "string",
            example: "Maria Silva"
            },
            email: {
            type: "string",
            example: "maria@email.com"
            },
            status: {
            type: "string",
            enum: ["ativo", "inativo"],
            example: "ativo"
            },
            type: {
            type: "string",
            enum: ["student", "administrator"],
            example: "student"
            },
            administrator: {
            type: "object",
            properties: {
                role: {
                type: "string",
                example: "Coordenador"
                }
            }
            },
            student: {
            type: "object",
            properties: {
                course: {
                type: "string",
                example: "Análise e Desenvolvimento de Sistemas"
                }
            }
            },
            createdAt: {
            type: "string",
            format: "date-time"
            },
            updatedAt: {
            type: "string",
            format: "date-time"
            }
        }
        },

        Spot: {
        type: "object",
        required: ["local"],
        properties: {
            _id: {
            type: "string",
            example: "64fabc123456"
            },
            description: {
            type: "string",
            example: "Sala para reuniões"
            },
            local: {
            type: "string",
            example: "Bloco A, Sala 12"
            },
            createdAt: {
            type: "string",
            format: "date-time"
            },
            updatedAt: {
            type: "string",
            format: "date-time"
            }
        }
        },
        LostItem: {
      type: "object",
      required: ["itemName", "fileName", "dateFound"],
      properties: {
        _id: {
          type: "string",
          example: "64f12abc34de567f890"
        },
        itemName: {
          type: "string",
          example: "Carteira"
        },
        fileName: {
          type: "string",
          example: "carteira.jpg"
        },
        statusItem: {
          type: "string",
          enum: ["aguardando_reclamacao", "reclamado", "devolvido"],
          example: "aguardando_reclamacao"
        },
        description: {
          type: "string",
          example: "Carteira preta encontrada no corredor"
        },
        locationFound: {
          type: "string",
          example: "64f651abc789012def"
        },
        dateFound: {
          type: "string",
          format: "date-time",
          example: "2025-01-01T12:00:00Z"
        },
        foundBy: {
          type: "string",
          example: "64f998abc123456def"
        },
        receivedBy: {
          type: "string",
          example: "64f998abc123456def"
        },
        collectedBy: {
          type: "string",
          example: "64f998abc123456def"
        },
        dateColleted: {
          type: "string",
          format: "date-time",
          example: "2025-01-10T10:00:00Z"
        },
        createdAt: {
          type: "string",
          format: "date-time"
        },
        updatedAt: {
          type: "string",
          format: "date-time"
        }
      }
        },
        Claim: {
  type: "object",
  required: ["itemName", "fileName", "statusItem", "dateFound"],
  properties: {
    _id: {
      type: "string",
      example: "64fa12abc345de6789"
    },
    itemName: {
      type: "string",
      example: "Mochila preta"
    },
    fileName: {
      type: "string",
      example: "mochila.jpg"
    },
    statusItem: {
      type: "string",
      enum: ["aguardando_reclamacao", "reclamado", "devolvido"],
      example: "aguardando_reclamacao"
    },
    description: {
      type: "string",
      example: "Mochila encontrada no laboratório"
    },
    locationFound: {
      type: "string",
      example: "64fa12abc345de6789"
    },
    dateFound: {
      type: "string",
      format: "date-time",
      example: "2025-11-22T14:00:00Z"
    },
    foundBy: {
      type: "string",
      example: "64fa12abc000111222"
    },
    receivedBy: {
      type: "string",
      example: "64fa12abc333444555"
    },
    collectedBy: {
      type: "string",
      example: "64fa12abc666777888"
    },
    dateColleted: {
      type: "string",
      format: "date-time",
      example: "2025-11-25T10:00:00Z"
    },
    createdAt: {
      type: "string",
      format: "date-time"
    },
    updatedAt: {
      type: "string",
      format: "date-time"
    }
  }
}

  
  }
},

  apis: ["./src/routes/*.js"]

}

const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec
