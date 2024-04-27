import ArrowDown from '@/icons/linear/arrow-down.svg';
import PressableIcon from '@/shared/ui/buttons/PressableButton';
import React, { useState } from 'react';
import CardTitle, { CardTitleProps } from '../Wrappers/CardTitle';

interface AccordionProps extends CardTitleProps {}

const Accordion = ({ ...props }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CardTitle
      onPressHeader={() => setIsOpen(!isOpen)}
      borderRadius={16}
      titleProps={{ variant: 'subhead', weight: 'medium' }}
      rightHeader={
        <PressableIcon
          onPress={() => setIsOpen(!isOpen)}
          Icon={ArrowDown}
          style={{ transform: [{ rotate: isOpen ? '0deg' : '180deg' }] }}
        />
      }
      {...props}
    >
      {isOpen && props.children}
    </CardTitle>
  );
};

export default Accordion;
