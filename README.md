# Zaddy - Digital Innovation Portfolio

A modern, futuristic portfolio website built with Next.js 14, featuring a comprehensive admin panel for content management and inline editing capabilities.

## Features

### Frontend
- **Modern Design**: Futuristic UI with neon accents and dark theme
- **3D Animations**: Interactive 3D elements using Three.js and React Three Fiber
- **Responsive**: Fully responsive design for all devices
- **Performance**: Optimized with Next.js 14 App Router
- **Animations**: Smooth animations with Framer Motion

### Admin Panel
- **Authentication**: Secure Firebase Authentication
- **Content Management**: Full CRUD operations for:
  - Site Information (Hero, About, Footer content)
  - Experiences/Projects
  - Services
  - Clients
- **Image Upload**: Firebase Storage integration for images
- **Real-time Updates**: Changes reflect immediately on the frontend

### Inline Editing
- **Live Editing**: Admin users can edit content directly on the main site
- **Visual Feedback**: Hover effects and edit indicators
- **Auto-save**: Changes are saved to Firestore in real-time

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth
- **Storage**: Firebase Storage
- **3D Graphics**: Three.js, React Three Fiber
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+ 
- Firebase project with Firestore, Authentication, and Storage enabled

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zaddy-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your Firebase project:
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Firestore Database
   - Enable Authentication (Email/Password)
   - Enable Storage
   - Copy your Firebase config to `.env.local`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Admin Setup

1. Create an admin account:
   - Go to `/admin/login`
   - Sign up with your admin email
   - Update `NEXT_PUBLIC_ADMIN_EMAIL` in your environment variables

2. Access the admin panel at `/admin`

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── admin/             # Admin panel pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── admin/            # Admin-specific components
│   ├── InlineEdit.tsx    # Inline editing component
│   └── ...               # Other components
├── contexts/             # React contexts
│   └── AuthContext.tsx   # Authentication context
├── lib/                  # Utility functions
│   ├── firebase.ts       # Firebase configuration
│   ├── firestore.ts      # Firestore operations
│   └── storage.ts        # Storage operations
└── types/                # TypeScript type definitions
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

See `.env.example` for all required environment variables.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.