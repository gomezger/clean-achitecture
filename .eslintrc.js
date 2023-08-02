module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@react-native',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    '@typescript-eslint/eslint-plugin',
    'tsdoc',
    'eslint-plugin-tsdoc',
  ],
  rules: {
    //comentarios ts doc
    'tsdoc/syntax': 'error',
    // cuando no se catchea excepsiones
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    //maximo permitido de cada linea
    'max-len': ['error', {code: 200}],
    // permitir estilos en linea
    'react-native/no-inline-styles': 'off',
    // no chequea los use effect
    'react-hooks/exhaustive-deps': 'off',
    // se comenta ya que al guardar se acomoda el codigo
    'prettier/prettier': 'off',
  },
};
