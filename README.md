## 📚 E-Book Portal Frontend

### 🚀 About the Project

The **E-Book Portal** is a full-stack project designed to provide users with an intuitive platform to browse, download, and manage eBooks. This **frontend** is built using **Next.js (App Router)** and styled with **Tailwind CSS** for a modern and responsive UI.

### 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB (🔗 [Backend Repo](#))
- **Deployment:** Vercel (planned)

### 📂 Project Structure

The project follows a clean and modular folder structure:

```
/src
│── app/
│   ├── (home)/
│   │   ├── components/
│   │   │   ├── Banner.jsx
│   │   │   ├── BookCard.jsx
│   │   │   ├── BookList.jsx
│   │   │   ├── Loading.jsx
│   │   ├── page.jsx
│   │── book/[bookId]/
│   │   ├── components/
│   │   │   ├── DownloadButton.jsx
│   │   ├── page.jsx
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│── public/
│── .env (environment variables)
│── tailwind.config.mjs
│── next.config.mjs
│── package.json
│── README.md
```

---

## 🛠 Installation & Setup

### 📌 Prerequisites

Make sure you have the following installed:

- **Node.js** (v18+)
- **npm** or **yarn**

### 📥 Clone the Repository

```bash
git clone https://github.com/iamabraryeasir/E-Book-Portal-Frontend.git
cd E-Book-Portal-Frontend
```

### 📦 Install Dependencies

```bash
npm install  # or yarn install
```

### ⚙️ Configure Environment Variables

Create a `.env` file in the root directory and add your API URL:

```
BACKEND_URL=your_backend_api_url
```

### 🚀 Run the Development Server

```bash
npm run dev  # or yarn dev
```

The project will be live at: **http://localhost:3000**

## 📌 Features

✅ Browse eBooks 📚  
✅ Download eBooks with a single click ⬇️  
✅ Responsive & Modern UI 🎨  
✅ Fast and optimized with Next.js 🚀

## 👨‍💻 Developer

**Abrar Yeasir**  
🔗 GitHub: [@iamabraryeasir](https://github.com/iamabraryeasir)  
🔗 LinkedIn: [Abrar Yeasir](https://www.linkedin.com/in/iamabraryeasir)

## 📝 Future Plans

- 📊 **Admin Dashboard** for book & user management
- 💳 **Payment Gateway** for premium content
- 🚀 **More Enhancements & Features**

**Contributions, issues, and feature requests are welcome!** 🎉
