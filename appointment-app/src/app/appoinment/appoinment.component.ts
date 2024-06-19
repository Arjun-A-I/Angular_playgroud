import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrl: './appoinment.component.css'
})
export class AppoinmentComponent {

  newAppointmentTitle: string = ""
  newAppointmentDate: Date = new Date ()

  appointment: Appointment []= []

  addNewAppointment()
  {
if(this.newAppointmentTitle.trim().length && this.newAppointmentDate)
  {
      let newAppointment: Appointment={
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointment.push(newAppointment)
      this.newAppointmentTitle='';
      this.newAppointmentDate=new Date();

      alert(this.appointment.length);

       
    }
  }

}
