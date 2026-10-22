import { getViteConfig } from 'astro/config';
import type { InlineConfig } from 'vitest/node';

const config = {
  test: { include: ['tests/**/*.test.ts'], environment: 'node' } satisfies InlineConfig,
  plugins: [],
};

export default getViteConfig(config);
