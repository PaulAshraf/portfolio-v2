// The three candidate designs, switchable at runtime. The active one is stored
// on <html data-design> (set before paint by the script in _document.jsx) and
// in localStorage. `?design=<id>` in the URL also selects one.
export const DESIGNS = [
  { id: 'margin', name: 'Margin' },
  { id: 'plain', name: 'Plaintext' },
  { id: 'axis', name: 'Axis' },
]

export const DEFAULT_DESIGN = 'margin'

export const designScript = `
  (function () {
    var ids = ${JSON.stringify(DESIGNS.map((design) => design.id))};
    var design = '${DEFAULT_DESIGN}';
    try {
      var fromUrl = new URLSearchParams(window.location.search).get('design');
      var stored = window.localStorage.design;
      if (ids.indexOf(fromUrl) > -1) {
        design = fromUrl;
        window.localStorage.design = fromUrl;
      } else if (ids.indexOf(stored) > -1) {
        design = stored;
      }
    } catch (error) {}
    document.documentElement.dataset.design = design;
  })();
`

export function setDesign(id) {
  document.documentElement.dataset.design = id
  try {
    window.localStorage.design = id
  } catch (error) {}
}
