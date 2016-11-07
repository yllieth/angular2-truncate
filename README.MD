# angular2-truncate

A simple angular2 pipe which truncate strings.

## Installation

To install this library, run:

```bash
$ npm install angular2-truncate --save
```

## Usage

Add the declaration in your `app.module.ts` file:
```typescript
import { TruncatePipe } from 'angular2-truncate';
...
@NgModule({
  declarations: [
    TruncatePipe
  ]
})
```

Use the pipe directly in your HTML files/templates:
```html
<span>{{ name }}</span>
<!-- angular2-truncate -->

<span>{{ name | truncate }}</span>
<!-- angular2-t... -->

<span>{{ name | truncate : 6 }}</span>
<!-- angula... -->

<span>{{ name | truncate : 6 : '___' }}</span>
<!-- angula___ -->

<span>{{ name | truncate : 6 : '___' : 'left' }}</span>
<!-- ___uncate -->

<span>{{ name | truncate : 6 : null : 'middle' }}</span>
<!-- ang...ate -->
```

### Parameters
| Parameter name | Type   | Default value | Comment                                             |
| -------------- | ------ | ------------- | --------------------------------------------------- |
| limit          | number | 10            |                                                     |
| trail          | string | '...'         |                                                     |
| position       | string | 'right'       | Allowed values are: `'left'`, `'middle'`, `'right'` |

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Sylvain RAGOT](sylvnimes@hotmail.com)
