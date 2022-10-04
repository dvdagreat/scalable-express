import { Request, Response } from "express";
import { IBaseController } from "../../../interfaces";
import { PostService } from "../PostService";

export default class GetAllPostsController implements IBaseController {
    constructor(private postService: PostService) { }
    public process = (req: Request, res: Response): Response | Promise<Response>=> {
        return res.send(this.postService.getAllPosts());
    }
}