import { Router } from "@routes/Router";
import { routes } from "@routes/Routes";
import { GetSlugsFromURL } from "@utils/GetSlugsFromURL";

const router: Router = new Router(routes);

const routerAsync = async() => {
    await router.loadRoute(...GetSlugsFromURL())
}

export default routerAsync;