# Notion Clone

A full-stack Notion-like application built with modern web technologies. This project implements collaborative document editing, page management, block-based content creation, and real-time collaboration features similar to Notion.

## 🏗️ Architecture

This is a monorepo containing two main packages:

- **Backend** (`packages/backend/`): NestJS API server with PostgreSQL database
- **Frontend** (`packages/frontend/`): Next.js web application

### Tech Stack

#### Backend
- **Framework**: NestJS (Node.js)
- **Database**: PostgreSQL with TypeORM
- **Authentication**: JWT with Passport
- **Validation**: class-validator and class-transformer
- **Testing**: Jest
- **Real-time**: WebSocket + Redis Pub/Sub
- **Package Manager**: pnpm

#### Frontend
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## 📁 Project Structure

```
notion-clone/
├── packages/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── config/
│   │   │   ├── modules/
│   │   │   └── main.ts
│   │   ├── test/
│   │   ├── package.json
│   │   └── README.md
│   └── frontend/
│       ├── src/
│       │   ├── app/
│       │   ├── components/
│       │   └── lib/
│       ├── public/
│       ├── package.json
│       └── README.md
├── docker-compose.yml
├── package.json
├── planning-doc.md
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- pnpm (for backend)
- npm (for frontend)
- PostgreSQL (v12 or higher)
- Redis (optional, for real-time features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd notion-clone
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up the database**
   ```bash
   # Make sure PostgreSQL is running
   # Create a database named 'notion_clone'
   createdb notion_clone
   ```

4. **Configure environment variables**
   ```bash
   # Backend environment setup
   cp packages/backend/.env.example packages/backend/.env
   # Edit packages/backend/.env with your database credentials
   ```

5. **Run database migrations**
   ```bash
   cd packages/backend
   npm run migration:run
   ```

### Development

**Start both frontend and backend in development mode:**
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:4000` (default, configurable via PORT env var)
- Frontend application on `http://localhost:3000`

**Individual commands:**

```bash
# Start only backend
npm run start:dev --workspace backend

# Start only frontend
npm run dev --workspace frontend

# Build for production
npm run build
```

### Testing

```bash
# Backend tests
cd packages/backend
npm run test

# Backend e2e tests
npm run test:e2e

# Frontend tests (when implemented)
cd packages/frontend
npm run test
```

## 🔧 Development Scripts

- `npm run dev` - Start both services in development mode
- `npm run install:all` - Install dependencies for all workspaces
- `npm run build` - Build both services for production

## 📚 Key Features (Planned)

### Phase 1: Foundation ✅
- Database setup with TypeORM
- Core entities (User, Workspace, Page, Block)
- JWT authentication
- Basic CRUD operations

### Phase 2: Core Features 🔄
- User management and profiles
- Workspace management with member roles
- Page hierarchy and organization
- Block system with multiple content types

### Phase 3: Advanced Features 📋
- Database/table functionality
- Real-time collaboration with WebSockets
- File and media handling
- Full-text search

### Phase 4: Production Ready 🚀
- API documentation with Swagger
- Rate limiting and security
- Docker containerization
- Monitoring and logging

## 🗄️ Database Schema

The application uses PostgreSQL with the following main entities:

- **User**: Authentication and profile information
- **Workspace**: Collaborative spaces owned by users
- **WorkspaceMember**: User roles within workspaces
- **Page**: Hierarchical document structure
- **Block**: Content blocks within pages
- **Database**: Custom tables with flexible schemas
- **DatabaseItem**: Records within databases

## 🔐 Authentication

- JWT-based authentication with access and refresh tokens
- Role-based access control (RBAC)
- Password hashing with bcrypt
- Email verification (planned)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and add tests
4. Run tests: `npm test`
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: `git push origin feature/your-feature`
7. Submit a pull request

## 📄 Documentation

- [Planning Document](planning-doc.md) - Detailed project roadmap and architecture
- [Backend README](packages/backend/README.md) - Backend-specific documentation
- [Frontend README](packages/frontend/README.md) - Frontend-specific documentation

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋 Support

For questions and support, please open an issue on GitHub.

---

**Note**: This project is currently in active development. Features and API may change before the first stable release.