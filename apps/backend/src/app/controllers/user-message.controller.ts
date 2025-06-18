import { Body, Controller, Get, HttpCode, Post, Query } from "@nestjs/common";
import { UserMessageService } from "../services/user-message.service";


@Controller('user-messages')
export class UserMessageController {
    constructor(private readonly userMessageService: UserMessageService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() body: { username: string; message: string }) {
    const { username, message } = body;
    return await this.userMessageService.create(username, message);
  }


  @Get()
  async findAll(@Query('page') page:number=1){
    const [messages,total]=await this.userMessageService.findAll(page)
    return {
      messages,
      total,
      page: +page,
      totalPages: Math.ceil(total/3)
    }
  }

  @Post('test-data')
  @HttpCode(201)
  async createTestData(){
    await this.userMessageService.createTestMessage()
    return {
      message: 'Test data created successfully'
    }
  }
}