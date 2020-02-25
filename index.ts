import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Generated';
const colours = {
  black:        '#000000',
  grey:         '#808080',
  white:        '#FFFFFF',
  blue:         '#5555FF',
  red:          '#FF5555',
  dark_red:     '#802525',
  dark_green:   '#258025',
  consta:       '#AE21AE',
}

const colorSet: IColorSet = {
  base: {
    // workbenchForeground, editorForeground*
    foreground: colours.grey,

    // background, comment*, invisibles, guide
    background: colours.black,

    // boolean*, identifier*, keyword*, storage, cssClass
    color1: colours.dark_red,

    // string, stringEscape, cssId
    color2: colours.consta,

    // function, class*, classMember, type*, cssTag
    color3: colours.red,

    // functionCall, number*
    color4: colours.red,
  },
  syntax: {
    comment: colours.dark_green,
    class: colours.red,
    type: colours.red,
    number: colours.blue,
    boolean: colours.blue,
    keyword: colours.dark_red,
    identifier: colours.white,
  },
  ui: {
    cursor: colours.dark_green,
  },
  overrides: {
    'editor.foreground': colours.grey,
  },
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
