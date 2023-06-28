import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceNameService {

  constructor(
    private toastController: ToastController
  ) { }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Data Not Find !',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }
}

