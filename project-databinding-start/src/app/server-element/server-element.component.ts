import {
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core'
import { ServerElement } from './server-element.model'

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: ServerElement
  @Input() name: string
  @ViewChild('heading', { static: true }) header: ElementRef;

  constructor() {
    console.log('Constructor called!')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called!')
    console.log('Text Content (ng on init):', this.header.nativeElement.textContent)
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!')
    console.log('Text Content (after view init):', this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!')
  }
}
