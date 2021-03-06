import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitButtonComponent } from './split-button.component';
import { PopoverModule } from '../../popover';
import { ButtonComponent } from '../button.component';

describe('SplitButtonComponent', () => {
    let component: SplitButtonComponent;
    let fixture: ComponentFixture<SplitButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [PopoverModule],
            declarations: [
                ButtonComponent,
                SplitButtonComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SplitButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
