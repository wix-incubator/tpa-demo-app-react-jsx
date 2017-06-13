`en.json` will be automatically added to this directory (task: build:langs)

### To support more languages
1. Copy and rename `en.json` to desired locale name e.g. `ru.json`
2. Translate content of `ru.json`

##### Message Syntax

String/Message formatting is a paramount feature of React Intl and it builds on [ICU Message Formatting](http://userguide.icu-project.org/formatparse/messages) by using the [ICU Message Syntax](http://formatjs.io/guides/message-syntax/). This message syntax allows for simple to complex messages to defined, translated, and then formatted at runtime.

**Simple Message:**
```
Hello, {name}
```

**Complex Message:**
```
Hello, {name}, you have {itemCount, plural,
    =0 {no items}
    one {# item}
    other {# items}
}.
```

**See:** The [Message Syntax Guide](http://formatjs.io/guides/message-syntax/) on the [FormatJS website](http://formatjs.io/).
