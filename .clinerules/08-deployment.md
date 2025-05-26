## 📜 Rules for: 🚀 Deployment Documentation Page

**Overall Goal:** Guide users on how to deploy their NextJS Boilerplate application, providing a detailed walkthrough for Vercel and mentioning alternative platforms. Users should be able to deploy their application and optionally configure a custom domain.

**Content and Structure:**

1.  **Introduction:**
    * State the purpose of the section: to explain application deployment.
    * Mention Vercel as the platform for the quick demo/primary example (link to Vercel website).
    * Briefly list alternative platforms users might choose (e.g., Cloudflare Pages, Netlify, linking to them if specified in the source).
2.  **Prerequisite: Push Project to GitHub:**
    * Clearly state that the project code should be pushed to a GitHub repository (preferably private).
    * (Optionally, link to the "Upload your project in GitHub" section of the "Get Started" guide if it exists and is relevant).
3.  **Vercel Deployment Steps:**
    * **Step 1: Vercel Account & GitHub Connection:**
        * Instruct users to create an account on Vercel.
        * Explain they need to connect their GitHub account (that contains the project) to Vercel.
    * **Step 2: Import Project in Vercel:**
        * Guide users to click the "Add New" button (or similar current Vercel terminology) in their Vercel dashboard.
        * Instruct them to import the project from the list of their GitHub repositories.
    * **Step 3: Configure Environment Variables:**
        * Emphasize the importance of setting proper environment variables in Vercel's project settings.
        * Instruct users to refer to their `.env.example` file for the list of required variables and their purposes.
    * **Step 4: Deploy:**
        * Instruct users to click the "Deploy" button (or similar).
        * Mention that they can view their deployed project via the public URL provided by Vercel.
4.  **Configure Custom Domain in Vercel:**
    * **Step 1: Navigate to Domain Settings in Vercel:**
        * Instruct users to go to the "Domains" tab within their Vercel "Project Settings."
        * Guide them to enter their custom domain name (e.g., "builderkit.ai for me").
    * **Step 2: DNS Configuration in Domain Provider:**
        * Explain that Vercel will provide DNS records (typically A Record and CNAME) after adding the domain.
        * Instruct users to set up these A Record and CNAME records in their domain provider's dashboard.
        * Provide examples of domain providers (e.g., Namecheap, GoDaddy, linking to them if specified in the source).

**Formatting and Style:**
* Clearly number the steps for Vercel deployment and custom domain configuration.
* Use bolding for key actions (e.g., "Add New," "Deploy"), UI elements ("Domains" tab), and important file names (`.env.example`).
* Ensure all external links (Vercel, Cloudflare Pages, Netlify, Namecheap, GoDaddy) open in a new tab as indicated in the source material.
* Use consistent terminology for Vercel dashboard elements.

**AI Assistant Instructions:**
* Verify all Vercel-specific instructions and UI navigation points against the current Vercel interface if possible, or strictly adhere to the user's provided text.
* Ensure the reference to `.env.example` for environment variables is clear.
* The distinction between deploying to a Vercel-provided URL and configuring a custom domain should be apparent.
* If the user's source material uses specific phrasing for Vercel UI elements (e.g., "Add New button"), the AI should use that phrasing.

---