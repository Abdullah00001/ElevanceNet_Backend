# ElevanceNet Backend

ElevanceNet is a distraction-free social platform tailored for developers, engineers, and tech enthusiasts who want a resourceful and informative feed focused only on tech-related content. Unlike general platforms like Facebook, Instagram, or X, which flood users with entertainment, reels, and memes, ElevanceNet ensures that users get only tech industry-related posts to enhance productivity and knowledge.

## 🚀 Tech Stack

- **TypeScript** – A strongly-typed superset of JavaScript that improves code quality and maintainability.
- **Node.js** – A runtime environment for executing JavaScript code on the server.
- **Express** – A web application framework for Node.js.
- **Mongoose** – ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Redis** – In-memory data structure store used as a database, cache, and message broker.
- **Docker** – Platform for containerizing applications for easy deployment.
- **CI/CD** – Continuous Integration and Continuous Deployment pipeline.
- **Winston** – A logging library for Node.js.
- **Morgan** – HTTP request logger middleware for Node.js.
- **JWT** – JSON Web Tokens for secure authentication.
- **Cloudinary** – Cloud-based image and video management service.
- **Swagger (OpenAPI)** – API documentation generation for easier consumption of backend services.

## 🧩 Features

- **Authentication** – Secure login and registration process using JWT.
- **User-Controlled Feed** – Users have control over the content that appears in their feed, tailored to their preferences.
- **Post Management** – CRUD functionality to create, update, delete, and view posts.
- **Profile Management** – Users can manage their profiles, update personal information, and preferences.
- **Interaction** – Users can interact with posts via likes, comments, and shares.
- **Report & Feedback** – Allows users to report content and provide feedback on the platform’s functionality.

## ⚙️ Installation & Setup

### Prerequisites

Ensure you have the following installed:

- Docker
- Node.js (v16.x or higher)
- MongoDB (for local development, or use a cloud service for production)

### Setup for Development

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/elevancenet-backend.git
   cd elevancenet-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy the `.env.example` to `.env` and fill in the necessary values:

   ```bash
   cp .env.example .env
   ```

4. Run the application in development mode:

   ```bash
   npm run dev
   ```

   The backend will be available at `http://localhost:3000`.

### Environment Variables

Make sure to set the following variables in your `.env` file:

```ini
# ===============================
#  General Configuration
# ===============================
NODE_ENV=development
PORT=3000

# ===============================
#  Mongodb Configuration
# ===============================
MONGODB_DEVELOPMENT_URI=mongodb://localhost:27017/development_db
MONGODB_PRODUCTION_URI=mongodb+srv://username:password@cluster.mongodb.net/production_db

# ===============================
#  Cloudinary Configuration
# ===============================
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET_KEY=your_api_secret_key

# ===============================
#  Redis Configuration
# ===============================
REDIS_DEVELOPMENT_URI=redis://localhost:6379
REDIS_PRODUCTION_URI=redis://your_redis_url
REDIS_PRODUCTION_TOKEN=your_redis_token

# ========================================
#  Authentication&Security Configuration
# ========================================
JWT_ACCESS_TOKEN_SECRET_KEY=your_access_token_secret_key
JWT_REFRESH_TOKEN_SECRET_KEY=your_refresh_token_secret_key
JWT_SALT_ROUND=10

# ===============================
# Email Configuration (SMTP)
# ===============================
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass

# ===============================
# CORS Configuration
# ===============================
CORS_ORIGIN_DEV=http://localhost:3000
CORS_ORIGIN_PROD=https://your_production_url
```

# Docker Setup

For running the app in production using Docker:

## Build the Docker image

```bash
docker build -t elevancenet-backend .
```

## Run the container

```bash
docker run -p 3000:3000 elevancenet-backend
```

The backend will be available at [http://localhost:3000](http://localhost:3000) (or the specified production domain).

## 📜 API Documentation

For detailed API documentation, visit the Swagger UI at:  
[https://elevancenet.vercel.app/api/v1/api-docs](https://elevancenet.vercel.app/api/v1/api-docs)

## 🚀 Deployment

The backend is hosted on Vercel for production. The CI/CD pipeline automatically pushes updates to Docker Hub.

## 🛠️ Contribution Guidelines

This project is currently not open for external contributions. However, feel free to check the code and suggest improvements via issues.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.

## 📞 Contact

For any issues or inquiries, feel free to reach out to us at:  
[support@elevancenet.com](mailto:support@elevancenet.com)

Your contributions are highly appreciated! 🚀
