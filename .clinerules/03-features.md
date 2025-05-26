## 📜 Rules for: Feature Documentation Pages

The following subsections define the rules for documenting each specific feature of the NextJS Boilerplate. The AI should ensure that each feature's documentation is comprehensive, user-friendly, and accurately reflects the information provided in the source material.

---

### Rules for: Landing Pages Documentation

**Overall Goal:** Enable users to understand how to find, select, use, and customize the pre-built landing pages provided with BuilderKit.

**Content and Structure:**

1.  **Introduction/Overview:**
    * State that BuilderKit provides multiple (e.g., 10) pre-built landing pages.
    * Mention that Figma designs are included.
    * Emphasize their modularity (ability to add/remove sections).
2.  **Accessing Landing Pages:**
    * Specify the location: `src/app/page.tsx` in the `main` branch (or as specified in source).
    * Explain how users can find and test/preview them.
3.  **How to Use:**
    * Provide a clear code example of importing and using a specific landing page component (e.g., `LandingPage1`).
    * Explain that users can replace the default content of `src/app/page.tsx` with their chosen landing page.
4.  **Structure and Modularity:**
    * Use an example (e.g., `LandingPage1` structure) to illustrate how sections are imported and composed within a landing page file (e.g., `@/components/landing-pages/landing-page-1`).
    * Clearly show how to remove or comment out a section (e.g., `Product` section example).
5.  **Customization (General):**
    * Briefly mention that content within each section can be customized (details might be in component-level docs, but a note here is useful).

**Formatting and Style:**
* Clearly delineate code examples for import and usage.
* Use file paths consistently.

**AI Assistant Instructions:**
* Ensure all mentioned landing pages (e.g., LandingPage1) and their sections (Hero, Features, etc.) correspond to the provided source material.
* Verify file paths and import statements for accuracy.

---

### Rules for: Waitlists Documentation

**Overall Goal:** Guide users on how to implement and customize the pre-built waitlist page.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Describe the waitlist page as pre-built, modular, and themeable (compatible with any color scheme).
2.  **Location & Preview:**
    * Specify the file path: `src/app/waitlist/page.tsx` in the `main` branch.
    * Provide a link to a live preview if available in the source material.
3.  **How to Use:**
    * Provide a code example showing how to import the `WaitlistComponent`.
    * Demonstrate passing the `colorScheme` prop with a sample theme object (e.g., `purpleTheme`), detailing its properties (`bg`, `input`, `button`, `border`, `dark`).
4.  **Customization:**
    * Focus on theme customization via the `colorScheme` prop.
    * Explain each property within the `colorScheme` object.

**Formatting and Style:**
* Present the `colorScheme` object clearly in code blocks.
* Ensure property names within the theme object are accurate.

**AI Assistant Instructions:**
* Accurately represent the `colorScheme` prop and its structure.
* Ensure the file path and component name (`WaitlistComponent`) are correct.

---

### Rules for: SEO Documentation

**Overall Goal:** Explain how to use the `getSeoMetadata` utility function to manage SEO metadata for pages in the application.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Explain that BuilderKit provides a utility function (`getSeoMetadata`) to simplify generating SEO metadata.
    * Mention its location: `@/utils/seo-metadata` (or `seo-metadata.tsx`).
2.  **Usage (Import):**
    * Show the import statement for `getSeoMetadata`.
3.  **Function Call Example:**
    * Provide a clear example of calling `getSeoMetadata` with various parameters:
        * `title`
        * `description`
        * `keywords` (as an array)
        * `canonicalUrlRelative`
        * `extraTags` (as an object)
4.  **Parameters Explained:**
    * Detail each parameter accepted by `getSeoMetadata`:
        * `title` (string, optional, default behavior)
        * `description` (string, optional, default behavior)
        * `keywords` (string[], optional, default behavior)
        * `canonicalUrlRelative` (string, optional, purpose)
        * `extraTags` (Record<string, string>, optional, purpose)
