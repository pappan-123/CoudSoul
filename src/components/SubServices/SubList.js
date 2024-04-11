import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function SubList({services}) {
  return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
      {services.map((service, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              {/* Placeholder for avatar; you might want to customize this part */}
              <Avatar alt={`Service Avatar ${index}`} src={`/static/images/avatar/${index + 1}.jpg`} />
            </ListItemAvatar>
            <ListItemText
              primary={service}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  </Typography>
                  {/* Placeholder for secondary text; customize as needed */}
                  {" — More details about this service..."}
                </React.Fragment>
              }
            />
          </ListItem>
          {index < services.length - 1 && <Divider variant="inset" component="li" />}
        </React.Fragment>
      ))}
    </List>
  );
}
