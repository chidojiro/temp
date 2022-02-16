type Props = {
  children?: React.ReactNode;
};

export const MarketingAction = ({ children }: Props) => {
  return <div className='flex-1 w-full h-full p-10 border rounded border-gray'>{children}</div>;
};
