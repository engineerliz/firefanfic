import React, { useState } from 'react';
import Button from '../../../components/button/Button';
import SideDrawer from '../../../components/sideDrawer/SideDrawer';
import FicEdit from '../FicEdit';

export type FicEditType = 'fic' | 'chapter';

interface FicEditButtonInterface {
  type?: FicEditType;
}

const FicEditButton = ({ type = 'fic' }: FicEditButtonInterface) => {
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const onSideDrawerDismiss = () => setIsEditOpen(false);
  return (
    <>
      <Button size="Medium" type="Primary" onClick={() => setIsEditOpen(true)}>
        {type === 'fic' ? 'Create New FicModel' : 'Add New Chapter'}
      </Button>
      <SideDrawer
        isOpen={isEditOpen}
        onDismiss={onSideDrawerDismiss}
        content={<FicEdit onDismiss={onSideDrawerDismiss} type={type} />}
      />
    </>
  );
};

export default FicEditButton;
