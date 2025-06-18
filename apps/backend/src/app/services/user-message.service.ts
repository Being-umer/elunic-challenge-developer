import { InjectRepository } from "@nestjs/typeorm";
import { UserMessage } from "../entities/user-message.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";


@Injectable()
export class UserMessageService {
    constructor(
        @InjectRepository(UserMessage)
        private userMessageRepository: Repository<UserMessage>,
    ) {}

    async create(username:string, message:string): Promise<UserMessage> {
        const userMessage = this.userMessageRepository.create({username, message});
        return this.userMessageRepository.save(userMessage);
    }

    async findAll(page:number=1): Promise<[UserMessage[],number]> {
        const take=3 // as we need to show 3 messages per page
        const skip=(page-1)*take

        return this.userMessageRepository.findAndCount({
            take,
            skip,
            order:{
                created_at: 'DESC'
            }
        })
    }

    async createTestMessage():Promise<void>{
        const testMessages= Array.from({length:10},(_,i)=>({
         username: `User${i+1}`,
         message: `This is a test message from User${i+1}`
        }))   

        await Promise.all(testMessages.map(message=>this.create(message.username,message.message)))
    }
}