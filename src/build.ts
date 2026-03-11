import { writeFile } from 'node:fs/promises';
import { getTypes } from '@yi-xu-0100/conventional-commit-types-i18n';
import { gitmojis } from 'gitmojis';
import yaml from 'yaml';

const { types } = getTypes('en');

interface CCOutput {
  name: string;
  description: string;
}

interface GitmojiOutput {
  emoji: string;
  code: string;
  description: string;
}

const ccOutput: CCOutput[] = Object.entries(types).map(
  ([name, { description }]) => ({
    name,
    description,
  }),
);

const gitmojiOutput: GitmojiOutput[] = gitmojis.map(
  ({ emoji, code, description }) => ({
    emoji,
    code,
    description,
  }),
);

writeFile(
  './skills/conventional-gitmoji-commit/conventional-commit.yaml',
  yaml.stringify(ccOutput),
);
writeFile(
  './skills/conventional-gitmoji-commit/gitmoji.yaml',
  yaml.stringify(gitmojiOutput),
);
