## 📜 Rules for: 🎬 Get Started Page

**Overall Goal:** This page must provide a clear, step-by-step guide for a new user to get the NextJS boilerplate cloned, installed, configured, running locally, and set up with their own Git repository. It should be actionable and leave the user with a successfully running project.

**Content and Structure:**

The "Get Started" page documentation should cover the following sections in this logical order:

1.  **Introduction (Optional but Recommended):**
    * Briefly state the purpose of the "Get Started" guide.
    * Mention any prerequisites (e.g., Node.js, Git installed).

2.  **Installation:**
    * **Cloning the Repository:**
        * Provide the `git clone` command.
        * Clearly indicate the placeholder `[YOUR_APP_NAME]`.
        * Specify if there are different repository URLs or considerations for "Starter" vs. "Pro" versions.
        * Include the `cd [YOUR_APP_NAME]` command.
    * **Branch Management (If applicable for AI apps):**
        * Explain the concept of switching to specific branches for AI apps.
        * Provide the `git checkout [BRANCH_NAME]` command and how to find branch names (e.g., "You can find all the branches available here.").
    * **Removing Remote Origin (Optional but included in user content):**
        * Provide the `git remote remove origin` command.
        * Crucially, include the warning: "Remember that you will not be able to switch to any other branches (apps) once you run this command."
    * **Installing Dependencies:**
        * Provide the `npm install` command.

3.  **Environment Variables:**
    * Explain the purpose of `.env.local`.
    * Provide the command to copy from example: `cp .env.example .env.local`.
    * Alternatively, instruct on manually creating `.env.local` and referencing `.env.example` for required variables.
    * Stress that actual values need to be updated by the user.
    * Mention this step is "(optional)" if it truly is, or clarify when it becomes mandatory.

4.  **Running the Application:**
    * **Development Server:**
        * Provide the `npm run dev` command.
        * Include the success message: "Hurray 🎉, your development server is up & running."
        * State the default URL: `http://localhost:3000`.
    * **Build for Production:**
        * Provide the `npm run build` command.
        * Briefly explain its purpose (compiles for production).

5.  **Additional Scripts (Optional but useful):**
    * **Prepare Husky:**
        * Provide `npm run prepare`.
        * Briefly explain its purpose (Git hooks).
    * **Validate Code:**
        * Provide `npm run validate`.
        * Briefly explain its purpose (Linting, Formatting, Typecheck).

6.  **Upload your project to GitHub (or other Git provider):**
    * Instruct users on creating a new repository on their Git provider (e.g., link to GitHub's "create a new repository" page).
    * Command to remove the boilerplate's remote origin (if not done earlier): `git remote remove origin`.
    * Provide the sequence of Git commands for staging, committing, adding their new remote, renaming the branch (if necessary, e.g., `git branch -M main`), and pushing:
        * `git add .`
        * `git commit -m "<commit-message>"` (emphasize replacing `<commit-message>`)
        * `git remote add origin <your-repository-url>` (emphasize replacing `<your-repository-url>`)
        * `git branch -M main`
        * `git push -u origin main`

**Formatting and Style Guidelines for this Page:**

* **Command Blocks:** All terminal commands must be in designated `terminal` blocks (as shown in your source material) or appropriate Markdown code blocks (e.g., ```bash).
* **Placeholders:** Clearly denote placeholders like `[YOUR_APP_NAME]`, `[BRANCH_NAME]`, `<commit-message>`, `<your-repository-url>` and instruct the user to replace them. Using backticks or a distinct style for placeholders is good.
* **Clarity:** Explanations for each step should be concise and clear.
* **Accuracy:** All commands and file names must be accurate.
* **Warnings/Important Notes:** Use callouts (e.g., blockquotes, "⚠️" emoji, or "Note:" prefixes) for critical information like the impact of `git remote remove origin`.
* **Links:** Ensure any external links (like to GitHub or AI app branches) are functional and open in a new tab if appropriate.
* **Consistency:** Maintain consistent terminology (e.g., "boilerplate," "application," "project").

**AI Assistant Specific Instructions for "Get Started" Page:**

* When generating or updating this page, strictly adhere to the order and content outlined above.
* If source information for a step is missing, request clarification before proceeding.
* Prioritize accuracy of commands above all else.
* If variations exist (e.g., `yarn` vs `npm`, different clone URLs), ensure these are handled or explicitly requested.
* Ensure the tone is encouraging and guides the user smoothly through the setup process.