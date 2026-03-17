# Equestrian Group Web - Documentation

This project is a high-fidelity replication of the Equestrian Group website design, built with Next.js (Pages Router) and TailwindCSS.

## Technical Stack
- **Framework**: Next.js (Pages Router)
- **Styling**: TailwindCSS (v4)
- **Animations**: Framer Motion
- **Forms**: 
  - **Nodemailer**: For sending email notifications.
  - **Google Sheets API**: For storing form submissions.

## Component Architecture
- `Header.js`: Sticky navigation with scroll effects.
- `Hero.js`: High-impact landing section with cinematic feel.
- `WhoWeAre.js`: Grid section showcasing community roles with custom layouts.
- `WhyWeExist.js`: Split-screen storytelling with imagery.
- `WhatWeDo.js`: Feature highlights with detailed typography.
- `ContactForm.js`: Interactive form that pushes data to both Email and Google Sheets.
- `Footer.js`: Premium dark-themed footer with community stamp.

## API Implementation
The contact form triggers two separate API calls:
1. `pages/api/sendEmail.js`: Uses Nodemailer to notify the owner.
2. `pages/api/addToSheet.js`: Appends a row (Timestamp, Name, Email, Phone, Message) to a specified Google Sheet.

## Setup Instructions
1. **Environment Variables**: Use `.env.local.example` as a template.
   - For Nodemailer: Create a Gmail App Password.
   - For Google Sheets: Setup a Service Account in Google Cloud Console, share your spreadsheet with the service account email, and copy the credentials JSON.
2. **Install dependencies**: `npm install`
3. **Run development server**: `npm run dev`

## Design Details
- **Fonts**: Cormorant Garamond (Serif) for elegance, Inter (Sans) for readability.
- **Colors**: Sage (`#B2BBAC`), Beige (`#E6D7C3`), Cream (`#FDF9F3`), and Forest (`#0B130E`).
