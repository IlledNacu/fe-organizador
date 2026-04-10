import { useState, useEffect } from 'react';
import { Paper, Text, Affix, CloseButton, Transition, Group, Box } from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';

const FRASES = [
  "La disciplina es el puente entre las metas y los logros.",
  "Tu único límite es tu mente.",
  "Menos planificación y más acción.",
  "Hecho es mejor que perfecto.",
  "Cada línea de código cuenta."
];

export function InspirationCard() {
  const [opened, setOpened] = useState(true);
  const [frase, setFrase] = useState("");

  // Elegimos una frase al azar cuando carga el componente
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * FRASES.length);
    setFrase(FRASES[randomIndex]);
  }, []);

  return (
    <Affix position={{ bottom: 20, left: 20 }} zIndex={1000}>
      <Transition transition="slide-up" mounted={opened}>
        {(transitionStyles) => (
          <Paper
            shadow="lg"
            p="md"
            radius="lg"
            withBorder
            style={{ 
              ...transitionStyles, 
              width: 300,
              backgroundColor: 'var(--mantine-color-gray-0)',
              borderLeft: '4px solid var(--mantine-color-orange-filled)' 
            }}
          >
            <Group justify="space-between" align="flex-start" mb="xs">
              <IconQuote size={20} color="var(--mantine-color-orange-filled)" />
              <CloseButton 
                onClick={() => setOpened(false)} 
                variant="transparent" 
                size="sm" 
              />
            </Group>
            
            <Text size="sm" fs="italic" c="dimmed" style={{ lineHeight: 1.5 }}>
              "{frase}"
            </Text>
          </Paper>
        )}
      </Transition>
    </Affix>
  );
}