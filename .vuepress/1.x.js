module.exports = [
  {
    title: "Guide",
    collapsable: false,
    children: prefix('guide', [
        '',
        'using-vue',
    ]),
  }, {
    title: "Configuration",
    collapsable: false,
    children: prefix('config', [
        '',
    ]),
  }
]


function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`)
}
