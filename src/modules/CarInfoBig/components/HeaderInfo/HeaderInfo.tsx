import GroupInfo from '@/components/Informers/GroupInfo';
import TagPrice from '@/components/Informers/TagPrice';
import Card from '@/shared/ui/card/Card';
import React from 'react';

const HeaderInfo = () => {
  return (
    <Card borderRadius={0}>
      <GroupInfo leftInfo={'TOYOTA Land Cruiser'} rightInfo={'2012'} weight="medium" />
      <TagPrice amount={110001231} />
    </Card>
  );
};

export default HeaderInfo;
