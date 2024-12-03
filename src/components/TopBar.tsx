import { useState } from 'react';
import { IconGauge, IconFingerprint, IconActivity } from '@tabler/icons-react';
import { Box, NavLink } from '@mantine/core';
import { storage } from '../localStorage';

const pages = [
  { icon: IconGauge, label: 'Home', description: 'Item with description', path: '/', },
  { icon: IconFingerprint, label: 'Perfil', path: '/profile', },
  { icon: IconActivity, label: 'Notas', path: '/notes', },
];

const TopBar: React.FC = () => {
  const [active, setActive] = useState(0);

  const items = pages.map((item, index) => (
    <NavLink
      href={item.path}
      key={item.label}
      active={index === active}
      label={item.label}
      description={item.description}
      leftSection={<item.icon size="1rem" stroke={1.5} />}
      onClick={() => setActive(index)}
      color="pink"
    />
  ));

  return (
  storage.isUserLoggedIn()
  ?
  <Box w={220}>{items}</Box>
  : null
  )
}

export default TopBar;