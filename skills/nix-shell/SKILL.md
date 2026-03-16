---
name: nix-shell
description: A skill that describing how to use nix shell and nix run to create a temporary environment. Use when you want to run a command that isn't in your PATH.
---

# nix-shell

When you want to execute a command but it's not in your PATH, you can use nix shell or nix run to create a temporary environment. `nix shell` will create a new shell with the specified packages available, while `nix run` will run a command directly without a shell.

Before using `nix shell` or `nix run`, you may want to figure out which packages you need for your command. User will have nix in their system with package index available. You can use `nix-locate` to search for packages. For example:

```bash
nix-locate /bin/w | rg "/bin/w\$" # to find the package that provides /bin/w
```

After finding the package, you can use `nix shell` to create a temporary environment with that package available, or `nix run` to run the command directly. For example, to use ffmpeg:

```bash
# using nix shell
nix shell nixpkgs#ffmpeg
ffmpeg <params>
```

```bash
# using nix run
nix run nixpkgs#ffmpeg <params>
```

## When to use

When you want to run a command that isn't in your PATH.

## Instructions

1. (optional) Find the package using `nix-locate`.
2. Use `nix shell` to create a temporary environment with that package available, or `nix run` to run the command directly.
3. If the package isn't cached, nix will download it from the internet. In this case, you may get nix's output before the actual command starts, like:

   ```
   this path will be fetched (0.68 MiB download, 1.94 MiB unpacked):
   /nix/store/hzyllvnksfjiy4bh3j7jd70j0qr2nq9z-eza-0.23.4
   copying path '/nix/store/hzyllvnksfjiy4bh3j7jd70j0qr2nq9z-eza-0.23.4' from 'https://cache.nixos.org'...
   ```

   you should ignore nix's output and wait for the actual command to start.
