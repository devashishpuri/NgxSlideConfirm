# MatSlideConfirm

MatSlideConfirm is an Angular UI element which works tells if user swiped through it (The new trendy alternative to Popups).

## Demo

https://stackblitz.com/edit/angular-ivy-jvhp5h

## Installation

```bash
npm install ngx-slide-confirm --save
```

## Usage

`sample.module.ts`

```typescript
import { NgxSlideConfirmModule } from 'ngx-slide-confirm';
imports: [ NgxSlideConfirmModule ],
```

`sample.component.html`

```html
<div style="max-width: 320px;">
  <ngx-slide-confirm
    hint="Slide to confirm"
    (confirm)="onConfirm()"
  ></ngx-slide-confirm>
</div>
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
