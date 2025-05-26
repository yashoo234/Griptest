## 📜 Rules for: Component Documentation Pages

The following subsections define the rules for documenting each specific UI component of the NextJS Boilerplate. The AI should ensure that each component's documentation is comprehensive, enabling users to understand its purpose, props, usage, and customization options.

---

### Rules for: Shadcn (General Library) Documentation

**Overall Goal:** Introduce users to Shadcn UI as the foundational component library, explain where to find its components, how to use them generally, and how to add more.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Describe Shadcn as a collection of pre-built, customizable UI components for Next.js projects.
    * Highlight benefits: best practices, easy integration, efficient development.
    * Provide a link to the official "Shadcn component library" for detailed usage and more examples.
2.  **Location of Shadcn Components:**
    * Specify the directory: `src/components/ui`.
    * Explain this folder contains reusable UI components.
    * Optionally, list a few example component file names found there (e.g., `button.tsx`, `card.tsx`, `use-toast.tsx`).
3.  **General Usage (with Examples):**
    * Explain that components are used by importing them.
    * Provide brief usage examples for a few common components:
        * **Button Component:**
            * Purpose: Versatile UI element for interactive actions.
            * Import statement: `import Button from "@/components/ui/Button";`
            * Usage example in a simple React component (e.g., `HomePage`), showing props like `onClick` and children.
        * **Card Component:**
            * Purpose: Display content in a structured, visually appealing way.
            * Import statement: `import Card from "@/components/ui/Card";`
            * Usage example showing props like `title`, `description`, and children content.
        * **Toast Component:**
            * Purpose: Displaying alert messages.
            * Import statement: `import { toast } from "@/components/ui/use-toast";`
            * Usage example showing how to call the `toast` function with `title`, `description`, and `variant`.
4.  **Adding More Shadcn Components:**
    * Provide the CLI command: `npx shadcn-ui@latest add [COMPONENT_NAME]`.
    * Explain this command is used to add new Shadcn components to the project.

**Formatting and Style:**
* Clearly format import statements and usage examples in code blocks.
* Ensure file paths and component names are accurate.
* Highlight the CLI command for adding new components.

**AI Assistant Instructions:**
* Verify all import paths, component names (e.g., `Button`, `Card`, `toast`), and props used in examples against the source material.
* Ensure the link to the official Shadcn library is correct.
* The AI should make it clear that these are examples and the Shadcn library offers many more components.

---

### Rules for: Logo Component Documentation

**Overall Goal:** Explain the purpose, usage, and customization options for the `Logo` component.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Describe the `Logo` component's purpose: a reusable and consistent way for users to return to the homepage.
    * Mention it typically consists of an image or text wrapped in a link to the root URL.
2.  **Location:**
    * Specify the file path: `src/components/Logo.tsx`.
3.  **Usage:**
    * Provide a code example showing how to import `Logo from "@/components/Logo";`.
    * Show its usage within a parent component (e.g., `Header`).
4.  **Customization:**
    * List customization options:
        * Uncommenting the `Image` component and providing the logo image path.
        * Adjusting styling via CSS classes on `div` and `p` elements.
        * Updating the application name in `src/config.ts` (show an excerpt of the `config.ts` structure focusing on `app.name`).
5.  **Benefit:**
    * Reiterate that using the `Logo` component provides consistent navigation.

**Formatting and Style:**
* Clearly present the import statement and usage example.
* Show the `config.ts` excerpt in a code block.

**AI Assistant Instructions:**
* Ensure the file path `src/components/Logo.tsx` and `src/config.ts` are correct.
* Accurately list the customization steps.

---

### Rules for: Modal Component Documentation

**Overall Goal:** Detail the `Modal` component's functionality, props, usage, appearance, and customization.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Describe the `Modal` as a reusable, customizable dialog box for displaying content, prompts, or confirmations.
    * Highlight its clean and intuitive presentation.
2.  **Location:**
    * Specify the file path: `src/components/Modal.tsx`.
3.  **Props:**
    * Provide a detailed list of props:
        * `title` (required): type, description.
        * `children` (required): type (React node), description.
        * `className` (optional): type, description.
        * `labelModalButton` (optional): type, description, default value ("Open Modal").
        * `styleModalButton` (optional): type, description.
        * `labelActionButton` (optional): type, description, default value ("Continue").
        * `includeCancelButton` (optional): type, description, default value (`true`).
        * `actionButtonVariant` (optional): type, description, default value ("default").
        * `handleAction` (optional): type (function), description.
4.  **Usage:**
    * Provide step-by-step instructions:
        * Import statement: `import Modal from "@/components/Modal";`.
        * TSX usage example showing various props (`title`, `labelModalButton`, `labelActionButton`, `handleAction`, and `children`).
5.  **Appearance:**
    * Describe the modal's appearance: clean, modern, header, content area, footer with action buttons, centered.
    * Mention responsiveness: adapts to screen sizes, buttons stack vertically on smaller screens.
    * (If an image/diagram of the modal is in source, note that the description should align with it).
6.  **Customization (via Props):**
    * Reiterate how props customize appearance and behavior: `className`, `styleModalButton`, `actionButtonVariant`, `includeCancelButton`.

**Formatting and Style:**
* Format the props list clearly (e.g., using a table or bullet points with consistent details: name, type, required/optional, default, description).
* Use code blocks for import and usage examples.

**AI Assistant Instructions:**
* Ensure all props, their types, descriptions, and default values are accurately transcribed from the source material.
* Verify the import path and usage example.
* The description of appearance should match the user's source text.

---

### Rules for: InputWrapper Component Documentation

