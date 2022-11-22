import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import header from './header';
import about from './about';
import skills from './skills';
import projects from './projects';
import contact from './contact';
import footer from './footer';
import social from './social';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    header,
    social,
    about,
    skills,
    projects,
    contact,
    footer,
  ]),
});
