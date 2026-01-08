# Contributing to MicroSaaS Academy AI

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to the project.

## 🎯 Ways to Contribute

- **Bug Reports**: Found a bug? Open an issue with details
- **Feature Requests**: Have an idea? Share it in discussions
- **Code Contributions**: Submit pull requests
- **Documentation**: Improve docs, add examples
- **Agent Prompts**: Enhance AI agent system prompts
- **Testing**: Help test new features
- **Community**: Help others in discussions

## 🚀 Getting Started

### 1. Fork the Repository

Click the "Fork" button on GitHub to create your own copy.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/microsaas-academy.git
cd microsaas-academy
```

### 3. Set Up Development Environment

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your OpenAI API key to .env.local
# OPENAI_API_KEY=sk-your-key-here

# Start development server
npm run dev
```

### 4. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

## 📝 Development Guidelines

### Code Style

- **TypeScript**: Use strict mode, proper types
- **Formatting**: Consistent indentation (2 spaces)
- **Naming**: 
  - camelCase for variables and functions
  - PascalCase for components and types
  - UPPER_SNAKE_CASE for constants
- **Comments**: Explain "why", not "what"
- **Imports**: Group and order logically

### Component Structure

```typescript
'use client'; // If needed

import { useState } from 'react';
import type { ComponentProps } from './types';

interface Props {
  // Define props
}

export default function Component({ prop1, prop2 }: Props) {
  // Component logic
  
  return (
    // JSX
  );
}
```

### API Routes

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Define schema
const RequestSchema = z.object({
  // ...
});

export async function POST(req: NextRequest) {
  try {
    // Validate input
    const data = RequestSchema.parse(await req.json());
    
    // Process request
    
    // Return response
    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Handle errors
    return NextResponse.json(
      { success: false, error: 'Error message' },
      { status: 400 }
    );
  }
}
```

### Agent Prompts

When modifying agent prompts in `lib/prompts.ts`:

1. **Maintain Structure**: Keep the existing format
2. **Be Specific**: Clear, actionable instructions
3. **Test Thoroughly**: Verify outputs with multiple prompts
4. **Document Changes**: Explain why changes were made

## 🧪 Testing

### Manual Testing

```bash
# Start dev server
npm run dev

# Test in browser
open http://localhost:3000

# Test API endpoints
curl -X GET http://localhost:3000/api/chat
```

### Build Testing

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Type Checking

```bash
# Check TypeScript types
npx tsc --noEmit
```

## 📤 Submitting Changes

### 1. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature"
# or
git commit -m "fix: resolve bug"
```

**Commit Message Format:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

### 2. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 3. Create Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR template:
   - **Description**: What does this PR do?
   - **Motivation**: Why is this change needed?
   - **Testing**: How was it tested?
   - **Screenshots**: If UI changes

### 4. Code Review

- Respond to feedback promptly
- Make requested changes
- Push updates to the same branch
- Be open to suggestions

## 🐛 Reporting Bugs

### Before Reporting

1. Check existing issues
2. Verify it's reproducible
3. Test on latest version

### Bug Report Template

```markdown
**Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**
- OS: [e.g., macOS 13.0]
- Node.js: [e.g., 18.17.0]
- Browser: [e.g., Chrome 120]

**Screenshots**
If applicable

**Additional Context**
Any other relevant information
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Problem**
What problem does this solve?

**Proposed Solution**
How should it work?

**Alternatives Considered**
Other approaches you've thought about

**Additional Context**
Mockups, examples, etc.
```

## 🎨 UI/UX Contributions

- Follow existing design patterns
- Maintain dark theme consistency
- Ensure mobile responsiveness
- Test on iPad (if possible)
- Consider accessibility (WCAG 2.1 AA)

## 📚 Documentation Contributions

- Clear and concise writing
- Include code examples
- Add screenshots/diagrams
- Update table of contents
- Check for typos and grammar

## 🤖 Agent Prompt Contributions

When improving agent prompts:

1. **Test Extensively**: Try various inputs
2. **Maintain Personality**: Keep agent's character
3. **Improve Output Quality**: Better, more useful responses
4. **Document Changes**: Explain improvements
5. **Provide Examples**: Show before/after

## 🔒 Security

### Reporting Security Issues

**DO NOT** open public issues for security vulnerabilities.

Instead:
1. Email security concerns privately
2. Include detailed description
3. Provide steps to reproduce
4. Suggest a fix if possible

### Security Guidelines

- Never commit API keys or secrets
- Use environment variables
- Validate all user input
- Sanitize outputs
- Follow OWASP guidelines

## 📋 Pull Request Checklist

Before submitting:

- [ ] Code follows project style
- [ ] TypeScript types are correct
- [ ] No console errors or warnings
- [ ] Tested locally
- [ ] Build succeeds (`npm run build`)
- [ ] Documentation updated
- [ ] Commit messages are clear
- [ ] PR description is complete

## 🎓 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)

### React
- [React Documentation](https://react.dev)
- [React Hooks](https://react.dev/reference/react)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com)

## 🤝 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information
- Other unprofessional conduct

## 📞 Getting Help

- **Questions**: Open a discussion
- **Bugs**: Open an issue
- **Chat**: Join our community (if available)
- **Email**: Contact maintainers

## 🎉 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to MicroSaaS Academy AI! 🚀

Your contributions help make this project better for everyone.
