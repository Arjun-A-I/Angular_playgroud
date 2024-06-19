import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrl: './appoinment.component.css'
})
export class AppoinmentComponent implements OnInit {

  newAppointmentTitle: string = ""
  newAppointmentDate: Date = new Date()

  appointment: Appointment[] = []

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointments");
    this.appointment = savedAppointments ? JSON.parse(savedAppointments) : [];
  }

  addNewAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }

      this.appointment.push(newAppointment)
      this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();

      localStorage.setItem("appointments", JSON.stringify(this.appointment))


    }
  }

  deleteAppointment(index: number) {
    this.appointment.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(this.appointment))

  }

}
