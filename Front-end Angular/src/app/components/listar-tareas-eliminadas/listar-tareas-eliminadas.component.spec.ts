import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTareasEliminadasComponent } from './listar-tareas-eliminadas.component';

describe('ListarTareasEliminadasComponent', () => {
  let component: ListarTareasEliminadasComponent;
  let fixture: ComponentFixture<ListarTareasEliminadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTareasEliminadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTareasEliminadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
