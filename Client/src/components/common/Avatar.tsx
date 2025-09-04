import { FC } from "react";

interface AvatarProps {
  size?: number;
  src?: string;
  alt?: string;
  className?: string;
}

const Avatar: FC<AvatarProps> = ({
  size = 40,
  src,
  alt = "avatar",
  className,
}) => {
  const imageSrc = src ? `/images/${src}` : `/images/default-avatar.png`;

  return (
    <img
      className={`avatar${className ? ` ${className}` : ""}`}
      src={imageSrc}
      alt={alt}
      width={size}
      height={size}
      style={{ width: size, height: size, borderRadius: "50%" }}
    />
  );
};

export default Avatar;
