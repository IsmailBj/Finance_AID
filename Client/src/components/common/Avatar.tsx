import { FC } from "react";

interface AvatarProps {
  size?: number;
  src?: string | null;
  alt?: string;
  className?: string;
}
//  add event listener on localstora change
const Avatar: FC<AvatarProps> = ({
  size = 40,
  src,
  alt = "avatar",
  className,
}) => {
  const imageSrc =
    src || null ? `/images/avatar-${src}.png` : `/images/avatar-default.png`;

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
