// Skeleton 컴포넌트
export const Skeleton = ({ width, height }: { width: string; height: string }) => {
    return (
        <div
            style={{
                width: width || "10%",
                height: height || "1em",
                backgroundColor: "#e0e0e0",
                borderRadius: "4px",
                textAlign: "center",
                animation: "skeleton-loading 1.2s infinite ease-in-out",
            }}
        />
    );
};
