import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-colourpicker',
  templateUrl: './colourpicker.component.html',
  styleUrls: ['./colourpicker.component.scss']
})
export class ColourpickerComponent implements OnInit {

  private storageKey = 'user-background';
  private defaultcolor = '#blue';
  userBackgroundcolor :any;

  ngOnInit(): void {
    this.loadBackgroundPreferences();
  }
    private loadBackgroundPreferences(): void {
      this.defaultcolor = this.getBackgroundColor();
      window.document.body.style.backgroundColor = this.getBackgroundColor()
    }
    removePreferences(): void {
      localStorage.removeItem(this.storageKey);
      this.loadBackgroundPreferences();
    }
    saveBackgroundColor(color: string): void {
      localStorage.setItem(this.storageKey, color);
      this.loadBackgroundPreferences();
    }
    private getBackgroundColor(): string {
      return localStorage.getItem(this.storageKey) || this.defaultcolor;
    }
    }
  

  


