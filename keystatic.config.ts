import { config, fields, collection } from '@keystatic/core';

const isProd = import.meta.env.PROD;

export default config({
  storage: isProd
    ? {
        kind: 'github',
        repo: 'Mohammed-Elmasry/personal-portfolio',
      }
    : { kind: 'local' },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content', data: 'yaml' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        pubDate: fields.date({ label: 'Publication Date', validation: { isRequired: true } }),
        updatedDate: fields.date({ label: 'Updated Date' }),
        heroImage: fields.text({ label: 'Hero Image URL' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.markdoc({ label: 'Content', extension: 'md' }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content', data: 'yaml' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        heroImage: fields.text({ label: 'Hero Image URL' }),
        tech: fields.array(fields.text({ label: 'Technology' }), {
          label: 'Tech Stack',
          itemLabel: (props) => props.value,
        }),
        liveUrl: fields.url({ label: 'Live URL' }),
        repoUrl: fields.url({ label: 'Repository URL' }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        sortOrder: fields.integer({ label: 'Sort Order', defaultValue: 0 }),
        content: fields.markdoc({ label: 'Content', extension: 'md' }),
      },
    }),
  },
});
