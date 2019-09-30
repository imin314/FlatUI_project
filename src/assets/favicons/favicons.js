const faviconsContext = require.context(
  `!!file-loader?name=assets/favicons/[name].[ext]!.`,
  true,
  
);
faviconsContext.keys().forEach(faviconsContext);