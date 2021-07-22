# Используем HostListener чтобы слушать и размещать события

В Angular есть такой декоратор, `HostListener`. Он позволяет слушать события с элемента, на который повешана директива.

```ts
@HostListener('mouseenter') mouseEnter(eventData: Event) {
  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow')
}
```
