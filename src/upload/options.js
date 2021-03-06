export default {
    // SVGO Options
    // refer from @material-ui/icons
    // https://github.com/mui-org/material-ui/blob/master/packages/material-ui-icons/builder.js#L18
    svgo: {
      floatPrecision: 2,
      plugins: [
        { cleanupAttrs: true },
        { removeDoctype: true },
        { removeXMLProcInst: true },
        { removeXMLNS: true },
        { removeComments: true },
        { removeMetadata: true },
        { removeTitle: true },
        { removeDesc: true },
        { removeUselessDefs: true },
        { removeEditorsNSData: true },
        { removeEmptyAttrs: true },
        { removeHiddenElems: true },
        { removeEmptyText: true },
        { removeEmptyContainers: true },
        { removeViewBox: false },
        { cleanupEnableBackground: true },
        { convertStyleToAttrs: true },
        { convertColors: true },
        { convertPathData: false },
        { convertTransform: true },
        { removeUnknownsAndDefaults: true },
        { removeNonInheritableGroupAttrs: true },
        { removeUselessStrokeAndFill: true },
        { removeUnusedNS: true },
        { cleanupIDs: true },
        { cleanupNumericValues: true },
        { moveElemsAttrsToGroup: true },
        { moveGroupAttrsToElems: true },
        { collapseGroups: true },
        { removeRasterImages: false },
        { mergePaths: true },
        { convertShapeToPath: true },
        { sortAttrs: true },
        { removeDimensions: true },
        { removeAttrs: { attrs: ['class'] } },
      ],
    },
    prettier: {
      parser: 'babylon',
      singleQuote: true
    }
  }
