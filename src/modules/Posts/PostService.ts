import { inject, injectable } from 'tsyringe'
import { IPostRecord } from './interfaces/PostRecord';
import { PostRepository } from './PostRepository';

@injectable()
export class PostService {
    constructor(private postRepository: PostRepository) { }

    public getAllPosts(): IPostRecord[] {
        return this.postRepository.getAll();
    }
} 