# 🏠 KitaRoom

**Find your room, find your crew.**

KitaRoom is a modern, community-focused rental platform built for students and young professionals. It combines the utility of a classified listings site with the social discovery of a network, helping you find not just a room, but the right roommates.

## ✨ The Problem & Our Solution

Finding a shared living space is about more than just price and location—it's about compatibility. Traditional platforms like iBilik offer listings but lack social tools, while Facebook Groups provide community but no verification or dedicated rental features.

**KitaRoom bridges this gap.** We provide a trusted space where you can:

-   **List or find a room** with detailed filters.
-   **Create a social post** looking for roommates, just like on Facebook.
-   **Build a detailed profile** with lifestyle tags (#EarlyRiser, #PlantLover) to ensure better matches.
-   **Chat securely** with potential housemates, all within the platform.

## 🎯 Core Features

| For Guests & Members                                                                      | For Admins                                                          |
| :---------------------------------------------------------------------------------------- | :------------------------------------------------------------------ |
| ✅ **Browse & Search** – View rooms and roommate posts                                    | 👑 **Moderation Dashboard** – Manage all users, listings, and posts |
| 👤 **Rich User Profiles** – Showcase your lifestyle and preferences                       | ⚠️ **Report Management** – Review and act on user reports           |
| 📝 **Dual Posting** – Create a "Room for Rent" listing OR a "Roommate Wanted" social post | 📊 **System Analytics** – View platform health and growth metrics   |
| 💬 **In-App Messaging** – Communicate directly with potential matches                     |                                                                     |
| 🔐 **Verification & Trust** – User verification and content moderation for safety         |                                                                     |

## 🚀 Tech Stack

-   **Backend:** Laravel 11 (PHP)
-   **Frontend:** Laravel Blade, Tailwind CSS, Livewire/Alpine.js
-   **Authentication:** Laravel Breeze
-   **Database:** MySQL / PostgreSQL
-   **Deployment:** Ready for Laravel Forge, Vapor, or traditional hosting

## 📁 Project Structure

This project follows a **Modular Monolith** architecture for maintainability and clear separation of concerns.

```
app/
├── Modules/
│   ├── User/           # Authentication, profiles, and account management
│   ├── Listing/        # "Room for Rent" classified listings (iBilik-style)
│   ├── SocialPost/     # "Roommate Wanted" social feed posts (Facebook-style)
│   ├── Messaging/      # Real-time chat between users
│   └── Admin/          # Moderation and system management tools
└── Core/               # Shared utilities, base classes, and common logic
```

## 🛠️ Getting Started

### Prerequisites

-   PHP >= 8.2
-   Composer
-   Node.js & NPM
-   MySQL or PostgreSQL

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Danny-CYH/KitaRoom.git
    cd KitaRoom
    ```
2.  Install PHP dependencies:
    ```bash
    composer install
    ```
3.  Install frontend dependencies:
    ```bash
    npm install && npm run build
    ```
4.  Configure your environment:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```
5.  Update `.env` with your database credentials.
6.  Run migrations and seeders:
    ```bash
    php artisan migrate --seed
    ```
7.  Start the development server:
    ```bash
    php artisan serve
    ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

-   Inspired by the need for better rental solutions in Malaysia
-   Built with the amazing Laravel ecosystem
-   Icons from [Lucide](https://lucide.dev/)

---

**Built with ❤️ for better shared living.**
