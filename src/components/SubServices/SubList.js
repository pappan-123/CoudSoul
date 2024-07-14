import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const StyledListItem = styled(ListItem)(({ theme }) => ({
  animation: 'fadeInUp 0.5s ease-in-out',
  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
}));

export default function SubList({ services }) {
  const trigger = useScrollTrigger();

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <StyledListItem alignItems="flex-start" style={{ animationDelay: `${index * 0.1}s` }}>
              <ListItemAvatar>
                <Avatar alt={`Service Avatar ${index}`} src={`/static/images/avatar/${index + 1}.jpg`} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h6" component="span" color="error">
                    {service.title}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                }
              />
            </StyledListItem>
            {index < services.length - 1 && <Divider variant="inset" component="li" />}
          </Grid>
        ))}
      </Grid>
    </List>
  );
}
