import { Router } from "express";

interface IBaseRouter {
    getRouter: () => Router
}

export {
    IBaseRouter
}