# Ryan Chase Portfolio

A modern portfolio website built with Astro, React, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

### Core Framework
- **[Astro](https://astro.build) 5.16+** - Static site generator with zero-JS by default
  - File-based routing
  - Component islands architecture
  - Built-in image optimization
  - Server-side rendering support

### UI & Interactivity
- **[React](https://react.dev) 19.2+** - UI library for interactive components
  - Used with `client:load` or `client:visible` directives
  - React Hooks for state management
  - TypeScript support

### Styling
- **[Tailwind CSS](https://tailwindcss.com) 4** - Utility-first CSS framework
  - Via `@tailwindcss/vite` plugin
  - Responsive design utilities
  - Customizable design system

### Language & Type Safety
- **TypeScript** - Typed JavaScript superset
  - Strict mode enabled
  - Full type checking for Astro and React components
  - Type inference and explicit type definitions

### Development Tools
- **[ESLint](https://eslint.org) 9.0+** - Code linting
  - `eslint-plugin-astro` for Astro file support
  - `@typescript-eslint` for TypeScript rules
  - `eslint-plugin-react` and `eslint-plugin-react-hooks` for React
  - `astro-eslint-parser` for parsing `.astro` files

- **[Prettier](https://prettier.io) 3.3+** - Code formatter
  - `prettier-plugin-astro` for Astro file formatting
  - Consistent code style across the project

- **[eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y) 6.10+** - Accessibility linting
  - Enforces accessibility best practices
  - WCAG 2.1 Level AA compliance
  - Automatic detection of common a11y issues

### Git & Version Control
- **[Husky](https://typicode.github.io/husky) 9.1+** - Git hooks
  - Pre-commit hooks for code quality checks
  - Commit message validation

- **[Commitlint](https://commitlint.js.org) 20.2+** - Commit message linter
  - Enforces conventional commit format
  - Validates commit messages

- **[Commitizen](https://commitizen.github.io/cz-cli) 4.3+** - Interactive commit tool
  - `cz-conventional-changelog` adapter
  - Guided commit message creation

- **[lint-staged](https://github.com/lint-staged/lint-staged) 16.2+** - Run linters on staged files
  - Automatically runs ESLint and Prettier on commit

### Package Management
- **Yarn 4.12+ (Berry/Modern)** - Modern package manager
  - Fast, reliable dependency management
  - Improved performance and caching
  - Better workspace support
  - PnP (Plug'n'Play) support available
  - Currently using `node-modules` linker for compatibility

## 📁 Project Structure

```
/
├── public/          # Static assets (images, icons, PDFs)
├── src/
│   ├── layouts/    # Reusable layout components
│   ├── pages/      # Route pages (file-based routing)
│   ├── components/ # Reusable components (Astro, React)
│   ├── styles/     # Global styles
│   └── utils/      # Utility functions
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 🧞 Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `yarn install`         | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying    |
| `yarn lint`            | Run ESLint                                       |
| `yarn lint:fix`        | Fix ESLint errors automatically                   |
| `yarn format`          | Format code with Prettier                        |
| `yarn format:check`    | Check code formatting                            |
| `yarn commit`          | Interactive commit with Commitizen              |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📚 Documentation

- **[Code Standards](./CODE_STANDARDS.md)** - Detailed coding standards and best practices
- **[Cursor Rules](./.cursorrules)** - AI assistant rules for this project

## 🛠️ Development

### Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Start the development server:
   ```bash
   yarn dev
   ```

3. Open [http://localhost:4321](http://localhost:4321) in your browser

### Code Quality

This project uses several tools to maintain code quality:

- **ESLint**: Linting with Astro, TypeScript, and React support
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **Commitlint**: Commit message validation
- **Commitizen**: Interactive commit prompts

Before committing, ensure:
- `yarn lint` passes (includes accessibility checks)
- `yarn format:check` passes
- All TypeScript errors are resolved

Use `yarn commit` for interactive commits that follow conventional commit format.

### Accessibility

This project is committed to accessibility and follows WCAG 2.1 Level AA standards. Accessibility is enforced through:

- **ESLint with `eslint-plugin-jsx-a11y`** - Automatic detection of common accessibility issues
- **Semantic HTML** - Proper use of HTML5 semantic elements
- **ARIA attributes** - Used when semantic HTML isn't sufficient
- **Keyboard navigation** - All interactive elements are keyboard accessible
- **Color contrast** - Meets WCAG AA standards (4.5:1 for normal text)
- **Screen reader support** - Content is understandable without visual context

See [CODE_STANDARDS.md](./CODE_STANDARDS.md#accessibility-standards) for detailed accessibility guidelines.

## 🚀 Deployment

This project is configured to deploy to [Vercel](https://vercel.com).

### Vercel Configuration

The project includes a `vercel.json` file that configures:
- Build command: `yarn build`
- Output directory: `dist`
- Framework: Astro

### Automatic Deployment

When you push to your main branch, Vercel will:
1. Install dependencies with `yarn install`
2. Build the site with `yarn build`
3. Deploy the `dist` directory

### Manual Deployment

You can also deploy manually:
```bash
yarn build
vercel --prod
```

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

For more information, see the [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/vercel/).

## 📖 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)
- [Vercel Documentation](https://vercel.com/docs)
