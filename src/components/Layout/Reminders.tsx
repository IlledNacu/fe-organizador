import { Menu, Button, Text, rem, Affix, Badge, Group } from '@mantine/core';
import { IconBell, IconCircleCheck, IconClock } from '@tabler/icons-react';

export function Reminders() {
  // Datos falsos para probar
  const fakeReminders = [
    { id: 1, text: 'Tomar agua', time: '14:00' },
    { id: 2, text: 'Reunión de proyecto', time: '16:30' },
    { id: 3, text: 'Estudiar React', time: '18:00' },
  ];

  return (
    <Affix position={{ top: 20, right: 20 }} zIndex={1000}>
      <Menu shadow="md" width={250} radius="md" transitionProps={{ transition: 'pop-top-right' }}>
        <Menu.Target>
          <Button 
            color="orange" 
            radius="xl" 
            size="md" 
            leftSection={<IconBell size={20} />}
            style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          >
            Recordatorios
            <Badge color="red" variant="filled" size="sm" ml={8} circle>
              {fakeReminders.length}
            </Badge>
          </Button>
        </Menu.Target>

        <Menu.Dropdown p="xs">
          <Menu.Label>Próximos eventos</Menu.Label>
          
          {fakeReminders.map((item) => (
            <Menu.Item 
              key={item.id} 
              leftSection={<IconClock style={{ width: rem(14), height: rem(14) }} />}
            >
              <Group justify="space-between">
                <Text size="sm">{item.text}</Text>
                <Text size="xs" c="dimmed">{item.time}</Text>
              </Group>
            </Menu.Item>
          ))}

          <Menu.Divider />

          <Menu.Item 
            color="teal" 
            leftSection={<IconCircleCheck style={{ width: rem(14), height: rem(14) }} />}
          >
            Marcar todo como leído
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Affix>
  );
}