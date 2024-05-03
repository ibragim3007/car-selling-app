import EditProfile from '@/modules/Profile/EditProfile';
import Grid from '@/shared/ui/layout/Grid';
import ScrollViewPage from '@/shared/ui/layout/ScrollViewPage';
import React from 'react';

const EditProfilePage = () => {
  return (
    <ScrollViewPage spaceVertical="sm">
      <Grid style={{ marginBottom: 80 }}>
        <EditProfile />
      </Grid>
    </ScrollViewPage>
  );
};

export default EditProfilePage;
