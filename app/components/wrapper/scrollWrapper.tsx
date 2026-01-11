import React, { useRef, ReactNode } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import "./style.css";

interface CustomScrollWrapperProps {
    children: ReactNode;
    height?: string | number;
    onScroll?: (scrollTop: number) => void;
}

export default function CustomScrollWrapper({
    children,
    height = "100vh",
    onScroll,
}: CustomScrollWrapperProps) {
    const scrollbarRef = useRef<{ update: () => void } | null>(null);

    return (
        <div
            className="scroll-container group"
            style={{ height, position: "relative", scrollBehavior: "smooth" }}
            onMouseEnter={() => (scrollbarRef.current)?.update()}
            onMouseLeave={() => (scrollbarRef.current)?.update()}
        >
            <Scrollbars
                ref={scrollbarRef}
                autoHide
                autoHideTimeout={600}
                autoHideDuration={300}
                style={{ height: "100%" }}
                onScrollFrame={(values) => {
                    if (onScroll) onScroll(values.scrollTop);
                }}
                renderTrackVertical={({ style, ...props }) => (
                    <div
                        {...props}
                        className="custom-scrollbar-track"
                        style={{
                            ...style,
                            right: "2px",
                            bottom: "2px",
                            top: "2px",
                            borderRadius: "3px",
                            transition: "opacity 0.3s ease",
                            opacity: 0,
                        }}
                    />
                )}
                renderThumbVertical={({ style, ...props }) => (
                    <div
                        {...props}
                        style={{
                            ...style,
                            background:
                                "linear-gradient(180deg, rgba(59,130,246,0.6), rgba(37,99,235,0.6))",
                            borderRadius: "4px",
                            backdropFilter: "blur(4px)",
                            scrollBehavior: "smooth",
                        }}
                    />
                )}
            >
                {children}
            </Scrollbars>
        </div>
    );
}