**Overall Goal:** Explain the `InputWrapper` component's structure, its role in providing consistent form element styling, and its various props and usage.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Describe `InputWrapper` as a flexible, reusable wrapper for form elements.
    * Highlight its purpose: consistent styling and behavior.
    * List supported features: labeling, comments, descriptions, error handling, extra options.
2.  **Location:**
    * Specify the file path: `src/components/InputWrapper.tsx`.
3.  **Structure (Internal Elements):**
    * List and describe the elements composing `InputWrapper`:
        * Label
        * Comment
        * Info Popover
        * Children (placeholder for form elements)
        * Description
        * Error
        * Extra Option
4.  **Props:**
    * Provide a detailed list of props:
        * `id` (optional): type, purpose (accessibility).
        * `label` (optional): type, description.
        * `comment` (optional): type, description.
        * `description` (optional): type, description.
        * `infoPopover` (optional): type, description.
        * `error` (optional): type, description.
        * `children` (optional): type (React node), description.
        * `extraOption` (optional): type (React node, e.g., icon), description.
        * `className` (optional): type, description (custom styling).
5.  **Usage:**
    * Provide step-by-step instructions:
        * Import statement: `import InputWrapper from "@/components/InputWrapper";` (and any icons like `HiOutlineMail` if used in example).
        * TSX usage example showing `InputWrapper` wrapping an `<input type="email" />` and utilizing various props (`id`, `label`, `comment`, `description`, `error`, `extraOption` with an icon).
    * Explain that users should customize by providing appropriate props.
    * State that `InputWrapper` automatically handles labeling, errors, etc.

**Formatting and Style:**
* Clearly list the internal structure elements.
* Format the props list comprehensively.
* Use code blocks for import statements and the detailed usage example.

**AI Assistant Instructions:**
* Verify all prop names, their descriptions, and the internal structure elements against the source.
* Ensure the usage example correctly demonstrates wrapping a form element and using various props, including an icon for `extraOption` if shown in source.

---

### Rules for: SubmitButton Component Documentation

**Overall Goal:** Explain the `SubmitButton`'s functionality in handling form submission states, its props, and how it integrates with `useFormStatus`.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Describe `SubmitButton` as a custom button for form submission states.
    * Highlight its feature: displays a loading indicator during processing.
    * Mention `loaderColor` prop for customizing loader.
2.  **Location:**
    * Specify the file path: `src/components/SubmitButton.tsx`.
3.  **Props:**
    * List props:
        * `isCircleLoader` (optional): type (boolean), description (circular vs. bar loader).
        * `loaderColor` (optional): type (string), description (loader color, default: white).
        * `children`: type (React node), description (button text/content).
        * Note: "All other props are passed through to the underlying `Button` component."
4.  **Functionality (How it Works):**
    * Explain its use of `useFormStatus` hook from `react-dom`.
    * Describe how it checks form pending state and action matching.
    * Explain loader display logic: circular loader (`LuLoader`) if `isCircleLoader` is true, otherwise bar loader (`BarLoader`).
    * Reiterate `loaderColor` customization (default white).
5.  **Usage:**
    * Import statement: `import { SubmitButton } from "@/components/SubmitButton";`.
    * TSX usage example within a `<form>`:
        ```html
        <form action="/api/submit">
          {/* Form fields */}
          <SubmitButton loaderColor="#FF0000">Submit</SubmitButton>
        </form>
        ```

**Formatting and Style:**
* Clearly list props and their descriptions.
* Format the import and usage examples in code blocks.

**AI Assistant Instructions:**
* Accurately describe the interaction with `useFormStatus`.
* Ensure prop names (`isCircleLoader`, `loaderColor`) and component name (`SubmitButton`, `LuLoader`, `BarLoader`) are correct.
* Verify the default loader color if specified.

---

### Rules for: Theme Switcher (SelectTheme) Component Documentation

**Overall Goal:** Explain how the `Theme Switcher` (or `SelectTheme`) component enables theme toggling, its dependencies, and how to integrate it.

**Content and Structure:**

1.  **Introduction/Overview:**
    * Describe the component's purpose: allows users to switch between light and dark themes.
    * Mention its use of the `next-themes` package.
2.  **Location:**
    * Specify the file path: `src/components/SelectTheme.tsx`.
3.  **How it Works:**
    * Explain it uses `useTheme` hook from `next-themes` (to get current theme and `setTheme` function).
    * Describe click behavior: toggles between light/dark by setting theme to the opposite.
    * Describe displayed icons: sun (☀️) for light, moon (🌙) for dark.
    * Mention conditional rendering of icons with smooth transitions.
4.  **Usage (Integration Steps):**
    * **Step 1: ThemeProvider Setup:**
        * Explain wrapping the layout component with `ThemeProvider` from `next-themes`.
        * Show an example: `<ThemeProvider defaultTheme="dark">{children}</ThemeProvider>`.
        * Mention options for `defaultTheme` (e.g., "light", "system").
    * **Step 2: Import Component:**
        * Import statement: `import { SelectTheme } from "@/components/SelectTheme";`.
    * **Step 3: Render Component:**
        * Show example: `<SelectTheme />`.
    * State that the component handles theme switching automatically.
5.  **Benefit:**
    * Reiterate enhancing user experience and accessibility.

**Formatting and Style:**
* Clearly distinguish the setup steps.
* Use code blocks for `ThemeProvider` setup, import, and rendering examples.
* Use emojis (☀️, 🌙) if they are part of the desired documentation style.

**AI Assistant Instructions:**
* Ensure correct naming: `SelectTheme` component, `next-themes` package, `useTheme` hook, `ThemeProvider`.
* Accurately describe the `ThemeProvider` setup.
* Verify the file path.

---  