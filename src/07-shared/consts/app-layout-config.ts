const zIndex = 10;

const layoutConfig = {
    header: {
        zIndex,
        height: {
            xl: '80px',
            lg: '80px',
            md: '64px',
            sm: '64px',
            base: '64px',
        },
        position: { top: 0 },
    },
    footer: {
        zIndex,
        height: {
            xl: '0px',
            lg: '0px',
            md: '84px',
            sm: '84px',
            base: '84px',
        },
        position: { bottom: 0 },
    },
    nav: {
        zIndex,
        height: 'calc(100vh - 80px - 0px)',
        width: '256px',
        position: {
            top: '80px',
            left: 0,
        },
    },
    sider: {
        zIndex,
        height: 'calc(100vh - 80px - 0px)',
        width: '280px',
        position: {
            top: '80px',
            right: 0,
        },
    },
};

export default layoutConfig;
