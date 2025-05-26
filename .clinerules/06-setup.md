## 📜 Rules for: ⚙️ Setup Documentation Pages

This section outlines the rules for documenting the setup processes for various services and authentications required or recommended for the NextJS Boilerplate. The AI should ensure each guide is clear, step-by-step, and provides all necessary information and warnings.

---

### Rules for: Email & Google Auth Setup Documentation

**Overall Goal:** Guide users through configuring Supabase for email authentication and optionally setting up Google Auth, including redirect URLs and necessary environment variables.

**Content and Structure:**

1.  **Introduction:**
    * Briefly state the purpose: setting up Email Auth and optionally Google Auth using Supabase.
2.  **Common Prerequisite: Configure Redirect URL (for all Supabase Auth Providers):**
    * Instruct users to go to the "URL Configuration" page in Supabase (provide a link if available in source, e.g., `(opens in a new tab)`).
    * Detail the settings:
        * **Site URL:** The base URL of their application.
        * **Redirect URLs:** `<base-url>/api/auth/callback` (or as specified).
    * Provide an example for local testing: `http://localhost:3000` as the base URL.
3.  **Configure Environment Variable:**
    * Instruct users to add `NEXT_PUBLIC_APP_URL` to their `.env.local` file.
    * Provide examples: `NEXT_PUBLIC_APP_URL=<your-base-url>` and `NEXT_PUBLIC_APP_URL=http://localhost:3000`.
4.  **Email Auth Setup Confirmation:**
    * State that core email authentication setup (via Supabase) is now complete.
5.  **Optional: Setup Google Auth:**
    * **Prerequisite:** Clearly state that the above steps (Redirect URL, Env Var) must be completed first.
    * **External Documentation Reference:** Direct users to the official Supabase documentation for detailed steps on configuring OAuth Credentials in Google Cloud Console and enabling Google Auth in Supabase Dashboard (provide the link from the source material).
    * **Brief Overview of External Process:**
        * Set up a project in Google Cloud Console (link if in source).
        * Configure OAuth Credentials for the application via Google Console.
        * Enable the Google Auth Provider in the Supabase Dashboard (link if in source).
    * **Security Note:** Emphasize storing client IDs/secrets securely and never exposing them client-side.
6.  **Email Auth Configuration (Default & Optional):**
    * State that Email auth is enabled by default.
    * **Optional: Turn off Email Confirmation:**
        * Steps:
            1. Go to "Auth Provider" in Supabase (link if in source).
            2. Click on the email option.
            3. Switch off "Confirm email."
            4. Click "Save."

**Formatting and Style:**
* Use bolding for key terms like "Site URL," "Redirect URLs," and environment variable names.
* Clearly list steps for configuration.
* Ensure links open in a new tab as indicated in the source.
* Highlight security notes prominently.

**AI Assistant Instructions:**
* Verify all URLs, paths within Supabase dashboard (e.g., "URL Configuration", "Auth Provider"), and environment variable names.
* Ensure the distinction between mandatory common setup and optional Google Auth/Email Confirmation disabling is clear.
* Accurately represent the external documentation link for Google Auth setup.

---

### Rules for: Supabase Setup Documentation

**Overall Goal:** Provide comprehensive instructions for setting up a Supabase project, including creating tables (Users, Subscriptions) with SQL, configuring storage, RLS policies, and syncing the schema with the Next.js project.

**Content and Structure:**

1.  **Initial Supabase Project Setup:**
    * Instruct to create a "New Project" in their Supabase account.
    * Guide users to "API Settings" in the Supabase dashboard to obtain:
        * Project URL
        * Anon Key
        * Service Role Key
    * Optionally, refer to the "auth setup" guide (link internally to the "Email & Google Auth Setup" section).
2.  **Create User Table (`users`):**
    * Instruct to go to the "SQL Editor" in Supabase (link if in source).
    * Provide the full SQL query for creating the `users` table, including:
        * `subscriptiontype` enum.
        * Table definition (`id`, `created_at`, `email`, `full_name`, `avatar_url`, `plan`, `credits`, constraints).
        * RLS setup (`alter table users enable row level security;`).
        * RLS policies ("Users can insert their own row.", "Users can update own row.", "Users can read own row.").
        * `handle_new_user` trigger function (to sync with `auth.users`).
        * `on_auth_user_created_trigger`.
    * Note that the script enables RLS by default.
    * Suggest users can verify table creation in Supabase (link if in source).
3.  **Create Subscriptions Table (`subscriptions`):**
    * Explain its purpose: store user subscription data.
    * Provide the full SQL query for creating the `subscriptions` table, including:
        * `billingcycle` enum.
        * Table definition (`id`, `created_at`, `type`, `subscription_id`, `amount`, `interval`, `start_date`, `active`, `user_email`, `user_id`, constraints).
        * RLS setup.
        * RLS policies ("Users can insert their own row.", "Users can read own row.").
        * `handle_new_subscription` function.
        * `on_user_created` trigger.
4.  **Editing a Supabase Table:**
    * Method 1: Modifying the SQL script (e.g., "add necessary column... after line 7").
    * Method 2: Using the Supabase Dashboard:
        * Go to "Table Editor" (link if in source).
        * Select table.
        * Click "Insert" dropdown -> "Insert Column."
5.  **Create a Supabase Storage Bucket (Optional):**
    * Go to "Storage" in Supabase dashboard (link if in source).
    * Click "New Bucket."
    * Enter bucket name, Save. (Mention the modal appearance if described in source).
6.  **Add RLS Policy for Supabase Storage Bucket:**
    * Go to "Storage Policies" (link if in source).
    * Find the created storage bucket.
    * Click "New policy."
    * Select "For full customization."
    * Enter "policy name."
    * Select operations: `INSERT` and `SELECT`.
    * Leave "Policy definition" default.
    * Click "Add Review" -> "Save Policy."
