# rag-document-ai Backend Structure

## Directory Structure

```
rag-document-ai/
├── backend/
│   ├── controllers/
│   │   └── documentController.js
│   ├── models/
│   │   └── documentModel.js
│   ├── routes/
│   │   └── documentRoutes.js
│   ├── services/
│   │   └── documentService.js
│   ├── utils/
│   │   └── logger.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── config/
│   │   └── config.js
│   └── server.js
└── package.json (and other configuration files)
```

## Description
- **controllers/**: Contains the logic for processing requests.
- **models/**: Defines the data models.
- **routes/**: Contains the route definitions.
- **services/**: Logic for document processing.
- **utils/**: Utility functions like logging.
- **middlewares/**: Custom middlewares, like error handling.
- **config/**: Configuration settings for the environment.
- **server.js**: Entry point of the application.
