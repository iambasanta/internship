# Create a custom component

Create a custom component component in botpress

---

## Guides

#### Copy `custom-component` from `examples` to `modules` directory

```bash
cp examples/custom-component/ modules/ -r
```

#### Change into `custom-component` directory

```bash
cd modules/custom-component
```

#### Create new `js file` in `content-type` directory

here write schemea; `content-type` will structure our ui

#### Create new `react component` in `views/lite/components` directory

`react component` will be rendered in our chat flow

export this component from `views/lite/index.jsx`

#### Build and watch

```bash
yarn build && yarn watch
```

#### Usage

- Enable this module from studio
- Add `content type ID` to `bot.config.json` of for your bot
