import { Request, Response } from "express";

interface IBaseController {
    process: (req: Request, res: Response) => Response | Promise<Response>
}

export {
    IBaseController
}