/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PoseViewer {
        "aspectRatio": string;
        "autoplay": boolean;
        "height": string;
        "loop": boolean;
        "playbackRate": number;
        "src": string;
        "syncMedia": (media: HTMLMediaElement) => Promise<void>;
        "width": string;
    }
}
declare global {
    interface HTMLPoseViewerElement extends Components.PoseViewer, HTMLStencilElement {
    }
    var HTMLPoseViewerElement: {
        prototype: HTMLPoseViewerElement;
        new (): HTMLPoseViewerElement;
    };
    interface HTMLElementTagNameMap {
        "pose-viewer": HTMLPoseViewerElement;
    }
}
declare namespace LocalJSX {
    interface PoseViewer {
        "aspectRatio"?: string;
        "autoplay"?: boolean;
        "height"?: string;
        "loop"?: boolean;
        "onCanplaythrough$"?: (event: CustomEvent<void>) => void;
        "onEnded$"?: (event: CustomEvent<void>) => void;
        "onLoadeddata$"?: (event: CustomEvent<void>) => void;
        "onLoadedmetadata$"?: (event: CustomEvent<void>) => void;
        "onLoadstart$"?: (event: CustomEvent<void>) => void;
        "onPause$"?: (event: CustomEvent<void>) => void;
        "onPlay$"?: (event: CustomEvent<void>) => void;
        "playbackRate"?: number;
        "src"?: string;
        "width"?: string;
    }
    interface IntrinsicElements {
        "pose-viewer": PoseViewer;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pose-viewer": LocalJSX.PoseViewer & JSXBase.HTMLAttributes<HTMLPoseViewerElement>;
        }
    }
}
