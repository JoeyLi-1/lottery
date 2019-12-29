declare module "react-animations" {
    namespace DeepLinking {
        function addScheme(url: string): void;
        function addRoute(url: string, callback: any): void;
    }
    export = DeepLinking
}

declare module 'react-skylight' {
    import * as React from 'react';
    namespace SkyLight {
        interface CommonProps {
            hideOnOverlayClicked?: any;
            ref?: any;
            title?: any;
            transitionDuration?: any;
            afterClose?: any;
            afterOpen?: any;
            beforeClose?: any;
            beforeOpen?: any;
            onOverlayClicked?: any;
            dialogStyles?: any;
            closeOnEsc?: any;
            overlayStyles?: any;
            showOverlay?: any;
            titleStyle?: any;
        }

    export class SkyLight extends React.Component<CommonProps, any> { }
    }
    export = SkyLight.SkyLight;
}