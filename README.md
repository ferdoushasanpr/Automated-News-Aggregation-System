# Full-Stack Automated News Aggregation System | High-Performance News Aggregator

**Full-Stack Automated News Aggregation System** is a full-stack news aggregation platform designed for speed, scalability, and efficiency. By decoupling the frontend from third-party API limits, Full-Stack Automated News Aggregation System provides a seamless user experience with automated background data ingestion and complex multi-filtering capabilities.

## 🚀 Core Features

- **Automated Ingestion Pipeline:** Uses `node-cron` to fetch and synchronize news data every 6 hours (or custom intervals).
- **Decoupled Architecture:** Frontend queries a local MongoDB instance rather than the external API, ensuring zero latency and protection against API rate limits.
- **High-Performance Filtering:** Server-side filtering using MongoDB `$in` and `$gte` operators for Categories, Languages, and Date Ranges.
- **Smart Pagination:** Limit-offset pagination to handle thousands of articles without performance degradation.
- **Responsive UI:** A modern, mobile-first interface built with React and Tailwind CSS.
- **Data Integrity:** Implements "Upsert" logic via Mongoose `bulkWrite` to prevent duplicate articles while keeping content updated.

---

## 🛠️ Technical Stack

**Frontend:**

- React.js
- Tailwind CSS (Utility-first styling)
- Axios (API Communication)
- React Router (Dynamic Article Routing)

**Backend:**

- Node.js & Express
- MongoDB & Mongoose (NoSQL Database)
- Node-Cron (Task Scheduling)

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/ferdoushasanpr/Automated-News-Aggregation-System.git
cd Automated-News-Aggregation-System

```

### 2. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd backend
npm install
npm start

```

Create a `.env` file in the root of the backend folder:

```env
PORT=3000
MONGODB_CONNECTION_STRING=your_mongodb_uri
NEWSDATA_API_KEY=your_api_key_here

```

Start the server:

```bash
npm start

```

### 3. Frontend Setup

Navigate to the client directory and install dependencies:

```bash
npm install

```

Start the development server:

```bash
npm run dev

```

---

## 🔌 API Endpoints

| Method | Endpoint        | Description                                                                                      |
| ------ | --------------- | ------------------------------------------------------------------------------------------------ |
| `GET`  | `/api/news`     | Retrieves paginated news with optional filters (`category`, `language`, `startDate`, `endDate`). |
| `GET`  | `/api/news/:id` | Retrieves full details for a specific article.                                                   |

---

## ⚙️ How the Cron Job Works

The server runs a background task using the following schedule:
`0 */6 * * *` (Every 6 hours).
It performs a "Sync" which:

1. Fetches the latest 50+ articles from NewsData.io.
2. Maps them into MongoDB operations.
3. Performs a `bulkWrite` with `upsert: true`, which inserts new articles and updates existing ones based on their unique `article_id`.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.
