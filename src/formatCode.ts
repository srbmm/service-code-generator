import * as prettier from "prettier";
const config = {
  trailingComma: "es5",
  semi: true,
  singleQuote: false,
  printWidth: 100,
  htmlWhitespaceSensitivity: "ignore",
  quoteProps: "consistent",
  arrowParens: "always",
  useTabs: false,
  tabWidth: 2,
  bracketSpacing: true,
  vueIndentScriptAndStyle: true,
};

export const formatCode = async (code: string) => {
  const res = await prettier.format(code, {
    parser: "typescript",
    trailingComma: "es5",
    semi: true,
    singleQuote: false,
    printWidth: 100,
    htmlWhitespaceSensitivity: "ignore",
    quoteProps: "consistent",
    arrowParens: "always",
    useTabs: false,
    tabWidth: 2,
    bracketSpacing: true,
    vueIndentScriptAndStyle: true,
  });
  return res;
};
