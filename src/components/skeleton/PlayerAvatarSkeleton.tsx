import ContentLoader from "react-content-loader";

interface PlayerSkeletonProps {
  width: string;
  height: string;
}

const PlayerAvatarSkeleton = ({ width, height }: PlayerSkeletonProps) => {
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="10" ry="10" width={width} height={height} />
    </ContentLoader>
  );
};

export default PlayerAvatarSkeleton;
