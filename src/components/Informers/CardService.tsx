import Card, { CardProps } from '@/shared/ui/card/Card';
import IconWrap from '@/shared/ui/icons/IconWrap';
import Grid from '@/shared/ui/layout/Grid';
import Typography from '@/shared/ui/typography/Typography';
import { normalizedSize } from '@/shared/utils/size';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

interface CardServiceProp extends CardProps {
  title: string;
  description?: string;
  additionalInfo?: string;
  Icon?: React.FC<SvgProps>;
  backgroundColor?: string;
  href: string;
}

const CardService = ({
  title,
  description,
  Icon,
  backgroundColor,
  additionalInfo,
  href,
  ...props
}: CardServiceProp) => {
  const styles: CardProps['style'] = StyleSheet.flatten([
    {
      backgroundColor: backgroundColor || 'transparent',
      padding: normalizedSize(12),
      overflow: 'hidden',
      minHeight: normalizedSize(120),
      borderRadius: 12,
    },
    props.style,
  ]);

  return (
    <Pressable onPress={() => router.push(href)} style={[{ minHeight: normalizedSize(120), flex: props.flex }]}>
      <Card {...props} style={styles}>
        <Grid flex={1} space="sm">
          <Grid flex={1} space="sm">
            <Typography color="white" weight="bold">
              {title}
            </Typography>
            {description && (
              <Typography color="white" variant="caption-1">
                {description}
              </Typography>
            )}
          </Grid>
          {additionalInfo && (
            <Grid
              style={{
                backgroundColor: '#ffffff63',
                alignSelf: 'flex-start',
                padding: normalizedSize(4),
                borderRadius: 4,
              }}
            >
              <Typography variant="footnote" color="white">
                Для браузера
              </Typography>
            </Grid>
          )}
          <Grid style={{ position: 'absolute', right: '-5%', bottom: '-20%' }}>
            {Icon && <IconWrap size={80} Icon={Icon} style={{ opacity: 0.4 }} />}
          </Grid>
        </Grid>
      </Card>
    </Pressable>
  );
};

export default CardService;
