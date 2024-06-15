import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrl: './appoinment.component.css'
})
export class AppoinmentComponent {

  newAppointment: string = ""
  newAppointmentDate: Date = new Date ()

  appointment: Appointment []= []

  addNewAppointment()
  {
    alert(this.newAppointment+" "+this.newAppointmentDate)
  }

}
