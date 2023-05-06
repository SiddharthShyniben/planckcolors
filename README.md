# planckcolors

[![Bundlephobia](https://badgen.net/bundlephobia/minzip/planckcolors)](https://bundlephobia.com/package/planckcolors)

Possibly the tiniest color library ever. 42 styles in barely 179 bytes of minified, gzipped, golfed, no dependency code.

```javascript
import color from 'nanocolor';

console.log(color.red('red'))
console.log(color.green('red'), color.red('red'))

console.log(color.redBg('red background'))
console.log(color.greenBg(color.red('red on green')))

console.log(color.bold(color.redBr('bright bold red'))
console.log(color.bold(color.redBrBG('bright red background +  bold')))
```

## Supported styles

These colors are supported with their variants `Bg`, `Br`(ight) and `BrBg`:

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white
- black

These additional styles are supported:

- reset
- bold
- dim
- italic
- underline
- blink
- reverse
- hide
- strike

## Credits

Thanks to [@Posandu](https://github.com/Posandu) for various improvements and ideas.
