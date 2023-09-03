import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  idName: string;
  hasSpan?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  idName,
  hasSpan = true,
}) => {
  return (
    <>
      <section className={`sm:px-16 px-6 max-w-7xl mx-auto relative z-0`}>
        {hasSpan && (
          <div className="mb-[80px]" id={idName}>
            &nbsp;
          </div>
        )}
        {children}
      </section>
    </>
  );
};

export default SectionWrapper;
