import { RouteModel } from "./RouteModel";

export interface RouteMatch 
{
    route: RouteModel;
    params?: Record<string, string>;
}