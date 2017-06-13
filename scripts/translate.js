import * as fs from 'fs';
import path from 'path';
import {sync as globSync} from 'glob';
import {sync as mkdirpSync} from 'mkdirp';

const SRC_MESSAGES_BASE = './build/messages/src';
const SRC_MESSAGES_PATTERN = SRC_MESSAGES_BASE + '/**/*.json';
const DST_MESSAGES_BASE = './src/';
const LANG_DIR_NAME = 'lang';

let defaultMessages = globSync(SRC_MESSAGES_PATTERN)
  .map((filename) => {
    return {
      subDir: path.relative(SRC_MESSAGES_BASE, filename).split('/').shift(),
      filename: filename
    };
  })
  .map((item) => {
    return {
      subDir: item.subDir,
      content: fs.readFileSync(item.filename, 'utf8')
    };
  })
  .map((file) => {
    return JSON.parse(file.content).map(
      (item) => Object.assign({subDir: file.subDir}, item)
    );
  })
  .reduce((collection, descriptor) => {
    descriptor.forEach(({id, defaultMessage, subDir}) => {
      if (collection[subDir] && collection[subDir].hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }
      if (!collection[subDir]) collection[subDir] = {};
      collection[subDir][id] = defaultMessage;
    });

    return collection;
  }, {});

Object.keys(defaultMessages).map(function (subDir) {
  let destDir = DST_MESSAGES_BASE + subDir + '/' + LANG_DIR_NAME;
  mkdirpSync(destDir);
  fs.writeFileSync(destDir + '/en.json',
    JSON.stringify(defaultMessages[subDir], null, 2));
});
