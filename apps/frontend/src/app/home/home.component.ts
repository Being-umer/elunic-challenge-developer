import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MessageModule } from 'primeng/message';
import { ListboxModule } from 'primeng/listbox';
import { CardModule } from 'primeng/card';
import { UserMessage } from '../interfaces/user-message.interface';
import { MessageService } from '../services/message.service';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MessageModule, ListboxModule, CardModule, FormsModule, TableModule, ButtonModule, InputTextModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit {
  message: UserMessage[] = [];
  totalRecords = 0;
  currentPage = 1;
  newMessage = {
    username: '',
    message: ''
  }

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.loadMessages(1)
  }

  loadMessages(page: number) {
    this.messageService.getMessages(page).subscribe(response => {
      this.message = response.messages;
      this.totalRecords = response.total;
      this.currentPage = response.page;
    })
  }

  onPageChange(event: any) {
    this.loadMessages(event.page + 1);
  }


  submitMessage() {
    if (this.newMessage.username && this.newMessage.message) {
      this.messageService.createMessage(this.newMessage.username, this.newMessage.message).subscribe(() => {
        this.loadMessages(1)
        this.newMessage = { username: '', message: '' }
      })
    }
  }


  get totalPages() {
    return Math.ceil(this.totalRecords / 3) || 1;
  }
} 
