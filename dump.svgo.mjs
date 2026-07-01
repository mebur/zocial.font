export default {
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    'convertStyleToAttrs',
    'removeRasterImages',
    'cleanupNumericValues',
    'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeViewBox',
    'cleanupEnableBackground',
    'removeHiddenElems',
    'removeEmptyText',
    'moveElemsAttrsToGroup',
    'collapseGroups',
    'moveGroupAttrsToElems',
    'convertShapeToPath',
    'convertTransform',
    {
      name: 'convertPathData',
      params: {
        negativeExtraSpace: false,
        straightCurves: false,
      },
    },
    'removeEmptyAttrs',
    'removeEmptyContainers',
    { name: 'mergePaths', params: { force: true } },
    'cleanupIds',
    'removeUnusedNS',
    {
      name: 'addWidthHeightFromViewBox',
      fn: () => ({
        element: {
          enter(node) {
            if (node.name !== 'svg') return;
            const { viewBox, width, height } = node.attributes;
            if (!viewBox || (width && height)) return;
            const parts = viewBox.trim().split(/[\s,]+/);
            if (parts.length === 4) {
              if (!width)  node.attributes.width  = parts[2];
              if (!height) node.attributes.height = parts[3];
            }
          },
        },
      }),
    },
  ],
};