7.  **Sync Table Schema with the Project:**
    * Explain the purpose: update local type definitions.
    * **Step 1: Login via CLI:**
        * Command: `supabase login`.
        * Explain prompts will follow.
    * **Step 2: Initialize Supabase in project (if not done):**
        * Command: `supabase init`.
        * Explain it's for projects not yet initialized.
    * **Step 3: Generate Types:**
        * Command: `npx supabase gen types typescript --project-id [PROJECT_ID] --schema public > src/types/supabase.ts`.
        * Explain `[PROJECT_ID]` placeholder.
    * **Step 4: Get Project ID:**
        * Instruct to go to "General Settings" in Supabase dashboard (link if in source).
        * State that "Reference ID" is the Project ID.

**Formatting and Style:**
* Use `sql` language identifier for all SQL code blocks.
* Use `terminal` or `bash` for CLI commands.
* Clearly distinguish steps and sub-steps.
* Ensure all placeholders like `[PROJECT_ID]` are clearly marked.
* List file paths accurately (e.g., `src/types/supabase.ts`).

**AI Assistant Instructions:**
* Ensure all SQL scripts are complete and accurately transcribed from the source.
* Verify all Supabase dashboard navigation instructions and CLI commands.
* Clearly indicate optional steps.
* The AI should pay close attention to the details of RLS policies and trigger functions.

---

### Rules for: Pinecone Setup Documentation

**Overall Goal:** Guide users through creating a Pinecone account, setting up a project and index, and obtaining API keys for vector database integration.

**Content and Structure:**

1.  **Create a Pinecone Account:**
    * Instruct users to go to the Pinecone website (link if in source) and sign up/sign in.
    * Mention they will be directed to the Pinecone dashboard.
2.  **Create a New Project:**
    * In the Pinecone dashboard, click "Create Project" or "New Project."
    * Fields to fill: project name, select region.
    * Click "Create."
3.  **Create an Index:**
    * In the project dashboard, click "Create Index."
    * Configuration settings:
        * Index name.
        * **Dimension:** e.g., `1,536` (note its relevance, e.g., for OpenAI's `text-embedding-ada-002`).
        * **Metric:** e.g., `cosine`.
        * (Mention that these values can be changed if required).
    * Other settings to keep default: `capacity mode`, `cloud provider`, `region`.
    * Click "Create Index."
4.  **Obtain API Keys:**
    * In the project dashboard, go to "API Keys" or "Settings."
    * Instruct users to find their API key.
    * **Security Note:** Emphasize keeping the API key secure for authenticating requests.

**Formatting and Style:**
* Clearly list the steps for account, project, and index creation.
* Use bold for configuration parameters like "Dimension" and "Metric."
* Highlight the security note for API keys.

**AI Assistant Instructions:**
* Verify all Pinecone dashboard navigation terms (e.g., "Create Project," "Create Index," "API Keys").
* Ensure the example dimension (`1,536`) and metric (`cosine`) are correctly stated, along with the note about their typical usage (e.g., with specific embedding models).
* The AI should make sure the process flows logically from account creation to getting API keys.

---

### Rules for: YouTube Cookies Setup Documentation

**Overall Goal:** Explain the necessity of YouTube cookies for certain features (like subtitle retrieval), guide users on how to obtain them using an extension, and emphasize security best practices.

**Content and Structure:**

1.  **Introduction:**
    * Explain the purpose: retrieving and using cookies from YouTube authentication for specific functionalities (e.g., getting subtitles).
    * State that cookies are essential for accessing restricted YouTube features/content.
2.  **Why Cookies Are Needed:**
    * Explain YouTube uses cookies for authentication and session management.
    * List benefits of providing cookies to the application:
        * Access age-restricted content.
        * Retrieve private videos (if authenticated user has access).
        * Access region-restricted content.
        * Potentially bypass some rate-limiting.
3.  **Step-by-Step Guide to Retrieve Cookies:**
    * **Step 1: Install "EditThisCookie" Extension:**
        * Recommend for Chrome, Firefox, or Edge.
        * Provide a direct link to the Chrome extension store page if in source.
    * **Step 2: Create a New YouTube Account:**
        * Strongly recommend creating a new, dedicated YouTube account for this purpose (to keep personal account separate).
    * **Step 3: Log in to YouTube** (with the new dedicated account).
    * **Step 4: Export Cookies:**
        * Ensure user is on a YouTube page.
        * Click the "EditThisCookie" extension icon.
        * Click the export button in the popup.
        * Note that cookies are copied to the clipboard in JSON format.
    * **Step 5: Update the YouTube Cookies File:**
        * Specify the file path: `src/utils/youtube-cookies.ts`.
        * Instruct users to replace the example cookie array with their exported cookies.
4.  **Security Considerations:**
    * List critical security advice:
        * **Never share your cookies.**
        * **Use a dedicated account.**
        * **Regularly rotate cookies.**
        * **Store securely:** (Never commit to public repos. Use environment variables or secure secret management in production).
5.  **Ethical Use Reminder:**
    * Include a statement about responsible and ethical use, respecting YouTube's ToS and creators' rights.

**Formatting and Style:**
* Clearly number the steps in the retrieval guide.
* Use bolding for important terms and security advice.
* Ensure the file path `src/utils/youtube-cookies.ts` is accurate.
* Prominently display the security considerations and ethical use reminder.

**AI Assistant Instructions:**
* Verify the name of the browser extension ("EditThisCookie") and any provided links.
* Ensure the step-by-step guide is easy to follow.
* The AI must emphasize all security considerations strongly, especially regarding the handling of cookies.
* The ethical reminder should be included as stated.

---