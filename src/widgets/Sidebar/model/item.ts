import AboutIcon from 'shared/assets/icons/About.svg';
import MainIcon from 'shared/assets/icons/Home.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: MainIcon,
    }
]