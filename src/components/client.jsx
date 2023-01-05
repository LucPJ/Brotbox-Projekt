import * as contentful from 'contentful';

export const client = contentful.createClient({
    //space: process.env.REACT_APP_CONTENTFUL_SPACE,
    //accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN

    space: 'nam9u7ux6gyj',
    accessToken: 'pZ6js2Dk3PNK9gdmmvdyJmcNybmBSDOnWp9NQFLskZA',
});