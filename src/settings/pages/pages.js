define(['./main/main', './settings/settings', './layout/layout', './design/design', './animations/animations',  './support/support'], function (main, settings, layout, design, animations, support) {
    return [
        {
            label: 'Main',
            content: main
        },
        {
            label: 'Settings',
            content: settings
        },
        {
            label: 'Layout',
            content: layout
        },
        {
            label: 'Design',
            content: design
        },
        {
            label: 'Animations',
            content: animations
        },
        {
            label: 'Support',
            content: support
        }
    ]
});