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

Always write commit messages in English, whatever the historical commit messages are.

## When to use

When you're writing a git commit message.

## Instructions

1. Choose a type from the conventional-commit types and an appropriate gitmoji.
   1. If not sure which type you can use, check the descriptions in ./conventional-commit.yaml and ./gitmoji.yaml.
2. Write the commit message in English.
