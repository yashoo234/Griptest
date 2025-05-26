## 📜 Rules for: ➕ Integrations Documentation Pages

This section details the rules for documenting third-party service integrations with the NextJS Boilerplate. The AI should ensure each guide clearly explains prerequisites, configuration, usage, and any important considerations.

---

### Rules for: Stripe Payment Integration Documentation

**Overall Goal:** Guide users through setting up Stripe for handling payments and subscriptions, including API key configuration, webhook setup, and using the payment button component.

**Content and Structure:**

1.  **Introduction:**
    * State that BuilderKit provides seamless Stripe integration for payments and subscriptions.
2.  **Prerequisites:**
    * List requirements:
        * A Stripe account (link to Stripe website).
        * Stripe API keys (publishable key and secret key).
        * Stripe webhook secret.
    * Refer users to Stripe documentation for obtaining these credentials (link if in source).
3.  **Configuration:**
    * **Environment Variables:**
        * Instruct to set in `.env` (or `.env.local` if consistent): `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`.
        * Emphasize replacing placeholder values.
    * **`src/config.ts` Updates:**
        * Show the relevant `stripe` section within the `config` object.
        * Detail each property:
            * `baseUrl` (Stripe checkout URL).
            * `emailParam` (prefill email parameter).
            * `discountParam` (prefill promo code parameter, optional).
            * `variant` object (mapping subscription plans like 'standard', 'premium' to monthly/annually Stripe price IDs).
            * `plan` object (mapping Stripe product IDs to subscription types like 'standard', 'premium').
        * Instruct users to adjust `variant` and `plan` mappings based on their Stripe product setup.
4.  **Webhook Handling:**
    * **Route Location:** Specify the webhook route: `src/app/api/webhooks/stripe/route.ts`.
    * **Code Excerpt:** Provide a snippet of the webhook handler, including:
        * Imports (e.g., `config`, `EnumSubscriptionBillingCycle`, `supabaseAdmin`, `headers`, `NextRequest`, `NextResponse`, `Stripe`).
        * Environment variable usage for `SECRET_KEY` and `WEBHOOK_SECRET`.
        * Stripe object initialization (`new Stripe(SECRET_KEY!, { typescript: true });`).
        * Function signature for `POST(req: NextRequest)`.
        * Function signatures for `handleSubscriptionCreated(subscription: Stripe.Subscription)` and `handleSubscriptionUpdated(subscription: Stripe.Subscription)`.
        * (AI should present this as an illustrative excerpt, not necessarily the full file content unless specified by the user).
    * **Events Handled:**
        * `customer.subscription.created`: Explain its trigger and actions (activates subscription, updates Supabase DB).
        * `customer.subscription.updated`: Explain its trigger and actions (updates subscription status in Supabase DB).
    * **Webhook Endpoint Configuration:** Instruct users to configure the webhook endpoint in their Stripe dashboard to point to their application's URL (e.g., `https://your-domain.com/api/webhooks/stripe`).
5.  **Payment Button Component (`ButtonPayment`):**
    * **Props:** List and describe the component's props:
        * `provider` (string, e.g., 'stripe').
        * `tier` (string, e.g., 'standard', 'premium').
        * `frequency` (string, e.g., 'monthly', 'annually').
    * **Usage Example:** Provide a TSX example: `<ButtonPayment provider="stripe" tier="standard" frequency="monthly" />`.
    * **Functionality Overview:**
        * Explain it checks user authentication (redirects to login if not logged in).
        * Explain it constructs the payment URL based on provider, plan, frequency, and handles potential discounts (e.g., for annual subscriptions via Stripe).
6.  **Conclusion:**
    * Briefly summarize that Stripe integration is set up, and users can manage subscriptions, with webhooks updating the database.

**Formatting and Style:**
* Use bold for environment variable names, config properties, and component props.
* Format code blocks for `.env` content, `src/config.ts` excerpts, webhook code snippets, and TSX examples with appropriate language identifiers.
* Clearly list steps for configuration and webhook setup.
* Ensure links open in new tabs as indicated in source.

**AI Assistant Instructions:**
* Verify all file paths, environment variable names, config structure, and component props against the source material.
* Ensure the explanation of webhook events and their handling is clear.
* Accurately represent the Stripe price ID and product ID mapping concept in `config.ts`.
* The AI should clearly state what users need to customize (e.g., API keys, price/product IDs, webhook URL).

---

### Rules for: Resend Integration Documentation

**Overall Goal:** Enable users to configure and use the Resend service for sending emails from their application via a provided API endpoint.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Describe Resend as a simple and efficient service for sending emails.
    * Link to the Resend website.
2.  **Prerequisites:**
    * List requirements:
        * A Resend account (provide sign-up link from source).
        * Resend API key (provide link to Resend Dashboard from source).
3.  **Configuration:**
    * **Environment Variables:**
        * Instruct to add to `.env.local`: `RESEND_API_KEY=your_resend_api_key`.
        * Emphasize replacing the placeholder with the actual API key.
    * **Sender Email in `src/config.ts`:**
        * Show the relevant `resend` section within the `config` object: `senderEmailAddress: "onboarding@resend.dev"`.
        * Instruct users to replace the test sender email ID with their desired sender email.
4.  **Sending an Email:**
    * **Endpoint:** Explain usage of the `/api/resend` endpoint.
    * **"How to use?":**
        * Instruct to make a POST request to `/api/resend`.
        * List request body parameters:
            * `email` (string for single recipient, array of strings for multiple - max 50).
            * `subject` (string).
            * `emailBody` (string, HTML format).
    * **API Call Example:**
        * Provide a `Workspace` example (using `config.app.url` for the base URL) showing a POST request with example `email`, `subject`, and `emailBody`.
5.  **Important Warning:**
    * Display a prominent warning: "⚠️ Resend will not send emails to custom email addresses until you configure your domain in the Resend dashboard. Make sure to set up your domain to avoid any issues."
6.  **Customization:**
    * Mention that users can customize email content, subject, and recipients by modifying the code in the `/api/resend` route.

**Formatting and Style:**
* Use bold for environment variable names and request parameters.
* Format code blocks for `.env.local` content, `src/config.ts` excerpts, and the API call example with appropriate language identifiers (`env`, `typescript`, `javascript` or `api` as per user's source).
* Clearly list parameters for the API request.
* Ensure the warning is prominently displayed.

**AI Assistant Instructions:**
* Verify all file paths, environment variable names, config structure, and API endpoint details.
* Ensure the distinction between single and multiple email recipients is clear.
* The warning about domain configuration in Resend is critical and must be included.
* Accurately represent the example API call.

---