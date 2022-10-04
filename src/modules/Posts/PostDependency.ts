import { container } from "tsyringe";

import { BaseModuleDependency } from "../../interfaces/ModuleDependency";

import { GetAllPostsController } from "./controllers";
import { GetAllPostsMiddleware } from "./middleware";

export default class ModuleDependency implements BaseModuleDependency {
    public registerDependency = (): void => {
        container.register('GetAllPostsController', { useClass: GetAllPostsController });
        container.register('GetAllPostsMiddleware', { useClass: GetAllPostsMiddleware });
    }
}