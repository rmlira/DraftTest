import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Lanche } from '../../core/models/lanche';

@Component({
  selector: 'test-edit-lanche',
  templateUrl: './edit-lanche.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class EditLancheComponent implements OnChanges {
  @Input() lanche: Lanche;
  @Output() saveLanche = new EventEmitter<Lanche>();
  @Output() removeLanche = new EventEmitter<Lanche>();

  lancheForm: FormGroup;

  constructor() {
    this.lancheForm = new FormGroup({
      nome: new FormControl(''),
    });
  }

  ngOnChanges(): void {
    if (this.lanche.id) {
      this.lancheForm.patchValue(this.lanche);
    } else {
      this.lancheForm.patchValue({ nome: '' });
    }
  }

  onSubmit(): void {
    if (this.lancheForm.valid) {
      const lanche = this.lancheForm.value as Lanche;
      this.saveLanche.emit(lanche);
    }
  }

  onRemove(): void {
    this.removeLanche.next(this.lanche);
  }
}
