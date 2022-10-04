import { NextFunction, Request, Response } from "express";

interface IBaseMiddleware {
    handle: (req: Request, res: Response, next: NextFunction) => void
}

export {
    IBaseMiddleware
}