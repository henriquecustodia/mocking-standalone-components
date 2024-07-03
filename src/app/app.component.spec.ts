import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FakeCustomComponent } from '../__mocks__/custom.component.mock';

describe('AppComponent', () => {
  it('deve renderizar CustomComponent', () => {
    TestBed.overrideComponent(AppComponent, {
      set: {
        imports: [FakeCustomComponent],
      },
    });

    const fixture = TestBed.createComponent(AppComponent);

    const customComponentElement = fixture.debugElement.query(By.css('app-custom'));

    expect(customComponentElement)
      .withContext('deve renderizar Custom Componente')
      .toBeTruthy();

    // // faz um Deep Testing quando CustomComponent quando não é feito o mock do componente  
    // const text = customComponentElement.query(By.css('p')).nativeElement.textContent;
    
    // expect(text)
    //   .withContext('deve renderizar o texto custom de custom component')
    //   .toBe('custom works!');
  });
});
