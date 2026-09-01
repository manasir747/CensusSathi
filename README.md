# Census Saathi

Census Saathi is an interactive, AI-powered web platform designed to simplify and gamify the Census experience for citizens. Built for the **PromptWars Hackathon**, this platform serves as an all-in-one companion to educate, guide, and assist citizens throughout the Census process.

## 🚀 Features

- **Interactive Journey:** Understand the "What" and "Why" of the Census, including the House Listing and Population Enumeration phases.
- **AI-Powered Assistance:** Integrated with `@google/genai` to provide instant, contextual answers to your Census queries using advanced Gemini models.
- **State-Specific Insights:** Explore state-wise data and tailored calls to action.
- **Safety & Privacy:** Learn how your data is protected during the data collection process.
- **Modern UI/UX:** A responsive, highly animated interface built with Next.js, React 19, Framer Motion, and Lucide Icons.

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, React 19)
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **AI Integration:** `@google/genai` (Google Gemini API)

## 🚦 Getting Started

### Prerequisites
Make sure you have Node.js (v20+) and npm (or pnpm/yarn/bun) installed.

### Installation

1. Clone the repository and navigate to the project directory:
   ```bash
   cd CensusSathi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory. You will need to add your API keys here (e.g., Google Gemini API key):
   ```env
   # Add your environment variables here
   # GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `src/app`: Contains the Next.js App Router pages and layouts.
- `src/components`: Reusable UI components grouped by feature (e.g., home sections).
- `src/context`: React Context providers for global state management.
- `src/hooks`: Custom React hooks.
- `src/services`: API and external service integrations (like Gemini AI).
- `src/translations`: Localization files for multi-language support.
- `src/types`: TypeScript definitions and interfaces.
- `src/utils`: Helper functions and utilities.

## 🤝 Hackathon Context

This project was developed for the **PromptWars Hackathon**. It demonstrates how GenAI and modern web technologies can be combined to build impactful civic tech solutions, encouraging citizen participation in nationwide data collection exercises like the Census.