5.  **Return Value Explained:**
    * Describe the structure of the object returned by the function, including:
        * `title`, `description`, `keywords`
        * `metadataBase` (app's base URL)
        * `openGraph` object and its properties (`type`, `locale`, `title`, `description`, `url`, `siteName`, `images`)
        * `twitter` object and its properties (`card`, `title`, `description`, `images`)
        * `alternates.canonical` (if `canonicalUrlRelative` was provided)
        * `extraTags` (if provided)
6.  **Integration Example (with `next-seo`):**
    * Provide a React component example (`MyPage`) showing:
        * Importing `getSeoMetadata`.
        * Calling the function.
        * Using the spread operator (`{...seoData}`) to pass the result to the `NextSeo` component (from `next-seo`).
        * Rendering some page content using the SEO data (e.g., `<h1>{seoData.title}</h1>`).
    * **Note:** Explicitly state that `NextSeo` is from the `next-seo` library, which needs separate installation and configuration.

**Formatting and Style:**
* Use code blocks for all import statements, function calls, parameter lists, and component examples.
* Clearly distinguish parameters from return value properties.

**AI Assistant Instructions:**
* Ensure all parameter names and return value properties are accurate as per the source.
* Correctly represent the usage with the `NextSeo` component.
* Include the important note about `next-seo` library dependency.

---

### Rules for: Crisp Chat Documentation

**Overall Goal:** Instruct users on how to set up and manage the Crisp chat integration for customer support.

**Content and Structure:**

1.  **Introduction/Overview:**
    * State that BuilderKit supports Crisp for customer support chat.
    * Mention the requirement of a "Crisp ID."
2.  **Configuration Location:**
    * Specify the configuration file: `src/app/providers.tsx` in the `main` branch.
    * Explain that it auto-configures the user's email if available.
3.  **Visibility and Hiding:**
    * Explain default visibility (all pages).
    * Detail how to hide Crisp on specific pages:
        * By adding page routes to the `hideOnRoutes` variable.
        * Specify the location of this variable: `src/config.ts`.
        * Provide an example (e.g., hiding on `/reset-password` & `/ai-modules`).
4.  **Manual Display Button:**
    * Explain the option to show Crisp manually using the `<ButtonCrispSupport/>` component.
    * Provide an example of importing and using this component in a page (e.g., `page.tsx`).

**Formatting and Style:**
* Clearly show file paths and variable names (`hideOnRoutes`).
* Format the component usage example correctly.

**AI Assistant Instructions:**
* Ensure accuracy of file paths, variable names (`hideOnRoutes`), and component names (`ButtonCrispSupport`).
* Clearly explain the default behavior and the two methods of controlling visibility.

---

### Rules for: Upload Media Documentation

**Overall Goal:** Explain how to use Supabase Storage for uploading and managing media files securely from the client-side.

**Content and Structure:**

1.  **Introduction/Overview:**
    * State that BuilderKit allows storing media files in Supabase Storage.
    * Refer users to the "Setup" section for necessary Supabase configuration.
2.  **Implementation Location:**
    * Specify the file containing the upload logic: `/src/utils/supabase/storage.ts`.
3.  **Client-Side Upload Rationale:**
    * Explain *why* client-side uploads are implemented (Vercel's 4.5 MB data transfer limit for serverless functions).
    * Mention that this allows larger file uploads (based on Supabase limits) directly from the frontend, securely.
4.  **How to Use (Functions):**
    * For each function, show the import statement and an example of calling it:
        * `upload(file)`: To upload a file.
        * `getSignedUrl(filepath)`: To create a signed URL.
        * `getPublicUrl(filepath)`: To get a public URL.
    * Clearly indicate what parameters (e.g., `file`, `filepath`) need to be passed.

**Formatting and Style:**
* Use distinct code blocks for each function's import and usage example.

**AI Assistant Instructions:**
* Accurately represent the function names (`upload`, `getSignedUrl`, `getPublicUrl`) and their parameters.
* Clearly state the Vercel limitation as the reason for the client-side approach.
* Emphasize the prerequisite of Supabase setup.

---

### Rules for: Payments Documentation

**Overall Goal:** Guide users on setting up and understanding the payment gateway integrations (Stripe and Lemon Squeezy) for handling subscriptions.

**Content and Structure:**

1.  **Introduction/Overview:**
    * State that BuilderKit integrates with Stripe and Lemon Squeezy.
    * Mention the purpose: handling subscriptions and processing payments.
    * **Crucial Prerequisite:** Display a warning (e.g., "⚠️ Before you proceed, make sure the Supabase setup is completely done, else you will get an error.").
2.  **Payment Methods Overview (Briefly introduce each):**
    * Stripe
    * Lemon Squeezy
3.  **Stripe Integration Details:**
    * **Configuration:**
        * List required environment variables in `.env`: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`.
    * **Webhook Handling:**
        * Specify the webhook route: `/api/webhooks/stripe/route.ts`.
        * Explain its purpose: processes events (e.g., `customer.subscription.created`, `customer.subscription.updated`) to sync subscription data.
    * **Payment Button:**
        * Mention the reusable payment button component (`ButtonPayment`).
        * Explain its role: handles payment flow for different plans and frequencies.
    * **Further Reading:** Refer to "Builderkit Stripe Documentation" for more details.
4.  **Lemon Squeezy Integration Details:**
    * (The provided text only mentions Lemon Squeezy in the overview. If more details exist in the source, they should be structured similarly to Stripe: Configuration, Webhook Handling, Payment Button, Further Reading.)
    * If no further details, the rule should prompt the AI to note this or seek more info if the intent is to document it fully. *For now, based on provided text, only Stripe has details.*
5.  **General Benefits:**
    * Reiterate that these integrations simplify implementing subscription functionality.

**Formatting and Style:**
* Use a prominent warning format for the Supabase prerequisite.
* Clearly list environment variables.
* File paths should be accurate.

**AI Assistant Instructions:**
* Strictly include the Supabase prerequisite warning.
* Ensure environment variable names and file paths are correct.
* If Lemon Squeezy details are sparse in the source, reflect that accurately or indicate it as an area needing more content.
* Correctly reference any external "Builderkit Stripe Documentation."

---

### Rules for: Emails (Loops & Resend) Documentation

**Overall Goal:** Explain how to integrate and use email services like Loops for automated event-based emails and Resend for other email functionalities (like Magic Links, which will be detailed separately but Resend is the provider).

**Content and Structure (Based on provided text for "Emails" primarily covering Loops):**

1.  **Loops Integration:**
    * **Introduction:** Describe Loops as a tool for sending automated emails based on user events.
    * **Capabilities:** Mention triggering emails and updating contact info based on user actions.
    * **Further Reading:** Direct users to "Builderkit Loops Documentation" for configuration and usage details.
2.  **Resend Integration (General Mention, if applicable here beyond Magic Links):**
    * (The provided text under "Emails" immediately goes to "Email Verification using Magic Link" which details Resend. If there's a general Resend setup or usage *outside* of Magic Links, it should be documented here. Otherwise, this section under "Emails" focuses on Loops, and Resend is primarily covered under "Magic Link".)
    * Based on user input, this "Emails" section focused on Loops. Resend's primary documentation will be under Magic Links.

**AI Assistant Instructions:**
* Accurately represent the information provided for Loops.
* Ensure the link to "Builderkit Loops Documentation" is correctly formatted.
* If Resend has general setup distinct from Magic Links and it's in the source material, include it. Otherwise, defer Resend details to the "Magic Link" section.

---

### Rules for: Email Verification using Magic Link Documentation

**Overall Goal:** Instruct users on setting up, configuring, and understanding the magic link email verification process using Resend.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Describe magic links as a secure, user-friendly email verification method (passwordless).
2.  **Key Features:**
    * List features: email input form, handles submission, triggers link sending, shows success/error messages.
3.  **Prerequisites:**
    * List prerequisites: BuilderKit project, Resend account, configured environment variables.
4.  **Configuration:**
    * **`JWT_SECRET_KEY` Generation:**
        * Explain its purpose (secure hash for verifying magic link URL).
        * Provide methods for generation: OpenSSL (recommended for production) and Node.js (for development), including the commands.
    * **Environment Variables:**
        * List required variables in `.env`: `JWT_SECRET_KEY`, `RESEND_API_KEY`.
        * Instruct users to replace placeholder values.
    * **Resend Email Integration:** Refer to Resend documentation for step-by-step setup.
5.  **Implementation:**
    * **Entry Page:** Specify the email submission page: `/email-verification`.
    * **Email Sending:** Mention that Resend is used.
    * **Verification Page:** Specify the link target page: `/email-verification/verify`. Explain its role (verifies link, creates user session).
    * Mention that users can update sections by visiting the same files.
6.  **Security Considerations:**
    * `JWT_SECRET_KEY` security (keep secure, rotate in production).
    * Token Expiration (default 1 hour, adjustable).
    * HTTPS (always use in production).
    * Rate Limiting (consider implementing).
7.  **Customization:**
    * List customizable aspects:
        * Email Template (in `sendMagicLink` function).
        * Token Expiration (`expiresIn` option in `generateJWT` function).
        * Error Messages (in `EmailVerification` and `Verify` components).
8.  **Troubleshooting:**
    * Tips for: emails not sending (check Resend API key/sender config), incorrect `APP_URL`, inconsistent `JWT_SECRET_KEY`.

**Formatting and Style:**
* Clearly present commands for JWT secret generation.
* List environment variables accurately.
* Use file paths and component names consistently.

**AI Assistant Instructions:**
* Ensure all security considerations are highlighted.
* Provide accurate instructions for JWT key generation.
* Verify all file paths, function names (`sendMagicLink`, `generateJWT`), and component names (`EmailVerification`, `Verify`).
* Correctly refer to external Resend documentation.

---

### Rules for: Admin Dashboard Documentation

**Overall Goal:** Explain the features, components, data sources, and customization options for the Admin Dashboard.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Describe the Admin Dashboard's purpose: overview of API usage, user stats, key metrics.
    * Mention its integration with Supabase for data.
    * State it's customizable.
    * Provide a test link if available (noting login requirement as it's a protected page).
    * Mention inclusion of "sample dashboard" and "account setting" pages.
2.  **Components:**
    * List main components and their file paths:
        * Admin Dashboard Page: `src/app/(dashboard)/admin-dashboard/page.tsx`
        * `ApiRequestChart`: `src/components/dashboard/admin-dashboard/ApiRequestChart.tsx`
        * `ApiUsageChart`: `src/components/dashboard/admin-dashboard/ApiUsageChart.tsx`
        * `UserStatsChart`: `src/components/dashboard/admin-dashboard/UserStatsChart.tsx`
3.  **Component Details (for each chart component):**
    * **`ApiRequestChart`:**
        * Purpose: Bar chart of total, rejected, successful API requests by service.
        * Props: `ChartData` interface (show structure).
        * How to use: Import and usage example.
    * **`ApiUsageChart`:**
        * Purpose: Donut chart of API usage by category/service.
        * Props: `ApiUsageChartType` interface (show structure, including `entries` with `chat_history`, `model`).
        * How to use: Import and usage example.
    * **`UserStatsChart`:**
        * Purpose: Area chart of user growth over time.
        * Props: `UserStatsChartProps` interface (with `TypeUser[]`).
        * How to use: Import and usage example.
4.  **Data Fetching:**
    * Explain that `AdminDashboard` component fetches data from Supabase.
    * **Tables Definition:** Show example of the `tables` array (objects with `name`, `table` as `SupabaseTable`, `field`).
    * **Data Fetching Logic:**
        * Show `Promise.all` example for fetching data from each table using `supabaseAdmin.from(table as SupabaseTable).select(field)`.
        * Briefly explain data processing to get `Total API Requests`, `Rejected`, `Successful`, `entries`.
    * **User Data Fetching:** Show example: `supabaseAdmin.from('users').select('*').order('created_at', { ascending: false })`.
5.  **Customization:**
    * How to modify `tables` array in `AdminDashboard` component.
    * How to adjust chart components for visualization/features.
    * How to update styling (CSS classes, Tailwind).

**Formatting and Style:**
* Present prop interfaces and code examples for component usage clearly in code blocks.
* Accurately show Supabase query examples.

**AI Assistant Instructions:**
* Ensure all file paths, component names, and prop interfaces are correct.
* Verify the Supabase query examples and data fetching logic.
* Clearly list customization points.

---

### Rules for: Prompts (for ToS And Privacy Policy) Documentation

**Overall Goal:** Guide users on how to use the provided ChatGPT/Claude prompts to generate Terms of Service and Privacy Policy documents.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Explain the importance of these legal documents (mandatory for Stripe, Google OAuth).
    * State that the boilerplate includes prompts and a step-by-step process.
2.  **Setup Process (Step-by-Step):**
    * Navigate to the relevant files: `/terms-of-service/page.tsx` or `/privacy-policy/page.tsx` (in `main` branch).
    * Find the ChatGPT prompt (in comments).
    * Copy and paste the prompt into ChatGPT/Claude.
    * **Crucial Step:** Instruct users to replace placeholder data with their business details.
    * Take the AI response and replace the `CONTENT` variable in the respective file.
    * Mention the page title uses app name from `config.ts`.
3.  **Important Disclaimer:**
    * Include a strong recommendation: "Remember to review the generated Terms of Service (and Privacy Policy), ideally with a legal professional, before publishing it on your site."

**Formatting and Style:**
* Clearly list the step-by-step instructions.
* Use a prominent format for the legal disclaimer.

**AI Assistant Instructions:**
* Emphasize the step about replacing placeholder data in the prompt.
* Crucially, ensure the legal disclaimer is included and highlighted.
* Verify file paths.

---