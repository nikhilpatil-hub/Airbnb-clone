# Airbnb Clone

A full-stack web application inspired by Airbnb, built with Node.js, Express, MongoDB, and modern web technologies. This project allows users to list properties, browse listings, and manage bookings with an intuitive interface.

## 🌟 Features

- **User Authentication**: Secure login and signup using Passport.js with local strategy
- **Property Listings**: Create, read, update, and delete property listings
- **Image Management**: Upload and store images using Cloudinary
- **Location Mapping**: Interactive maps powered by Mapbox API
- **User Sessions**: Persistent user sessions with MongoDB backend
- **Form Validation**: Server-side validation using Joi
- **Flash Messages**: User-friendly feedback messages
- **Responsive Design**: Clean and intuitive UI with EJS templating
- **User Authorization**: Role-based access control for listings

## 🛠️ Tech Stack

### Backend
- **Node.js** (v22.14.0)
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### Frontend
- **EJS** - Templating engine
- **EJS-mate** - Layout support

### Authentication & Security
- **Passport.js** - Authentication middleware
- **Passport-local** - Local strategy
- **Passport-local-mongoose** - Mongoose integration
- **Express-session** - Session management
- **Connect-mongo** - MongoDB session store
- **Connect-flash** - Flash message support

### File & Media Handling
- **Multer** - File upload handling
- **Multer-storage-cloudinary** - Cloudinary storage adapter
- **Cloudinary** - Cloud image storage and management
- **Mapbox SDK** - Location services and mapping

### Utilities
- **Joi** - Data validation
- **Dotenv** - Environment variable management
- **Cookie-parser** - Cookie parsing
- **Method-override** - HTTP method override support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v22.14.0 or higher)
- npm (comes with Node.js)
- MongoDB (local or MongoDB Atlas)
- Git

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/nikhilpatil-hub/Airbnb-clone.git
cd Airbnb-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add the following:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/airbnb-clone
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/airbnb-clone

# Session Secret
SESSION_SECRET=your_session_secret_key_here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Mapbox Configuration
MAPBOX_TOKEN=your_mapbox_access_token

# Node Environment
NODE_ENV=development
```

### 4. Get Required API Keys

#### MongoDB Setup
- **Local:** Install MongoDB and ensure it's running on `localhost:27017`
- **Cloud:** Create a MongoDB Atlas account and get your connection string from [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

#### Cloudinary Setup
1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Navigate to your Dashboard
3. Copy your Cloud Name, API Key, and API Secret

#### Mapbox Setup
1. Create an account at [mapbox.com](https://www.mapbox.com)
2. Go to Account → Tokens
3. Create a new access token with appropriate permissions

## 🏃 Running the Project

### Development Mode
```bash
npm start
```

The application will start on `http://localhost:3000` (or your configured port)

### With Nodemon (for development with auto-reload)
```bash
npm install --save-dev nodemon
npx nodemon app.js
```

## 📁 Project Structure

```
Airbnb-clone/
├── models/              # Mongoose schemas
├── routes/              # Express route handlers
├── views/               # EJS templates
├── public/              # Static files (CSS, JS, images)
├── middleware/          # Custom middleware
├── controllers/         # Business logic
├── .env                 # Environment variables (create this)
├── app.js               # Main application file
├── package.json         # Project dependencies
└── README.md            # This file
```

## 🔐 Security Notes

- Never commit `.env` file to GitHub (add to `.gitignore`)
- Keep API keys and secrets secure
- Use environment variables for sensitive data
- Validate all user inputs with Joi
- Use HTTPS in production

## 🚢 Deployment

### Deploy to Heroku, Render, Railway, or Similar Services

1. **Prepare for Production**
   - Update `NODE_ENV` to `production` in your deployment platform
   - Add all environment variables to your hosting platform's config

2. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Connect Your Repository**
   - Go to your hosting platform
   - Connect your GitHub repository
   - Set environment variables
   - Deploy!

### Recommended Hosting Platforms
- **Render** - Easy deployment, free tier available
- **Railway** - Modern platform, great for Node.js apps
- **Heroku** - Classic choice (paid tier only)
- **Vercel** - Suitable for full-stack apps
- **AWS/DigitalOcean** - More control, steeper learning curve

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👤 Author

**Nikhil Patil**
- GitHub: [@nikhilpatil-hub](https://github.com/nikhilpatil-hub)

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or your Atlas connection string is correct
- Check network access in MongoDB Atlas if using cloud

### Image Upload Not Working
- Verify Cloudinary credentials in `.env`
- Check Cloudinary account limits
- Ensure file size is within limits

### Maps Not Displaying
- Verify Mapbox token is correct and has appropriate permissions
- Check browser console for API errors

### Session Issues
- Ensure MongoDB connection is active
- Clear browser cookies and try again
- Verify SESSION_SECRET is set in `.env`

## 📚 Resources

- [Express.js Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Documentation](https://mongoosejs.com)
- [Passport.js Documentation](https://www.passportjs.org)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Mapbox Documentation](https://docs.mapbox.com)

## 📞 Support

For issues or questions, please open an issue on GitHub.

---

**Happy Coding! 🚀**
