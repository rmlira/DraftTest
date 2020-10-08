import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Lanche } from '../../core/models/lanche';
import { LancheService } from '../../core/services/lanche.service';

// TODO: Include global error handler

@Component({
  selector: 'test-lanches-container',
  templateUrl: './lanches-container.component.html',
})
export class LanchesContainerComponent implements OnInit, OnDestroy {
  onDestroy$: Subject<void> = new Subject<void>();
  lanches$: Observable<Lanche[]>;

  editLanche: Lanche;
  showLancheForm = false;

  constructor(private readonly lancheService: LancheService) {}

  ngOnInit(): void {
    this.loadLanches();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  loadLanches(): void {
    this.lanches$ = this.lancheService.getAll().pipe(takeUntil(this.onDestroy$));
  }

  onAddLanche(): void {
    this.editLanche = {} as Lanche;
    this.showLancheForm = true;
  }

  onEditLanche(lanche: Lanche): void {
    this.editLanche = lanche;
    this.showLancheForm = true;
  }

  onSaveLanche(lanche: Lanche): void {
    if (lanche.id) {
      this.lancheService.put(lanche.id, lanche).pipe(takeUntil(this.onDestroy$)).subscribe();
    } else {
      this.lancheService.add(lanche).pipe(takeUntil(this.onDestroy$)).subscribe();
    }

    this.loadLanches();
    this.showLancheForm = false;
  }

  onRemoveLanche(lanche: Lanche): void {
    this.lancheService.delete(lanche.id).pipe(takeUntil(this.onDestroy$)).subscribe();

    this.loadLanches();
    this.showLancheForm = false;
  }
}
