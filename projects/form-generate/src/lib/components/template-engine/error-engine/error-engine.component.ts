import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";

/**
 * Обработчик ошибок в FormControl
 *
 */
@Component({
  selector: 'fm-error-engine',
  templateUrl: './error-engine.component.html',
  styleUrls: ['./error-engine.component.scss']
})
export class ErrorEngineComponent implements OnInit {

  @Input() ftt: AbstractControl;

  constructor() { }

  ngOnInit(): void {

  }

}
