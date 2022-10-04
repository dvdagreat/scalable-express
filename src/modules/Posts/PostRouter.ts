import { Router } from 'express'
import { inject, injectable } from 'tsyringe'
import { IBaseController, IBaseMiddleware, IBaseRouter } from '../../interfaces';

@injectable()
export class PostRouter implements IBaseRouter {
    private router: Router;
    constructor(
        @inject('GetAllPostsController') getAllPostsController: IBaseController, 
        @inject('GetAllPostsMiddleware') getAllPostsMiddleware: IBaseMiddleware) {
        this.router = Router();
        this.router.get('/', getAllPostsMiddleware.handle, getAllPostsController.process);
    }

    public getRouter() {
        return this.router;
    }
} 