import { RouteModel } from "@interfaces/RouteModel";
import { Home } from "@pages/Home";
import { HomeLazy } from "@pages/LazyLoading/HomeLazy";
import CharacterOfRM from "@pages/RickMorty/CharacterOfRM";
import HomeRick from "@pages/RickMorty/HomeRick";
import { Error404 } from "@templates/Error404";

export const routes: RouteModel[] = [

    {
        path: '/',
        template: Home
    },
    {
        path: '/about-me',
        template: () => '<h1>ABOUT</h1>'
    },
    {
        path: '/resume',
        template: () => '<h1>RESUME</h1>'
    },
    {
        path: '/sample-rick',
        template: HomeRick
    },
    {
        path: '/sample-rick/:id',
        template: CharacterOfRM
    },
    {
        path: '/lazy-loading',
        template: HomeLazy
    },
    {
        path: '**',
        template: Error404
    }

]