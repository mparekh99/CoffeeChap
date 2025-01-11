// module.exports = function(api) {
//     api.cache(true);
//     return {
//       presets: ['babel-preset-expo'],
//       env: {
//         production: {
//           plugins: ['react-native-paper/babel'],
//         },
//       },
//     };
//   };

// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};