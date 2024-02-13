export type ContainerElements = 'div' | 'main' | 'article';

export type ContainerProps = {
  children: React.ReactNode;
  as?: ContainerElements;
  center?: boolean;
  centerX?: boolean;
  centerY?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
