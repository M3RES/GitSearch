import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoSearchComponent } from './github-repo-search.component';

describe('GithubRepoSearchComponent', () => {
  let component: GithubRepoSearchComponent;
  let fixture: ComponentFixture<GithubRepoSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepoSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubRepoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
