export interface UserMessage {
    id: number;
    username: string;
    message: string;
    created_at: Date;
}


export interface PaginatedMessages {
    messages: UserMessage[];
    total: number;
    page: number;
    totalPages: number;
}