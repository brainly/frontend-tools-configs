# General

### Date/datetime handling
Do not use `Date()` and `Date().now`, use helper functions instead.

### Default exports
If a file contains one main component / class, function, **do** export it as default.

**Do not** use default export to group all module exports.

Good:
```js
// in ./MyComponent.jsx
export default class MyComponent ...
```
Bad:
```js
const someFunction = () ...
const someOtherFunction = () ...

export default {
  someFunction,
  someOtherFunction,
}
```


# React

### `classNames`
Use `classNames` helper always, when there is more than one class name. Use string for a single class name.

Good:
```js
  <MyComponent className="single-class" />
  
  <MyComponent className={classNames('first-class', 'second-class')} />
```
Bad:
```js
  <MyComponent className={classNames('single-class')} />
  
  <MyComponent className="first-class second-class" />
```

### Using `ref`s
Do not use `ref` to access a Component instance - we want to keep our components API as clean and closed as possible.

It's OK to use `ref` for accessing DOM elements:

Good:
```js
<iframe ref={this.iframeRef} />
```
Bad:
```js
<SomeComponent ref={this.iframeRef} />
```

#### Exposing child `ref` to parents
When you need to let a parent components to control a child element, it's a good pattern to expose a rendered element `ref`, like:
```js
const SomeComponent = ({iframeRef}) => {
  return <iframe ref={iframeRef} />
}
```

### Handler props

Handler props names should start with `on`.

The actual implementation should start with `handle`.

```js
  handleSomeEvent = () => ...
  
  render() {
    return (
      <SomeChild onSomeEvent={this.handleSomeEvent} />
    )
  }
```

# Redux

### Action format
Use [Flux Standard Actions](https://github.com/acdlite/flux-standard-actios).

### Naming actions

To name action triggers (action dispatched *before* the actual event happens): `START_REQUEST`, `OPEN_MODAL` 

To name actions dispatching results (*after* event happened): `REQUEST_STARTED`, `MODAL_OPENED`

### Naming action creators

Action creators should be named like normal *"imperative"* functions, no pre/suffixes:

Good:
```js
const fetchSomeData = () => ...
```
Bad:
```js
const fetchSomeDataAction = () => ...
const getFetchSomeDataAction = () => ...
const fetchSomeDataActionCreator = () => ...
```

### Async / sagas
We use `thunk` middleware + `async`/`await` for actions with side-effects and sagas:
```js
const doSomeAsyncStuff = blah => {
  return async dispatch => {
    const result = await someAsyncStuff(blah)
    dispatch(onAsyncStuffFinished(result))
  }
}
```

# Testing

### Use `describe` and `it`
Good:
```js
describe('Something', () => {
  it('does something', () => {
  })
})
```
Bad:
```js
test('something', () => {
})
```

### Use top level `describe`
Good:
```js
describe('Something', () => {
  it('does something', () => {
  })
})
```
Bad:
```js
// top level
it('does something', () => {
})
```

### Test case description
Keep test description simple and short, use correct English grammar.

Keep in mind that nested describes + it should create a sentence, so:
```js
describe('A', () => {
  describe('B', () => {
    it('C', () => {
     ...
```
results in a sentence: *"A B C"*

Do not use uppercase/punctuation to start/end sentences though.

Good:
```js
describe('myUnit', () => {
  it('works', () => {
  })
})
```
Bad:
```js
// Bad - "it return value" is not a sentece, "it returns correct value" is.
it('return value', () => {
})
// Bad - "should do" -> "does".
it('shuold do something', () => {
})
// Bad - uppercase + '.'.
it('Does something.', () => {
})
```

### Code elements in tests descriptions
Use names from code in descriptions, keep the same case: `SomeClass`, `someVariable`, `SOME_CONST`

Use `<SomeComponent />` when referring to React Components or Elements.

Use `someFunction()` when referring to functions.

Good:
```js
describe('<SomeComponent />', () => {
  it('renders <SomeChildComponent />', () => {
  })
})
describe('someFunction()', () => {
  it('returns SOME_CONST', () => {
  })
})
```
Bad:
```js
describe('SomeComponent', () => {
  it('renders SomeChildComponent', () => {
  })
})
describe('someFunction', () => {
  it('returns some const', () => {
  })
})
```

### React component render test
If you create a *it renders without crashing* test, skip the unnecessary `expect`.

Good:
```js
describe('<Some Component />', () => {
  it('renders without crashing', () => {
    shallow(<SomeComponent {...requiredProps} />);
  })
})
```
Bad:
```js
describe('<Some Component />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<SomeComponent {...requiredProps} />);
    
    // Bad - this expect *always* passes.
    // If the render crashes the test will fail on the previous line.
    expect(wrapper).toHaveLength(1);
  })
})
```

### Enzyme `shallow` vs `mount`
Avoid using `mount`, it usually means you're testing to much stuff in one test.
#### Event handling
`ShallowWrapper.simulate()` API does not mock events (unlike `mount`), but prefer to mock events yourself, than using `mount` for this reason:

Good:
```js
wrapper = shallow(<MyComponent />)
wrapper.simulate('click', {whatever: 'blah'})
```
Bad:
```js
wrapper = mount(<MyComponent />)
wrapper.simulate('click')
```

### Enzyme selectors
Use imported functions/constructors to match user-defined components, avoid using strings for that.

If you need to narrow down the selection by props, use `.filter()` and object selector syntax (see example).

Avoid using DOM selectors by id, class, unless testing some low-level components manipulating DOM.

Good:
```js
wrapper.find('div')
wrapper.find(SomeComponent)
wrapper.find(SomeComponent).filter({someProps: value})

// Good, but avoid in most cases, only needed in low-level components.  
wrapper.find('.class-name')
```
Bad:
```js
// Bad - selecting user-defined component by display name - use constructor.
wrapper.find('SomeComponent')
// Bad - selecting with string syntax - use filter and object syntax.
wrapper.find('SomeComponent[someProps=value]')
```