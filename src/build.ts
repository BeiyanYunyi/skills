import { gitmojis } from 'gitmojis';
import { getTypes } from '@yi-xu-0100/conventional-commit-types-i18n';
import yaml from 'yaml';
import { writeFile } from 'node:fs/promises';

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
  './conventional-gitmoji-commit/conventional-commit.yaml',
  yaml.stringify(ccOutput),
);
writeFile(
  './conventional-gitmoji-commit/gitmoji.yaml',
  yaml.stringify(gitmojiOutput),
);
