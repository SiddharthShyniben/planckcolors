# planckcolors

Possibly the tiniest color library ever. 27 styles in barely 192 bytes of minified, gzipped, golfed, no dependency code.

```javascript
import color from 'nanocolor';

console.log(color.red('red'))
console.log(color.green('red'), color.red('red'))

console.log(color.redBg('red background'))
console.log(color.greenBg(color.red('red on green')))

console.log(color.bold(color.redBg('red background + bold'))
console.log(color.bold(color.red('red bold')))
```

## Supported styles

These colors are supported with their variant `Bg`:

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
