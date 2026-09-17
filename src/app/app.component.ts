import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({ selector: 'app-root', standalone: true, imports: [CommonModule, ReactiveFormsModule], templateUrl: './app.component.html' })
export class AppComponent implements AfterViewInit {
  @ViewChild('reactiveVideo') reactiveVideo?: ElementRef<HTMLVideoElement>;
  readonly currentYear = new Date().getFullYear();
  menuOpen = false;
  sent = false;
  submitting = false;
  contactForm = this.fb.group({ name: ['', Validators.required], email: ['', [Validators.required, Validators.email]], company: [''], message: ['', Validators.required] });
  constructor(private fb: FormBuilder) {}
  ngAfterViewInit() {
    const video = this.reactiveVideo?.nativeElement;
    if (video) { video.muted = true; video.defaultMuted = true; video.volume = 0; video.play().catch(() => undefined); }
  }
  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
  submit() {
    if (this.contactForm.invalid || this.submitting) { this.contactForm.markAllAsTouched(); return; }
    this.submitting = true;
    this.sent = false;
    window.setTimeout(() => {
      this.submitting = false;
      this.sent = true;
      this.contactForm.reset();
    }, 700);
  }
}
