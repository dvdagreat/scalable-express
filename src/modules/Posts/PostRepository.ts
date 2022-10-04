import { Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { IPostRecord } from './interfaces/PostRecord';

@injectable()
export class PostRepository {
    public getAll() {
        const fakeData: IPostRecord[] = [
            {
                title: 'my title',
                description: 'my description',
                author: {
                    name: "divyesh",
                    age: 23
                }
            }
        ];
        
        return fakeData;
    }
} 