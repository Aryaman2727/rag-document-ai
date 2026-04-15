# rag-document-ai
Full-stack AI Document Intelligence Platform using RAG architecture. Supports document upload, processing, semantic retrieval, and context-aware chat with strict user data isolation.
🔗 Live Demo
https://rag-document-ai-11tk.onrender.com
It allows users to:
	•	📄 Upload documents (PDF)
	•	🔍 Process and extract content
	•	💬 Ask questions based on uploaded documents
	•	🤖 Retrieve relevant answers from document context

  
🧠 Key Features
	•	📤 Document Upload (PDF support)
	•	📑 Text extraction using pdf-parse
	•	🔎 Keyword-based retrieval (RAG logic)
	•	💬 Query-based response system
	•	⚡ Fast backend using Node.js & Express
	•	🗄 MongoDB Atlas for storage
	•	☁️ Deployed on Render

 Tech Stack
 
Backend:
	•	Node.js
	•	Express.js
	•	MongoDB Atlas
	•	Mongoose
	•	Multer (file upload)
	•	pdf-parse (PDF processing)

Deployment:
	•	Render (Backend Hosting)
	•	GitHub (Code Hosting)

⚙️ System Architecture

User → Upload PDF → Backend (Express)
                      ↓
               Extract Text (pdf-parse)
                      ↓
               Store in Memory/DB
                      ↓
User Query → Retrieve Matching Content
                      ↓
                Return Answer

                
🔄 Processing Flow
	1.	User uploads a PDF on postman
	2.	Server extracts text from document
	3.	Text is stored and indexed
	4.	User asks a question
	5.	System searches relevant content
	6.	Returns context-based answer

              
│PROJECT STRUCTURE

├── rag-backend/
│   ├── routes/
│   │   ├── upload.js
│   │   ├── query.js
│   │   └── auth.js
│   │
│   ├── utils/
│   │   └── ragPipeline.js
│   │
│   ├── uploads/
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── README.md
└── package.json

🚀 Future Improvements
	•	Add frontend (React UI)
	•	Use vector database (Pinecone / FAISS)
	•	Implement embeddings (OpenAI / HuggingFace)
	•	Multi-document support
	•	Better ranking algorithms


👨‍💻 Author
Aryaman Chaudhary
AI/ML Engineering Student
