# Next.js Blog

A modern blog built with Next.js 14, TypeScript, Tailwind CSS, and more.

## Features

- 🚀 Built with Next.js 14 and TypeScript
- 💅 Styled with Tailwind CSS and shadcn/ui
- 🔐 Authentication with NextAuth.js (Google & GitHub)
- 🌐 Internationalization with next-intl
- 💳 Payment integration with Stripe and PayPal
- 📱 Responsive design for all devices
- 🎨 Dark mode support

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nextjs-blog.git
cd nextjs-blog
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your configuration.

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                # App router pages
├── components/         # Reusable components
├── lib/               # Utility functions
├── prisma/            # Database schema
└── types/             # TypeScript types
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="mysql://user:password@localhost:3306/blog_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# OAuth
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
GITHUB_ID=""
GITHUB_SECRET=""

# Stripe
STRIPE_PUBLIC_KEY=""
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""

# PayPal
PAYPAL_CLIENT_ID=""
PAYPAL_CLIENT_SECRET=""
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
