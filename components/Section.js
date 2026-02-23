const Section = ({ 
  children, 
  className = '', 
  bgColor = 'white',
  id 
}) => {
  const bgClasses = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10'
  };

  return (
    <section 
      id={id}
      className={`py-20 px-4 ${bgClasses[bgColor]} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;