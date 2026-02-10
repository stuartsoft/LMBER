import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { OLModel } from '../../types/OLModel';

@Injectable({
  providedIn: 'root',
})
export class OllamaService {
  httpClient = inject(HttpClient)

  availableModels = signal([] as OLModel[])


  constructor() {
    this.httpClient.get('http://localhost:11434/api/tags').subscribe(response=>
      {
        this.availableModels.set((response as any)["models"] as OLModel[])
      }
    )
  }
}
