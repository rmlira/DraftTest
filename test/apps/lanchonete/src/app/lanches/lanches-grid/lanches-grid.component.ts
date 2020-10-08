import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Lanche } from '../../core/models/lanche';

@Component({
  selector: 'test-lanches-grid',
  templateUrl: './lanches-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LanchesGridComponent {
  @Input() lanches: Lanche[];
  @Output() addLancheRequest = new EventEmitter();
  @Output() editLancheRequest = new EventEmitter<Lanche>();

  trackLanche(_index: number, item: Lanche) {
    return item.id;
  }

  addLanche(): void {
    this.addLancheRequest.next();
  }

  editLanche(lanche: Lanche): void {
    this.editLancheRequest.next(lanche);
  }
}
