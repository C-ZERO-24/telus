import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '~/utils';

const variants = {
  display: {
    inline: 'inline-block',
    block: 'block',
  },
  p: {
    '1': 'p-1',
    '2': 'p-2',
    '3': 'p-3',
    '4': 'p-4',
    '5': 'p-5',
  },
  m: {
    '0': 'm-0',
    '1': 'm-1',
    '2': 'm-2',
    '3': 'm-3',
    '4': 'm-4',
    '5': 'm-5',
  },
  px: {
    '1': 'px-1',
    '2': 'px-2',
    '3': 'px-3',
    '4': 'px-4',
    '5': 'px-5',
  },
  py: {
    '1': 'py-1',
    '2': 'py-2',
    '3': 'py-3',
    '4': 'py-4',
    '5': 'py-5',
  },
  mx: {
    '0': 'mx-0',
    '1': 'mx-1',
    '2': 'mx-2',
    '3': 'mx-3',
    '4': 'mx-4',
    '5': 'mx-5',
  },
  my: {
    '0': 'my-0',
    '1': 'my-1',
    '2': 'my-2',
    '3': 'my-3',
    '4': 'my-4',
    '5': 'my-5',
  },
  color: {
    black: 'text-black',
    white: 'text-white',
    gray: 'text-gray-500',
    red: 'text-red-500',
    yellow: 'text-yellow-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
    indigo: 'text-indigo-500',
    purple: 'text-purple-500',
    pink: 'text-pink-500',
  },
};

export const box = cva('', {
  variants,
  defaultVariants: {
    display: 'block',
  },
});

export type BaseBoxVariants = VariantProps<typeof box>;

type BoxProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Box = ({
  children,
  className,
  m,
  mx,
  my,
  p,
  py,
  px,
  display,
  color,
}: BoxProps & BaseBoxVariants) => {
  const classes = cn(box({ m, mx, my, p, py, px, display, color }), className);

  return <div className={classes}>{children}</div>;
};
