# EmailJS Setup Instructions

## Setting up EmailJS for Contact Form

To make the contact form functional, you need to set up EmailJS. Follow these steps:

### 1. Create EmailJS Account

- Go to [EmailJS](https://www.emailjs.com/)
- Sign up for a free account

### 2. Create Email Service

- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions

### 3. Create Email Template

- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Use these template variables in your email template:

  ```
  From: {{from_name}} <{{from_email}}>
  Subject: {{subject}}

  Message:
  {{message}}

  Reply to: {{reply_to}}
  ```

### 4. Get Your Credentials

- Service ID: Found in your Email Services section
- Template ID: Found in your Email Templates section
- Public Key: Found in Account > API Keys

### 5. Update Environment Variables

Update the `.env.local` file with your actual values:

```
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Restart Development Server

After updating the environment variables, restart your development server:

```bash
npm run dev
```

## Template Example

Here's a sample EmailJS template you can use:

**Subject:** New Contact Form Message: {{subject}}

**Body:**

```
Hello,

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

## Security Note

- Never commit your actual EmailJS credentials to version control
- The `.env.local` file is already in `.gitignore`
- Consider using environment variables in production
