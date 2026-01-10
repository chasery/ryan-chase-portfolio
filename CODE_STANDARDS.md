# Code Standards

This document outlines the coding standards and best practices for the Ryan Chase Portfolio project.

## Table of Contents
- [General Principles](#general-principles)
- [TypeScript Standards](#typescript-standards)
- [Astro Component Standards](#astro-component-standards)
- [React Component Standards](#react-component-standards)
- [Styling Standards](#styling-standards)
- [Accessibility Standards](#accessibility-standards)
- [File Organization](#file-organization)
- [Naming Conventions](#naming-conventions)
- [Git Workflow](#git-workflow)
- [Code Quality](#code-quality)

## General Principles

1. **Type Safety First**: Always use TypeScript with strict mode enabled
2. **Performance**: Leverage Astro's zero-JS-by-default approach
3. **Accessibility**: Write semantic HTML and ensure keyboard navigation
4. **Maintainability**: Keep components small, focused, and well-typed
5. **Consistency**: Follow established patterns and conventions

## TypeScript Standards

### Type Definitions
- Use `interface` for object shapes
- Use `type` for unions, intersections, and aliases
- Avoid `any` - use `unknown` if type is truly unknown
- Define explicit return types for functions
- Use optional properties (`?`) for optional props

```typescript
// ✅ Good
interface UserProps {
  name: string;
  email?: string;
  age: number;
}

function getUser(id: string): User | null {
  // ...
}

// ❌ Bad
function getUser(id: any): any {
  // ...
}
```

### Type Inference
- Let TypeScript infer types when obvious
- Explicitly type function parameters and return values
- Use type assertions sparingly

```typescript
// ✅ Good
const count = 0; // inferred as number
function add(a: number, b: number): number {
  return a + b;
}

// ❌ Bad
const count: number = 0; // unnecessary explicit type
```

## Astro Component Standards

### Structure
```astro
---
// 1. Imports
import Layout from '../layouts/BaseLayout.astro';
import Component from '../components/Component.astro';

// 2. Type definitions
interface Props {
  title: string;
  description?: string;
}

// 3. Props destructuring with defaults
const { title, description = 'Default description' } = Astro.props;

// 4. Data fetching or computations
const data = await fetchData();
---

<!-- 5. Template -->
<Layout title={title}>
  <main>
    <h1>{title}</h1>
    <p>{description}</p>
  </main>
</Layout>

<!-- 6. Styles (if needed) -->
<style>
  /* Component-scoped styles */
</style>
```

### Best Practices
- Keep frontmatter logic minimal
- Use TypeScript interfaces for props
- Prefer Astro components over React when possible
- Use `<slot />` for layout composition
- Import global styles in layouts, not pages

## React Component Standards

### Functional Components
```tsx
// ✅ Good
interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ 
  text, 
  onClick, 
  variant = 'primary' 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${
        variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'
      }`}
    >
      {text}
    </button>
  );
}
```

### Hooks Usage
- Use React hooks when needed for interactivity
- Add `client:load` or `client:visible` directive in Astro
- Follow React hooks rules (only call at top level)

```astro
---
import InteractiveComponent from '../components/InteractiveComponent.tsx';
---

<InteractiveComponent client:load />
```

## Styling Standards

### Tailwind CSS
- **Primary styling method**: Use Tailwind utility classes
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Use semantic class names when possible
- Group related classes logically

```astro
<!-- ✅ Good -->
<div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 md:p-8">
  <h1 class="text-4xl font-bold text-gray-900 mb-4">Title</h1>
</div>

<!-- ❌ Bad -->
<div style="display: flex; flex-direction: column; ...">
```

### Custom Styles
- Global styles: `src/styles/global.css`
- Component styles: Use `<style>` tag in Astro components
- Avoid separate CSS files unless necessary
- Use CSS variables for theme values if needed

## File Organization

### Directory Structure
```
src/
  layouts/          # Page layouts (BaseLayout.astro, etc.)
  pages/            # Route pages (index.astro, about.astro)
  components/       # Reusable components
    Button/
      Button.tsx
      ButtonGroup.tsx
  styles/           # Global styles
  utils/            # Utility functions
public/             # Static assets
```

### Component Organization
- One component per file
- Group related components in folders
- Use index files for cleaner imports (optional)

## Naming Conventions

### Files
- **Components**: PascalCase (`BaseLayout.astro`, `Button.tsx`)
- **Utilities**: camelCase (`formatDate.ts`, `constants.ts`)
- **Pages**: lowercase with hyphens (`about.astro`, `contact-me.astro`)
- **Styles**: kebab-case (`global.css`)

### Variables & Functions
- **Variables**: camelCase (`userName`, `isLoading`)
- **Functions**: camelCase (`getUserData`, `formatDate`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`, `MAX_ITEMS`)
- **Components**: PascalCase (`Button`, `UserProfile`)

### CSS Classes
- Use Tailwind utility classes (no custom class names needed)
- If custom classes needed, use kebab-case (`user-profile`, `nav-link`)

## Git Workflow

### Commit Messages
Use Commitizen for interactive commits:
```bash
yarn commit
```

Follow conventional commit format:
```
type(scope): subject

body (optional)

footer (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(layout): add BaseLayout component
fix(button): correct hover state styling
docs(readme): update installation instructions
refactor(utils): simplify date formatting function
```

### Pre-commit
- Husky runs lint-staged automatically
- ESLint and Prettier run on staged files
- Fix errors before committing

## Code Quality

### Linting
- Run `yarn lint` before committing
- Fix all ESLint errors and warnings
- Use `yarn lint:fix` for auto-fixes

### Formatting
- Run `yarn format` before committing
- Use `yarn format:check` in CI
- Prettier config is in `.prettierrc`

### Type Checking
- TypeScript strict mode is enabled
- Fix all TypeScript errors
- Use proper types, avoid `any`

### Testing
- Test components in development (`yarn dev`)
- Verify accessibility with keyboard navigation
- Check responsive design at different breakpoints

## Performance Guidelines

1. **Zero JS by Default**: Use Astro components when possible
2. **Lazy Hydration**: Use `client:visible` for below-fold components
3. **Image Optimization**: Use Astro's Image component
4. **Code Splitting**: Astro handles this automatically
5. **Minimize Dependencies**: Only add what's necessary

## Accessibility Standards

Accessibility (a11y) is a core requirement for this project. All code must meet WCAG 2.1 Level AA standards.

### Core Principles

1. **Semantic HTML**: Use proper HTML elements for their intended purpose
2. **Keyboard Navigation**: All interactive elements must be keyboard accessible
3. **Screen Reader Support**: Content must be understandable without visual context
4. **Color Contrast**: Meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
5. **Focus Management**: Visible focus indicators for all interactive elements

### Semantic HTML

Use semantic HTML elements instead of generic divs:

```astro
<!-- ✅ Good -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>
<footer>Footer content</footer>

<!-- ❌ Bad -->
<div class="header">
  <div class="nav">
    <div class="link">Home</div>
  </div>
</div>
```

### ARIA Attributes

Use ARIA attributes when semantic HTML isn't sufficient:

```astro
<!-- ✅ Good - When semantic HTML isn't enough -->
<button aria-label="Close dialog" aria-expanded="false">
  <span aria-hidden="true">×</span>
</button>

<!-- ✅ Good - Landmarks -->
<nav aria-label="Main navigation">
  <!-- navigation items -->
</nav>
```

**ARIA Rules:**
- Don't use ARIA when semantic HTML works
- Use `aria-label` for icon-only buttons
- Use `aria-hidden="true"` for decorative icons
- Use `aria-expanded` for collapsible content
- Use `aria-live` for dynamic content updates

### Images and Media

```astro
<!-- ✅ Good -->
<img src="photo.jpg" alt="A person standing in front of a mountain" />

<!-- ✅ Good - Decorative images -->
<img src="decoration.svg" alt="" role="presentation" />

<!-- ✅ Good - Complex images -->
<img src="chart.png" alt="Sales chart showing 20% increase" />
<figcaption>Monthly sales data for Q1 2024</figcaption>

<!-- ❌ Bad -->
<img src="photo.jpg" />
<img src="photo.jpg" alt="image" />
```

**Image Guidelines:**
- Always include `alt` text for meaningful images
- Use empty `alt=""` for decorative images
- Describe the content, not the image itself
- For complex images, use `figcaption` or long descriptions

### Forms and Inputs

```astro
<!-- ✅ Good -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email" required aria-required="true" />

<!-- ✅ Good - Error messages -->
<label for="password">Password</label>
<input type="password" id="password" name="password" aria-invalid="true" aria-describedby="password-error" />
<span id="password-error" role="alert">Password must be at least 8 characters</span>

<!-- ❌ Bad -->
<input type="email" placeholder="Email" />
```

**Form Guidelines:**
- Always associate labels with inputs using `for` and `id`
- Use `aria-required` for required fields
- Use `aria-invalid` and `aria-describedby` for error states
- Provide clear error messages
- Group related fields with `<fieldset>` and `<legend>`

### Keyboard Navigation

All interactive elements must be keyboard accessible:

```astro
<!-- ✅ Good -->
<button onclick="handleClick()">Click me</button>
<a href="/page">Link</a>

<!-- ✅ Good - Custom interactive element -->
<div 
  role="button" 
  tabindex="0" 
  onclick="handleClick()"
  onkeydown={(e) => e.key === 'Enter' && handleClick()}
>
  Custom button
</div>

<!-- ❌ Bad - Not keyboard accessible -->
<div onclick="handleClick()">Click me</div>
```

**Keyboard Guidelines:**
- All interactive elements must be focusable (`tabindex="0"` if needed)
- Handle `Enter` and `Space` keys for buttons
- Handle `Arrow` keys for custom components (menus, carousels)
- Maintain logical tab order
- Never use `tabindex > 0`

### Focus Management

```astro
<!-- ✅ Good - Visible focus styles -->
<button class="focus:outline-none focus:ring-2 focus:ring-blue-500">
  Button
</button>

<!-- ✅ Good - Skip links -->
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

**Focus Guidelines:**
- Always provide visible focus indicators
- Use Tailwind's `focus:` utilities
- Implement skip links for main content
- Manage focus in modals and dynamic content
- Don't remove focus outlines without alternatives

### Color and Contrast

```astro
<!-- ✅ Good - High contrast -->
<p class="text-gray-900 bg-white">High contrast text</p>

<!-- ✅ Good - Don't rely on color alone -->
<button class="text-red-600">
  <span aria-label="Error: ">Delete</span>
  <span aria-hidden="true">⚠️</span>
</button>

<!-- ❌ Bad - Low contrast -->
<p class="text-gray-400 bg-gray-300">Hard to read</p>

<!-- ❌ Bad - Color only -->
<button class="text-red-600">Delete</button>
```

**Color Guidelines:**
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text (18pt+)
- Don't rely on color alone to convey information
- Use icons, text, or patterns in addition to color
- Test with color blindness simulators

### Heading Hierarchy

```astro
<!-- ✅ Good -->
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>
  <h2>Another Section</h2>

<!-- ❌ Bad - Skipped levels -->
<h1>Page Title</h1>
  <h3>Section Title</h3> <!-- Skipped h2 -->
```

**Heading Guidelines:**
- Use one `<h1>` per page
- Don't skip heading levels (h1 → h2 → h3)
- Use headings to structure content, not for styling
- Maintain logical hierarchy

### Interactive Elements

```astro
<!-- ✅ Good -->
<button type="button" aria-label="Close menu">
  <span aria-hidden="true">×</span>
</button>

<!-- ✅ Good - Disabled state -->
<button type="button" disabled aria-disabled="true">
  Submit
</button>

<!-- ✅ Good - Loading state -->
<button type="button" aria-busy="true" aria-label="Loading...">
  <span aria-hidden="true">⏳</span>
</button>
```

### Testing Accessibility

1. **Automated Testing:**
   - ESLint with `eslint-plugin-jsx-a11y` (already configured)
   - Run `yarn lint` to check for a11y issues

2. **Manual Testing:**
   - Navigate with keyboard only (Tab, Enter, Space, Arrow keys)
   - Test with screen readers (NVDA, JAWS, VoiceOver)
   - Check color contrast with browser dev tools
   - Test with browser zoom at 200%

3. **Tools:**
   - [WAVE Browser Extension](https://wave.webaim.org/extension/)
   - [axe DevTools](https://www.deque.com/axe/devtools/)
   - Browser accessibility inspector
   - Color contrast checkers

### Common Accessibility Patterns

#### Skip Links
```astro
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white">
  Skip to main content
</a>
```

#### Loading States
```astro
<button aria-busy={isLoading} aria-live="polite">
  {isLoading ? 'Loading...' : 'Submit'}
</button>
```

#### Error Messages
```astro
<div role="alert" aria-live="assertive">
  {error && <p>{error}</p>}
</div>
```

#### Modal Dialogs
```astro
<div role="dialog" aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Dialog Title</h2>
  <!-- content -->
  <button aria-label="Close dialog">×</button>
</div>
```

### Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

## Common Patterns

### Creating a New Page
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Page Title">
  <main>
    <!-- Page content -->
  </main>
</BaseLayout>
```

### Creating a Reusable Component
```astro
---
interface Props {
  title: string;
  children?: any;
}

const { title, children } = Astro.props;
---

<section class="container mx-auto py-8">
  <h2 class="text-2xl font-bold mb-4">{title}</h2>
  <slot />
</section>
```

### Using React Components
```astro
---
import Button from '../components/Button.tsx';
---

<Button client:load text="Click me" variant="primary" />
```

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)
- [Conventional Commits](https://www.conventionalcommits.org/)

