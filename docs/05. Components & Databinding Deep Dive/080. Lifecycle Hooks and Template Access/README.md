# Жизненный цикл и доступ к шаблону

Доступ к контенту рефа, может быть доступен только после рендера. Т.е в `ngOnInit` будет пустая переменная, а в `ngAfterViewInit`
нет.

```ts
ngOnInit(): void {
    console.log('ngOnInit called!')
    console.log('Text Content (ng on init):', this.header.nativeElement.textContent)
}
ngAfterViewInit() {
    console.log('ngAfterViewInit called!')
    console.log('Text Content (after view init):', this.header.nativeElement.textContent)
}
```
