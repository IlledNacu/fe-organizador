import { Paper, Stack, Text } from '@mantine/core';
import ReactPlayer from 'react-player'; //https://www.npmjs.com/package/react-player

export const MusicPlayer = ({ color }: { color: string }) => (
  <Paper p="md" radius="lg" h={'100%'} bg={color} pos="relative" style={{ overflow: 'hidden' }}>
    <Text fw={700} size="xl" mb="md">¿Qué escuchamos?</Text>
    
    <div style={{ borderRadius: '12px', overflow: 'hidden', height: '450px' }}>
      <ReactPlayer 
        src="https://www.youtube.com/watch?v=jfKfPfyJRdk"
        width="100%"
        height="100%"
        controls={true}
      />
    </div>

    <Stack mt="md" spacing="xs">
      <Text size="sm" italic>Recomendado para hoy:</Text>
      <Text fw={500}>Lofi Hip Hop Radio 🐾</Text>
    </Stack>
  </Paper>
);