/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemList } from 'widgets/Sidebar/model/item';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    }

    const itemsList = useMemo(() => SidebarItemList.map((item) => (
        <SidebarItem
            collapsed={collapsed}
            key={item.path}
            item={item}
        />
    )), [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}
        >
            <Button data-testid="sidebar-toggle" size={ButtonSize.l} square theme={ButtonTheme.BACKGROUND_INVERTED} className={classes.collapsedBtn} onClick={onToggle}>
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classes.items}>
                {itemsList}
            </div>
            <div className={classes.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={classes.lang} />
            </div>
        </div>
    );
})

