import { RouteMatch } from "@interfaces/RouteMatch";
import { RouteModel } from "@interfaces/RouteModel";
import { GetSlugsFromURL } from "@utils/GetSlugsFromURL";

export class Router {

    private _routes: RouteModel[];

    constructor(routes: RouteModel[]) {
        this._routes = routes;
        this._loadInitialRoute();
    }

    private _loadInitialRoute(): void {
        this.loadRoute(...GetSlugsFromURL());
    }

    public async loadRoute(...urlSegs: string[]): Promise<void> {
        const matchedRoute = this._matchUrlToRoute(urlSegs);
        
        if(!matchedRoute) {
            const get404 = this.show404OrError();
            const routerOutElm = document.querySelectorAll('[data-router]')[0];
            routerOutElm.innerHTML = get404.template() as string;
            return;
        }

        // const url = `/${urlSegs.join('/')}`;
        // history.pushState({}, 'This works', url);

        const routerOutElm = document.querySelectorAll('[data-router]')[0];
        routerOutElm.innerHTML = await matchedRoute.route.template(matchedRoute.params);
    }

    private _matchUrlToRoute(urlSegs: string[]): RouteMatch {
        for (const route of this._routes) {
            const routePathSegs = route.path.split('/').slice(1);
            if (routePathSegs.length !== urlSegs.length) continue;

            let params: Record<string, string> = {};

            const isMatch = routePathSegs.every((routePathSeg, i) => {
                if (routePathSeg.startsWith(':')) {
                    const paramName = routePathSeg.slice(1);
                    params[paramName] = urlSegs[i];
                    return true;
                }
                return routePathSeg === urlSegs[i];
            });

            if (isMatch) {
                const matchedRoute: RouteMatch = { route: route, params: params };
                return matchedRoute;
            }
        }

        return null;
    }


    private show404OrError(): RouteModel
    {
        const get404 = this._routes.find(route => route.path == '**');
        if(!get404) throw new Error('PAGE DONT SUPPORTED YET!');
        return get404;
    }

}