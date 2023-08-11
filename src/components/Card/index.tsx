import * as React from 'react';

interface ICardProps {
    children: React.ReactNode
    className?: string;
}

const Card: React.FunctionComponent<ICardProps> = ({ children, className }) => {
  
  const defaultClassName = 'bg-[#282c34] rounded shadow-lg';
  const combinedClassName = className ? `${defaultClassName} ${className}` : defaultClassName;

  return (
    <div className={combinedClassName}>
        {children}
    </div>
  );
};

export default Card;
