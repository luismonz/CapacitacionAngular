export interface RouteModel
{
    path: string;
    template: (params?: Record<string, string> | Record<number, number>) => string | Promise<string>;
}