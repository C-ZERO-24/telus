export type ShowmoreProps = {
  children: React.ReactNode;
  maxLines?: string;
  expanded?: boolean;
  onButtonClick?: (expanded: boolean) => void;
} & React.HTMLAttributes<HTMLDivElement>;
