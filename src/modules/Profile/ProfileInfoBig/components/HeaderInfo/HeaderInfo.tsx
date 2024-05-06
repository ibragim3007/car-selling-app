import { useUserQuery } from '@/shared/api/entityies/auth/api.auth';
import { useTheme } from '@/shared/hooks/stylesHooks/useTheme';
import Card from '@/shared/ui/card/Card';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import { FontAwesome6 } from '@expo/vector-icons';
import React from 'react';
const HeaderInfo = () => {
  const { colors } = useTheme();
  const { data } = useUserQuery();
  return (
    <Card borderRadius={0} style={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
      <Grid space="md" row align="center">
        <Grid>
          <Grid
            align="center"
            justfity="center"
            style={{
              width: normalizedSize(64),
              height: normalizedSize(64),
              backgroundColor: colors.background.success,
              borderRadius: 60,
            }}
          >
            <FontAwesome6 name="user-large" size={normalizedSize(22)} color={colors.accent.primary} />
          </Grid>
        </Grid>
        <Grid gap={8}>
          <Typography weight="bold" variant="title-2">
            {data?.fname} {data?.lname}
          </Typography>

          <Typography color="secondary" variant="subhead">
            +7 (922) 222-22-22
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HeaderInfo;
