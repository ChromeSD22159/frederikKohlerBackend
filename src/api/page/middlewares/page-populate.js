'use strict';

/**
 * `page-populate` middleware
 */

const populate = {
  hero: {
    fields: ['component', 'titel', 'content' ]
  },
  primaryChild: {
    populate: {
      fields: ['titel'],
      image: {
        fields: ['name', 'alternativeText', 'caption', 'url', 'formats', 'content',]
      },
      apps: {
        fields: ['name', 'description', 'content']
      },
    },
  },
  secondaryChild: {
    populate: {
      fields: ['titel'],
      image: {
        fields: ['name', 'alternativeText', 'caption', 'url', 'formats', 'content',]
      },
      apps: {
        fields: ['name', 'description', 'subline', 'content', 'links', 'platforms'],
        populate: {
          image: {
            fields: ['name', 'alternativeText', 'caption', 'url', 'formats', 'content',]
          },
          links: {
            fields: ['text', 'href', 'target', 'icon', 'component']
          }
        }
      },
    },
  }
}

module.exports = (config, { strapi }) => {

  return async (ctx, next) => {
    console.log(ctx)
    ctx.query.populate = populate,
    await next();
  };
  
};
