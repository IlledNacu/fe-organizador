import { useState, useEffect } from 'react';
import { Container, Title, Button, Group, Text, Stack, ActionIcon, NumberInput, Paper } from '@mantine/core';
import { IconBlur, IconEyePause, IconTrash, IconPlayerPlay } from '@tabler/icons-react';
import { BiAlarm } from "react-icons/bi";

export default function PomodoroPage() {
  const [seconds, setSeconds] = useState(25 * 60); // 25 min por defecto
  const [isActive, setIsActive] = useState(false);
  const [customValue, setCustomValue] = useState<number | string>(25);

  useEffect(() => {
    let interval: any = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
      alert("¡Tiempo cumplido!");
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  // Formatear segundos a MM:SS
  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSetTime = (m: number) => {
    setIsActive(false);
    setSeconds(m * 60);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <Container size="xs" py="xl">
      <Stack align="center" spacing="xl">
        <Title order={1} c="dimmed" style={{ fontFamily: 'serif' }}>Pomodoro</Title>

        {/* Display del Reloj */}
        <Paper shadow="md" p={50} radius="100%" withBorder bg="var(--mantine-color-blue-0)">
            <BiAlarm />
           <Text size="6rem" fw={900} variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
            {formatTime(seconds)}
          </Text>
        </Paper>

        {/* Tiempos Predeterminados */}
        <Group>
          <Button variant="light" color="orange" onClick={() => handleSetTime(25)}>Focus (25m)</Button>
          <Button variant="light" color="teal" onClick={() => handleSetTime(5)}>Short (5m)</Button>
          <Button variant="light" color="blue" onClick={() => handleSetTime(15)}>Long (15m)</Button>
        </Group>

        {/* Tiempo Personalizado */}
        <Group align="flex-end">
          <NumberInput 
            label="Minutos personalizados" 
            value={customValue} 
            onChange={setCustomValue} 
            min={1} 
          />
          <Button onClick={() => handleSetTime(Number(customValue))}>Set</Button>
        </Group>

        {/* Controles Principales */}
        <Group spacing="lg">
          <ActionIcon 
            size="xl" 
            radius="xl" 
            variant="filled" 
            color={isActive ? "yellow" : "green"}
            onClick={() => setIsActive(!isActive)}
          >
            {isActive ? <IconEyePause /> : <IconPlayerPlay />}
          </ActionIcon>

          <ActionIcon 
            size="xl" 
            radius="xl" 
            variant="outline" 
            color="red" 
            onClick={resetTimer}
            title="Tirar a la basura"
          >
            <IconTrash />
          </ActionIcon>
        </Group>
      </Stack>
    </Container>
  );
}