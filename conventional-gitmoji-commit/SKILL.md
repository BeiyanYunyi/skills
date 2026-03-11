---
name: conventional-gitmoji-commit
description: A commit style that combines conventional commits with gitmoji for better readability and expressiveness in commit messages.
---

# conventional-gitmoji-commit

When you're writing a git commit message, you'd be familiar with the conventional-gitmoji-commit style:

```plaintext
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Conventional-gitmoji-commit is "compatible" with the conventional commit style, but it also incorporates gitmoji to make commit messages more visually appealing and easier to understand at a glance. The format is:

```plaintext
<type>[optional scope]: <gitmoji> <description>

[optional body]

[optional footer(s)]
```

For example:

```plaintext
feat: ✨ Add new user authentication flow
```

Conventional-commit's types are listed in ./conventional-commit.yaml, and gitmojis are listed in ./gitmoji.yaml. Follow these files to ensure your commit messages adhere to the conventional-gitmoji-commit style.

## When to use

When you're writing a git commit message.
