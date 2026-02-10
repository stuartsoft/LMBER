import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { OLModel } from '../../types/OLModel';

@Injectable({
  providedIn: 'root',
})
export class OllamaService {
  httpClient = inject(HttpClient)
  availableModels = signal([] as OLModel[])
  selectedModel = signal("")


  constructor() {
    this.httpClient.get('http://localhost:11434/api/tags').subscribe(response => {
      let models = (response as any)["models"] as OLModel[]
      this.availableModels.set(models)
      if (models.length > 0) {
        console.log("setting selected model")
        this.selectedModel.set(models[0].name)
      }
    }
    )
  }
}
